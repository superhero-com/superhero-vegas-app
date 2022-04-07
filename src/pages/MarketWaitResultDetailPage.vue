<template>
    <div>
        <p class=".text-xl-h4 text-h5 mt-5">Provide the results</p>


        <div class="d-flex justify-center" v-if="isLoading">
            <v-progress-circular
                    :size="40"
                    class="mt-16"
                    color="primary"
                    indeterminate
            ></v-progress-circular>
        </div>

        <div v-if="!isLoading">
            <div class="mt-3">
                <MarketItem :is_market="false" :model="model" :put-result-index="-1" :is-user-markets-receive="false"></MarketItem>
            </div>

            <div class="market-item mt-3">

                <div class="d-flex justify-start mt-3 mb">

                    <span class="ml-6" style="width: 8px;height: 30px ;background-color: rgb(49, 91, 247); border-radius: 3px;"></span>
                    <span class="text-h6 ml-2">Optional results</span>
                </div>
                <div v-show="isUserMarketResultRecord" class="flex-column justify-center mt-5 mr-15 mb-5">
                    <div class="d-flex justify-start" v-for="(item,index) in model.answers" :key="index">

                        <span class="ml-10 " style="line-height: 45px">{{ index + 1 }}</span>
                        <v-progress-linear :value="getAnswersProportion(item.count)" height="40" class="mb-3 ml-4 rounded"
                                           color="primary accent-4">
                            <strong>{{ item.content }} {{ getAnswersProportion(item.count) }}% {{ getMyAnswer(index) }}</strong>
                        </v-progress-linear>
                    </div>
                </div>

                <div v-show="!isUserMarketResultRecord" class="flex-column justify-center mt-5 mr-15  mb-5">
                    <div class="d-flex justify-start" v-for="(item,index) in model.answers" :key="index">

                        <span class="ml-10 " style="line-height: 45px">{{ index + 1 }}</span>
                        <v-btn min-width="501" @click='showAlert(index)' height="40" class="mb-3 ml-4 rounded"
                               color="primary accent-4" elevation="0"
                               large>
                            {{ item.content }}
                        </v-btn>

                    </div>

                </div>


            </div>
            {{ model.over_height }}
            {{ $store.state.blockHeight }}
        </div>


        <v-dialog
                v-if="!isLoading"
                v-model="agreeDialog"
                max-width="400"
        >
            <v-card>
                <v-card-title class="text-h5">
                    Provide confirm
                </v-card-title>

                <v-card-text>
                    Are you sure you want {{ model.answers[selectIndex].content }} to be the right answer? If the violation will be deducted to provide eligibility
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                            color="green darken-1"
                            text
                            @click="agreeDialog = false"
                    >
                        Disagree
                    </v-btn>

                    <v-btn
                            color="green darken-1"
                            text
                            :loading="agreeLoading"
                            @click="submitResult()"
                    >
                        Agree
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <VegasSnackbar :snackbar="snackbar" :snackbar-msg="snackbarMsg" />

    </div>

</template>

<script>
import {AmountFormatter} from '@aeternity/aepp-sdk/'
import {formatDate} from "@/utils/date";
import MarketItem from "@/components/MarketItem";
import VegasSnackbar from "@/components/VegasSnackbar";

export default {
    name: 'MarketWaitResultDetailPage',
    components: {VegasSnackbar, MarketItem},
    props: {
        msg: String
    },
    data() {
        return {
            //同意dialog
            agreeDialog: false,
            //确认按钮loading状态
            agreeLoading: false,
            //错误提示组件
            snackbar: false,
            //错误提示组件的msg
            snackbarMsg: '',
            //临时变量，选择的第几个问题
            selectIndex: 0,
            //是否显示loading
            isLoading: true,
            //当前预测是否已经有答案了
            isUserMarketResultRecord: false,
            //数据
            model: {},
        }
    },
    watch: {
        //定时关闭通知
        snackbar(val) {
            val && setTimeout(() => {
                this.snackbar = false
            }, 2000)
        },
    },
    mounted: function () {
        //注册load事件
        this.$bus.on('load', this.load);
        this.load();
    },
    beforeDestroy() {
        //移除load事件
        this.$bus.off('load', this.load);
    },
    methods: {
        //转换ae
        formatAe(amount) {
            return AmountFormatter.toAe(amount.toString());
        },
        //获取当前投票的百分比
        getAnswersProportion(count) {
            count = parseInt(count);
            if (count === 0) {
                return 0;
            }
            return count / parseInt(this.model.put_count.toString()) * 100;
        },
        //获得自己投票的标示
        getMyAnswer(index) {
            if (index === this.userMarketsRecordResult) {
                return "(My)";
            }
            return "";
        },

        //显示对话框
        showAlert(index) {
            this.selectIndex = index;
            this.agreeDialog = true;
        },

        //提交选择的答案
        async submitResult() {
            try {
                this.agreeLoading = true;


                let result;
                if (parseInt(this.model.market_type.toString()) === 0) {
                    result = await this.$store.state.veagsContract.methods.private_update_market_progress_to_over(this.model.owner, this.model.market_id, this.selectIndex);
                } else {
                    result = await this.$store.state.veagsContract.methods.provide_answer(this.model.owner, this.model.market_id, this.selectIndex);
                }

                console.log(result);
                console.log(JSON.stringify(result.decodedEvents));
                await this.load();
            } catch (e) {
                console.log(e.message);
                this.snackbarMsg = e.message;
                this.snackbar = true;
            } finally {
                this.agreeLoading = false;
                this.agreeDialog = false;
            }
        },
        async load() {
            //sdk没有初始化直接返回
            if (this.$store.state.aeSdk == null) return;
            if (this.$store.state.veagsContract == null) return;
            //页面开始loading
            this.isLoading = true;
            //获取url中的归属人
            let owner = this.$route.query.owner;
            //获取marketId
            let marketId = this.$route.query.market_id;
            console.log(this.$store.state.veagsContract);
            console.log(owner);
            console.log(marketId);
            //获取合约中的具体信息
            const {decodedResult: marketDetail} = await this.$store.state.veagsContract.methods.get_market_detail(owner, marketId);
            this.model = marketDetail.market;
            if (parseInt(this.model.market_type) === 0 && parseInt(this.model.result) !== -1) {
                this.isUserMarketResultRecord = true;
                console.log(true);
            } else {
                this.isUserMarketResultRecord = marketDetail.is_oracle_market_record;
                console.log(this.isUserMarketResultRecord);
            }
            console.log(this.isUserMarketResultRecord);
            if (this.isUserMarketResultRecord) {
                await this.$router.push({
                    path: '/market_detail',
                    query: {owner: owner, market_id: marketId}
                })
            }

            this.isLoading = false;
        },
        //格式化结束时间
        formatTime(market) {
            let currentTime = Date.parse(new Date());
            let endTimeTime = ((market.over_height - this.$store.state.blockHeight) * 1000 * 3 * 60) + currentTime;
            return formatDate(new Date(endTimeTime), 'yyyy-MM-dd hh:mm:ss')
        },
    }
};
</script>
<style lang="scss" scoped>

.market-item {
  background-color: #1B1B23;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 0 solid #000000
}

.item-header {
  color: #babac0;
  border-radius: 10px;
  height: 40px;
  background: rgba(0, 0, 0, 0.97);
  margin-left: 10px;
  margin-right: 10px;
  line-height: 40px;
}

.item-header-id {
  font-size: 18px;
  color: #ffffff;
  background: rgb(49, 91, 247);
  display: inline-block;
  height: 40px;
  float: left;
  border-radius: 10px 0px 10px 0px;
  text-align: center;
  line-height: 40px;
  padding-left: 10px;
  padding-right: 10px;
}

.item-header-time {
  font-size: 14px;
  text-align: center;
  line-height: 40px;
  float: left;
  color: #9D9D9D;
  margin-left: 10px;
}

.item-header-type {
  font-size: 14px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  float: right;
  border-radius: 100px;
  background: #EA034F;
  margin: 8px 10px;
  height: 26px;
  line-height: 26px;
  color: #ffffff
}

.item-header-type-icon {
  width: 13px;
  height: 13px;
  margin-top: 7px;
  display: inline;
  fill: #ffffff;
  margin-left: 5px;
  float: left;
  margin-right: 5px
}

.icon {
  width: 18px;
  fill: #ffffff;
  height: 18px;
}


.item-content-source-title {
  font-size: 14px;
  color: #9D9D9D;
}

.card-item-content {
  font-size: 14px;
  color: #fff;
}

.carousel {
  margin-top: 12px;
  border-radius: 12px;
  padding-left: 17px;
  padding-right: 17px;
}

.card-item-answer {
  padding-right: 45px;
  padding-left: 45px;
  margin-top: 15px;
}

.market-item:hover {
  background-color: #22222a;
}

.item-content-text {
  text-align: left;
  padding: 15px 30px;
  font-size: 18px;
  line-height: 30px;
  font-weight: bold;
  color: #ffffff
}

.item-content-source {
  text-align: left;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px
}

.item-footer {
  color: #000000;
  background: #000000;
  border-radius: 6px;
  height: 40px;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px
}

.item-footer-pledge {
  text-align: left;
  padding-left: 15px;
  padding-right: 15px;
  float: left;
  display: inline-block;
  line-height: 40px
}

.item-footer-time-group {
  text-align: left;
  float: right;
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(247, 41, 110, 0);
  height: 30px;
  border-radius: 5px;
  margin-top: 5px;
  margin-right: 10px
}

.item-footer-time-group-left-group {
  background: rgb(49, 91, 247);
  height: 24px;
  margin: 2px;
  line-height: 26px;
  color: #ffffff;
  border-radius: 3px;
  display: flex;
}

.item-footer-time-group-left-group-icon {
  display: inline-block;
  margin: 3px 3px 3px 5px;
  float: left
}

.item-footer-time-group-left-group-text {
  font-size: 12px;
  display: inline;
  padding-left: 2px;
  padding-right: 10px;
  height: 24px
}

.item-footer-time-group-right-group {
  background: rgba(0, 255, 157, 0);
  height: 26px;
  margin: 2px;
  line-height: 26px;
  color: #ffffff;
  border-radius: 3px;
  display: flex;
}

.item-footer-time-group-right-group-text {
  font-size: 12px;
  display: inline;
  padding-left: 5px;
  padding-right: 0;
  height: 24px
}

.item-footer-time-group-right-group-icon {
  display: inline-block;
  margin: 3px 10px 3px 5px;
  float: right;

  fill: #F7296E;
  border-radius: 50px
}
</style>
