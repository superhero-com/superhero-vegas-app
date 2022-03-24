<template>
    <div style="text-align: center;">
        <div v-if="isNotData" style="margin-top:200px;text-align: center;color: white">There are no ongoing topics
            that I
            initiated
        </div>


        <div class="d-flex justify-center" v-if="isLoading">
            <v-progress-circular
                    :size="40"
                    class="mt-16"
                    color="primary"
                    indeterminate
            ></v-progress-circular>
        </div>
        <div v-if="!isLoading">
            <div v-for="(item,index) in marketsStart" :key="index">

                <router-link :to="{path: getPath(item), query: {owner:item.owner,market_id:item.market_id}}">
                    <div class="mt-3">
                        <MarketItem :is_market="false" :model="item"></MarketItem>
                    </div>
                </router-link>

            </div>

        </div>


    </div>


</template>


<script>
import MarketItem from "../../components/MarketItem";

export default {
    components: {MarketItem},
    name: 'ParticipateInProgress',
    props: {},
    data() {
        return {
            //是否loading
            isLoading: true,
            //是否没有数据
            isNotData: false,
            //正在进行中的列表
            marketsStart: [],
        }
    },
    mounted: function () {
        this.$bus.on('load', this.load);
    },
    beforeDestroy() {
        this.$bus.off('load', this.load);
    },

    methods: {

        //转换path,如果等待结果的话去等待结果页面,如果不是等待结果的话去详情页面
        getPath(market) {
            if (this.$store.state.aeSdk == null) return 'market_detail';
            return this.$store.state.blockHeight > market.over_height ? '/market_detail_wait' : 'market_detail'
        },


        async load() {
            if (this.$store.state.aeSdk == null) return;
            const startResultDecode = await this.$store.state.veagsContract.methods.get_markets_start(this.$store.state.address);
            console.log(startResultDecode);
            let startResult = startResultDecode.decodedResult;

            let startResultArr=[];
            // 依次获取map对象值
            startResult.forEach(function (value) {
                startResultArr.push(value)
            });
            //如果没有进行中的数据设置为没数据状态
            if (startResultArr.length === 0) {
                this.isLoading = false;
                this.isNotData = true;
                return;
            }
            //排序
            this.marketsStart = startResultArr;
            this.marketsStart.sort(function (a, b) {
                return a.create_time < b.create_time ? 1 : -1
            });
            console.log(this.marketsStart);
            this.isLoading = false;
            this.isNotData = false;
        }
    }
}
</script>

<style lang="scss" scoped>


.search {
  width: 306px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}

.input {
  margin: 0 auto;
  width: 255px;
}


</style>
