<template>
    <div class="market-item">
        <MarketItemHeader :copy-market="copyMarket" :format-time="formatTime(model)" :model="model" />

        <v-divider :dark='true' class="ml-5 mr-5 mt-2"></v-divider>

        <div class="item-content-text">
            <span>{{ model.content }}</span>
        </div>

        <div class="item-content-source">
            <span class="item-content-source-title">Data source：</span>
            <a href="#" class="card-item-content" style="color:#f7296e">{{ model.source_url }}</a>
        </div>

        <MarketItemFloor :is-over="isOver(model)" :model="model" :to-ae="formatAe(model.total_amount)" />

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
        model: {}
    },
    data() {
        return {
            snackbar: false,
            snackbarMsg: "",
        }
    },
    watch: {
        //定时关闭通知
        overlay(val) {
            val && setTimeout(() => {
                this.overlay = false
            }, 2000)
        },
    },
    mounted() {

    },

    methods: {
        //转换ae
        formatAe(amount) {
            return AmountFormatter.toAe(amount);
        },
        //复制地址
        copyMarket() {
            console.log("123");
            this.snackbarMsg = "Copy Success"
            this.snackbar = true;
        },
        //预测是否已经结束
        isOver(market) {
            return this.$store.state.blockHeight > market.over_height;
        },
        //格式化时间
        formatTime: function (market) {
            let currentTime = Date.parse(Date());
            let endTimeTime = ((market.over_height - this.$store.state.blockHeight) * 1000 * 3 * 60) + currentTime;
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

</style>
