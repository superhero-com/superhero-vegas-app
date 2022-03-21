<template>
    <div>
        <p class=".text-xl-h4 text-h5 mt-5">Start making predictions.</p>


        <div class="d-flex justify-center" v-if="is_loading">
            <v-progress-circular
                    :size="40"
                    class="mt-16"
                    color="primary"
                    indeterminate
            ></v-progress-circular>
        </div>

        <div v-if="!is_loading">
            <div class="mt-3">
                <MarketItem :is_market="false" :model="model"></MarketItem>
            </div>

            <div class="market-item mt-3">

                <div class="d-flex justify-start mt-3 mb">

                    <span class="ml-6" style="width: 8px;height: 30px ;background-color: rgb(49, 91, 247); border-radius: 3px;"></span>
                    <span class=".text-xl-h1 text-h6 ml-2">Optional results</span>
                </div>
                <div v-show="is_user_markets_record" class="flex-column justify-center mt-5 mr-15 mb-5">
                    <div class="d-flex justify-start" v-for="(item,index) in model.answers" :key="index">

                        <span class="ml-10 " style="line-height: 45px">{{ index +1}}</span>
                        <v-progress-linear  :value="getAnswersProportion(item.count)" height="40" class="mb-3 ml-4 rounded-lg"
                                           color="primary accent-4">
                            <strong>{{ item.content }} {{ getAnswersProportion(item.count) }}%  {{getMyAnswer(index)}}</strong>
                        </v-progress-linear>
                    </div>
                </div>

                <div v-show="!is_user_markets_record" class="flex-column justify-center mt-5 mr-15  mb-5">
                    <div class="d-flex justify-start" v-for="(item,index) in model.answers" :key="index">

                        <span class="ml-10 " style="line-height: 45px">{{ index +1}}</span>
                        <v-btn min-width="501" @click='showAlert(index)'  height="40" class="mb-3 ml-4 rounded-lg"
                                color="primary accent-4" elevation="0"
                                large>
                            {{ item.content }}
                        </v-btn>

                    </div>

                </div>


            </div>
            {{model.over_height}}
            {{$store.state.blockHeight}}
        </div>

        <v-btn
                class="mb-3 ml-4 rounded-lg"
                color="primary accent-4" elevation="0"
                @click="receive"
        >
            Receive
        </v-btn>



        <v-dialog
                v-if="!is_loading"
                v-model="agree_dialog"
                max-width="400"
        >
            <v-card>
                <v-card-title class="text-h5">
                    Whether the betting?
                </v-card-title>

                <v-card-text>
                    The answer you're going to bet on is {{ model.answers[select_index].content }}
                    Bets will cost you {{ toAe(model.min_amount) }} AE,After reaching the end time, you will receive the
                    prize manually
                    and will be limited to one bet per topic
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                            color="green darken-1"
                            text
                            @click="agree_dialog = false"
                    >
                        Disagree
                    </v-btn>

                    <v-btn
                            color="green darken-1"
                            text
                            :loading="agree_loading"
                            @click="submitAnswer()"
                    >
                        Agree
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-snackbar
                v-model="snackbar"
        >
            {{ error_text }}

            <template v-slot:action="{ attrs }">
                <v-btn
                        color="pink"
                        text
                        v-bind="attrs"
                        @click.native.prevent="snackbar = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>

    </div>

</template>

<script>
import {AmountFormatter} from '@aeternity/aepp-sdk/'
import {formatDate} from "@/utils/date";
import MarketItem from "@/components/MarketItem";

export default {
    name: 'MarketDetailPage',
    components: {MarketItem},
    props: {
        msg: String
    },
    data() {
        return {

            agree_dialog: false,
            agree_loading: false,
            snackbar: false,
            error_text: '',

            select_index: 0,
            is_loading: true,
            is_user_markets_record: false,
            getUserMarketsRecordResult: -1,
            model: null,
        }
    },

    mounted: function () {
        this.$bus.on('load', this.load);
        this.load();
    },

    beforeDestroy() {
        this.$bus.off('load', this.load);
    },
    methods: {

        toAe(amount) {
            return AmountFormatter.toAe(amount);
        },
        async receive() {
            const result = await this.$store.state.veagsContract.methods.receive_reward(this.model.owner, this.model.market_id);
            console.log(result);
        },
        getAnswersProportion(count) {
            if(count === 0){
                return 0;
            }
            return count / this.model.put_count * 100;
        },
        getMyAnswer(index) {
            if(index === this.getUserMarketsRecordResult){
                return "(My)";
            }
            return "";
        },
        showAlert(index) {
            this.select_index = index;
            this.agree_dialog = true;

        },
        async submitAnswer() {
            try {
                this.agree_loading = true;

                let accountBalance = await this.$store.state.aeInstance.balance(this.$store.state.address);
                if (accountBalance <= this.model.min_amount) {
                    console.log(accountBalance);
                    this.error_text = "not sufficient funds";
                    this.snackbar = true;
                    return;
                }


                const result = await this.$store.state.veagsContract.methods.submit_answer(this.model.owner, this.model.market_id, this.select_index, {amount: this.model.min_amount});
                console.log(result);
                console.log(JSON.stringify(result.decodedEvents));
                await this.load();
            } catch (e) {
                console.log(e.message);
                this.error_text = e.message;
                this.snackbar = true;
            } finally {
                this.agree_loading = false;
                this.agree_dialog = false;
            }
        },
        async load() {
            if (this.$store.state.aeInstance == null) return;
            this.is_loading = true;
            let owner = this.$route.query.owner;
            let market_id = this.$route.query.market_id;
            console.log("owner:" + owner);
            console.log("market_id:" + market_id);

            const getMarketData = await this.$store.state.veagsContract.methods.get_market(owner, market_id);
            const isUserMarketsRecordData = await this.$store.state.veagsContract.methods.is_user_markets_record(owner, market_id);
            const getUserMarketsRecordResultDecode = await this.$store.state.veagsContract.methods.get_user_markets_record_result(owner, market_id);
            this.model = getMarketData.decodedResult;
            this.is_user_markets_record = isUserMarketsRecordData.decodedResult;
            this.getUserMarketsRecordResult = getUserMarketsRecordResultDecode.decodedResult;
            console.log(JSON.stringify(this.model));
            this.is_loading = false;
        },
        formatTime(market) {
            let currentTime = Date.parse(new Date());
            let endTimeTime = ((market.over_height - this.$store.state.blockHeight) * 1000 * 3 * 60) + currentTime;

            return formatDate(new Date(endTimeTime), 'yyyy-MM-dd hh:mm:ss')
            // return endTimeTime;
        },
    }
};
</script>
<style lang="scss" scoped>

.market-item {
  background-color: #1B1B23;
  border-radius: 10px;
  /*margin-left: 15px;*/
  /*margin-right: 15px;*/
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
