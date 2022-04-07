<template>
    <div class="item-header">
        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs"
                     v-on="on"
                     :class="{
                             'item-header-type':isMarketSafe(),
                             'item-header-type-warning':!isMarketSafe()}">
                    <svg-icon class="item-header-type-icon" name='icon_hint'></svg-icon>
                    <span>{{ isMarketSafe() ? "SAFE" : "PRIVATE" }}</span>
                </div>


            </template>
            <span>
                    {{
                    isMarketSafe() ?
                            "The topic is created by the community and the results are aggregated by different users" :
                            "The private forecast is provided by the creator, the provider may be fraudulent, please confirm whether the question maker can be trusted"
                }}
                </span>
        </v-tooltip>
        <div class="item-header-time">
            <span>EndTime : {{ formatTime }}</span>
        </div>

        <v-btn class="item-header-share" @click.native.prevent="copyMarket"   v-clipboard:copy="url" v-clipboard:success="copyMarket"  icon x-small color="while">
            <v-icon>mdi-content-copy</v-icon>
        </v-btn>
    </div>
</template>
<script>
export default {
    name: 'MarketItemHeader',
    props: {
        copyMarket: {},
        formatTime: {},
        isMarketSafe: {},
        model: {}
    },
    data(){
        return{
          url:"https://boxwallet.app/static/dist/index.html#/market_detail?owner="+this.model.owner+"&market_id="+this.model.market_id
        }
    }

}
</script>
<style lang="scss" scoped>


.item-header {
  color: #babac0;
  border-radius: 5px;
  height: 40px;
  margin-left: 10px;
  margin-right: 10px;
  line-height: 40px;
}

.item-header-time {
  font-size: 14px;
  text-align: center;
  line-height: 40px;
  float: left;
  color: #9D9D9D;
  margin-right: 10px;
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

.item-header-type {
  font-size: 12px;
  padding-left: 8px;
  padding-right: 10px;
  text-align: center;
  float: left;
  border-radius: 5px;
  background: rgb(49, 91, 247);
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
  border-radius: 5px;
  background: #db041f;
  margin: 6px 10px;
  height: 28px;
  line-height: 28px;
  color: #ffffff
}


</style>
