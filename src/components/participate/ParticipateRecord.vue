<template>
    <div>


        <div v-if="is_not_data" style="margin-top:100px;text-align: center;color: white">No up-to-date global market
        </div>
        <div class="d-flex justify-center" v-if="is_loading">
            <v-progress-circular
                    :size="40"
                    class="mt-16"
                    color="primary"
                    indeterminate
            ></v-progress-circular>
        </div>

        <div v-if="!is_loading">
            <div v-for="(item,index) in marketsStart" :key="index">

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
        msg: String
    },

    data() {
        return {
            is_loading: true,
            is_not_data: false,
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
        async load() {
            console.log("load ready1");
            if (this.$store.state.aeInstance == null) return;
            const startResultDecode = await this.$store.state.veagsContract.methods.get_market_records(this.$store.state.address);
            let startResult = startResultDecode.decodedResult;
            console.log(JSON.stringify(startResult));
            if (startResult.length === 0) {
                this.is_not_data = true;
                this.is_loading = false;
                return;
            }
            this.marketsStart = startResult;
            this.marketsStart.sort(function (a, b) {
                return a.put_time < b.put_time ? 1 : -1
            });
            this.is_loading = false;
            this.is_not_data = false;
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
