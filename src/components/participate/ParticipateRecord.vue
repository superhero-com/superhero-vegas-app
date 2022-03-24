<template>
    <div>


        <div v-if="isNotData" style="margin-top:100px;text-align: center;color: white">No up-to-date global market
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
            <div v-for="(item,index) in marketsRecord" :key="index">

                <router-link :to="{path:'/market_detail', query: {owner:item.owner,market_id:item.market_id}}">
                    <div class="mt-3">
                        <MarketRecordItem :is_market="false" :model="item"></MarketRecordItem>
                    </div>
                </router-link>

            </div>

        </div>

    </div>

</template>


<script>

import MarketRecordItem from "@/components/MarketRecordItem";
export default {
    components: {MarketRecordItem},
    name: 'ParticipateRecord',
    props: {
    },

    data() {
        return {
            isLoading: true,
            isNotData: false,
            marketsRecord: [],
        }
    },
    mounted: function () {
        this.$bus.on('load', this.load);
    },
    beforeDestroy() {
        this.$bus.off('load', this.load);
    },

    methods: {
        async load() {
            if (this.$store.state.aeSdk == null) return;
            const startResultDecode = await this.$store.state.veagsContract.methods.get_market_records(this.$store.state.address);
            let startResult = startResultDecode.decodedResult;

            let startResultArr=[];
            // 依次获取map对象值
            startResult.forEach(function (value) {
                startResultArr.push(value)
            });
            console.log(startResultArr);
            if (startResultArr.length === 0) {
                this.isNotData = true;
                this.isLoading = false;
                return;
            }
            //排序
            this.marketsRecord = startResultArr;
            this.marketsRecord.sort(function (a, b) {
                return a.put_time.toString() < b.put_time.toString ? 1 : -1
            });
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
