<template>
    <div class="market-item">
        <MarketItemHeader :copy-market="copyMarket" :format-time="formatTime(model)" :is-market-safe="isMarketSafe" :model="model" />

        <v-divider :dark='true' class="ml-5 mr-5 mt-2"></v-divider>

        <div class="item-content-text ">
            <span class="text-h6">{{ model.content }}</span>
        </div>

        <div class="item-content-source">
            <span class="item-content-source-title">Data source：</span>
            <a href="#" class="card-item-content" style="color:#f7296e">{{ model.source_url }}</a>
        </div>

        <MarketItemFloor :is-over="isOver(model)" :model="model" :state="state" :stateIcon="stateIcon" :stateText="stateText" :to-ae="formatAe(model.total_amount)" />

        <VegasSnackbar :snackbar="snackbar" :snackbar-msg="snackbarMsg" />
    </div>
</template>
<script>


import {AmountFormatter} from '@aeternity/aepp-sdk/'
import {formatDate} from "@/utils/date.js"
import MarketItemFloor from "@/components/MarketItemFloor";
import MarketItemHeader from "@/components/MarketItemHeader";
import VegasSnackbar from "@/components/VegasSnackbar";

export default {

    components: {VegasSnackbar, MarketItemHeader, MarketItemFloor},
    name: 'MarketItem',
    props: {
        //预测实体数据
        model: {},
        //当前投票的第几个条目
        putResultIndex: {},
        //用户是否领取过
        isUserMarketsReceive: {},
    },
    data() {
        return {
            //错误提示
            snackbar: false,
            snackbarMsg: "",
            //状态(文案,icon)
            state: "",
            stateText: "",
            stateIcon: "",
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
    mounted() {
        //更新状态
        this.updateType(this.model)
    },

    methods: {
        //是否是安全模式
        isMarketSafe() {
            return parseInt(this.model.market_type.toString()) === 1;
        },
        //转换ae
        formatAe(amount) {
            return AmountFormatter.toAe(amount.toString());
        },

        //复制地址
        copyMarket() {
            console.log("123");
            this.snackbarMsg = "Copy Success"
            this.snackbar = true;
        },

        //预测是否已经结束
        isOver(market) {
            return this.$store.state.blockHeight > market.over_height.toString();
        },

        //设置状态
        updateType(market) {
            market.progress = parseInt(market.progress.toString());
            market.result = parseInt(market.result.toString());
            let putResultIndex = parseInt(this.putResultIndex);
            //如果是正在进行和等待结果，都设置进行中
            if (market.progress === 0 || market.progress === 1) {
                this.state = "item-footer-time-group-state-wait";
                this.stateText = "WAIT RESULT";
                this.stateIcon = "type_progress";
            } else {
                console.log(putResultIndex);
                //如果投票的结果和最终的结果相等表示中奖
                if (market.result === putResultIndex) {
                    //如果领取过
                    if (this.isUserMarketsReceive) {
                        this.state = "item-footer-time-group-state-success-yes";
                        this.stateIcon = "type_success_ok";
                        this.stateText = "RECEIVE SUCCESS";
                    } else {
                        this.state = "item-footer-time-group-state-success-no";
                        this.stateIcon = "type_success_no";
                        this.stateText = "NOT RECEIVE";
                    }
                } else {
                    //未中奖
                    this.state = "item-footer-time-group-state-failure";
                    this.stateText = "NOT WINNING";
                    this.stateIcon = "type_failure";
                }
            }
        },

        //格式化时间
        formatTime: function (market) {
            let currentTime = Date.parse(Date());
            // let bigint = (123);
            // console.log(market.over_height.toString());
            let endTimeTime = ((market.over_height.toString() - (this.$store.state.blockHeight)) * 1000 * 3 * 60) + currentTime;
            return formatDate(new Date(endTimeTime), 'yyyy-MM-dd hh:mm')
        },



        sourceClock(url) {
            window.location.href = url;
            event.stopPropagation()
        },

    }
}
</script>

<style lang="scss" scoped>

.market-item {
  background-color: #1B1B23;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 0 solid #000000
}

.item-header-id {
  font-size: 18px;
  color: #ffffff;
  background: rgb(49, 91, 247);
  display: inline-block;
  height: 40px;
  float: left;
  border-radius: 10px 0 10px 0;
  text-align: center;
  line-height: 40px;
  padding-left: 10px;
  padding-right: 10px;
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
  line-height: 30px;
  color: #ffffff
}

.item-content-source {
  text-align: left;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px
}

</style>
