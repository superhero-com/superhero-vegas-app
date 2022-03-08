<template>

    <div class="market-item">
        <!--    <p>姓名:{{model}}</p>-->
        <!--        <p>{{ model.market_id }}</p>-->

        <div class="item-header">
            <!--      <div class="item-header-id">-->
            <!--        <span>#1</span>-->
            <!--      </div>-->

            <div class="item-header-time">
                <span>
                     Occurred Time : {{ formatTime(model) }}
                </span>
            </div>

            <v-btn class="item-header-share" @click.native.prevent="copyMarket" icon x-small color="while">
                <v-icon>mdi-content-copy</v-icon>
            </v-btn>

        </div>

        <v-divider
                :dark='true'
                class="ml-5 mr-5 mt-2"
        ></v-divider>

        <div class="item-content-text">
            <div>{{ model.content }}</div>
            <div class="mt-5">My choice: {{ model.put_result }}</div>
        </div>

        <div class="item-footer">
            <div class="item-footer-pledge">
                <span class="item-content-source-title">Amount：</span>
                <span class="card-item-content" style="color: #9D9D9D;"> {{ toAe(model.amount) }} (AE)</span>
            </div>

            <div v-if="!isShow()" class="item-footer-time-group-state-while">
                <v-progress-circular
                        :size="20"
                        color="primary"
                        indeterminate
                ></v-progress-circular>
            </div>

            <div v-if="isShow()" :class="state">
                <div class="item-footer-time-group-left-group-state">
                    <svg-icon class="icon item-footer-time-group-left-group-icon-state" :name='state_icon'></svg-icon>
                    <span class="item-footer-time-group-left-group-text-state">STATE:</span>
                </div>
                <div class="item-footer-time-group-right-group-state">
                    <span class="item-footer-time-group-right-group-text-state">{{ state_text }}</span>
                </div>
            </div>
        </div>
        <v-snackbar
                v-model="snackbar"
        >
            Copy Success

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
import {formatDate} from "@/utils/date.js"

export default {

    components: {},
    name: 'MarketItem',
    props: {

        is_market: {
            type: Boolean,
            default: false
        },
        model: {
            type: Object,
            default() {
                return {}
            }
        },

    },
    data() {
        return {
            snackbar: false,
            progress: null,
            state: "",
            state_text: "",
            state_icon: "",
            is_user_markets_receive_record: false,
        }
    },
    watch: {
        snackbar(val) {
            val && setTimeout(() => {
                this.snackbar = false
            }, 2000)
        },
    },
    mounted: function () {
        console.log("init:");
        this.getProgress();
    },
    methods: {

        async getProgress() {
            const getMarketData = await this.$store.state.veagsContract.methods.get_market(this.model.owner, this.model.market_id);

            let market = await getMarketData.decodedResult;

            console.log("getMarketData:" + JSON.stringify(this.progress));

            const isUserMarketsReceiveRecordDecode = await this.$store.state.veagsContract.methods.is_user_markets_receive_record(this.model.owner, this.model.market_id);
            this.is_user_markets_receive_record = await isUserMarketsReceiveRecordDecode.decodedResult;
            this.getType(market);
            this.progress = market.progress;
        },


        isShow() {
            return this.progress != null;
        },

        getType(market) {
            if (market.progress === 0 || market.progress === 1) {
                this.state = "item-footer-time-group-state-progress";
                this.state_text = "IN PROGRESS";
                this.state_icon = "type_progress";
            } else {
                if (market.result === this.model.put_result_index) {
                    if (this.is_user_markets_receive_record) {
                        this.state = "item-footer-time-group-state-success-yes";
                        this.state_icon = "type_success_ok";
                        this.state_text = "RECEIVE SUCCESS";
                    } else {
                        this.state = "item-footer-time-group-state-success-no";
                        this.state_icon = "type_success_no";
                        this.state_text = "NOT RECEIVE";
                    }

                } else {
                    this.state = "item-footer-time-group-state-failure";
                    this.state_text = "NOT WINNING";
                    this.state_icon = "type_failure";
                }

            }

            console.log("type:" + this.model.result_index);
            console.log("result:" + market.result);
        },


        toAe(amount) {
            return AmountFormatter.toAe(amount);
        },
        copyMarket() {
            this.snackbar = true;
        },
        formatTime(model) {
            return formatDate(new Date(model.put_time), 'yyyy-MM-dd hh:mm:ss')
        },

    }
}
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
  border-radius: 5px;
  height: 40px;
  //background: rgba(0, 0, 0, 0.97);
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
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  float: left;
  border-radius: 50px;
  background: green;
  margin: 6px 10px;
  height: 28px;
  line-height: 28px;
  color: #ffffff
}


.item-header-type-warning {
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  float: left;
  border-radius: 50px;
  background: #bc0018;
  margin: 6px 10px;
  height: 28px;
  line-height: 28px;
  color: #ffffff
}


.item-header-share {
  float: right;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  margin-right: 10px;
  text-align: center;
  color: #ffffff
}

.item-header-type-icon {
  width: 12px;
  height: 12px;
  margin-top: 8px;
  display: inline;
  fill: #ffffff;
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
  //color: #000000;
  //background: #000000;
  border-radius: 5px;
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


.item-footer-time-group-state-progress {
  text-align: left;
  float: right;
  display: flex;
  background: rgba(247, 41, 110, 0);
  height: 30px;
  border-radius: 5px;
  margin-top: 5px;
  margin-right: 10px;
  background: rgb(247, 191, 49);
}

.item-footer-time-group-state-failure {
  text-align: left;
  float: right;
  display: flex;
  background: rgba(247, 41, 110, 0);
  height: 30px;
  border-radius: 5px;
  margin-top: 5px;
  margin-right: 10px;
  background: rgb(160, 164, 179);
}

.item-footer-time-group-state-success-no {
  text-align: left;
  float: right;
  display: flex;
  background: rgba(247, 41, 110, 0);
  height: 30px;
  border-radius: 5px;
  margin-top: 5px;
  margin-right: 10px;
  background: rgb(49, 91, 247);
}

.item-footer-time-group-state-success-yes {
  text-align: left;
  float: right;
  display: flex;
  background: rgba(247, 41, 110, 0);
  height: 30px;
  border-radius: 5px;
  margin-top: 5px;
  margin-right: 10px;
  background: rgb(88, 160, 0);
}


.item-footer-time-group-state-while {
  text-align: left;
  float: right;
  display: flex;
  background: rgba(247, 41, 110, 0);
  height: 30px;
  border-radius: 5px;
  margin-top: 5px;
  padding-right: 30px;
  margin-right: 10px;
}

.item-footer-time-group-left-group-state {
  height: 30px;
  line-height: 30px;
  color: #ffffff;
  border-radius: 3px;
  display: flex;
}

.item-footer-time-group-left-group-icon-state {
  display: inline-block;
  margin: 6px 3px 3px 10px;
  float: left
}

.item-footer-time-group-left-group-text-state {
  font-size: 12px;
  display: inline;
  padding-left: 2px;
  padding-right: 2px;
  font-weight: bold;
  height: 24px
}

.item-footer-time-group-right-group-state {
  background: rgba(0, 255, 157, 0);
  height: 26px;
  margin: 2px;
  line-height: 26px;
  color: #ffffff;
  border-radius: 3px;
  display: flex;
}

.item-footer-time-group-right-group-text-state {
  font-size: 12px;
  display: inline;
  padding-left: 0px;
  padding-right: 10px;
  height: 24px
}

</style>
