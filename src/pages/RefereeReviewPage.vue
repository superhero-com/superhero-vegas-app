<template>
  <!--        <RouterLink to="login">Home</RouterLink>-->
  <!--        <img src="../assets/logo.png" alt="">-->


  <div>


    <p class=".text-xl-h4 text-h5 mt-5">Please provide answers to the following predictions!</p>

    <div v-if="is_not_data" style="margin-top:100px;text-align: center;color: white">No up-to-date referee view market</div>

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

        <router-link :to="{path:'/market_detail_wait', query: {owner:item[1].owner,market_id:item[1].market_id}}">
          <div class="mt-3">
            <MarketItem :is_market="false" :model="item[1]"></MarketItem>
          </div>
        </router-link>

      </div>

    </div>


  </div>


</template>

<script>

import MarketItem from "../components/MarketItem";

export default {
  name: 'RefereeReviewPage',
  components: {MarketItem},
  props: {
    msg: String
  },
  data() {
    return {
      is_loading: true,
      is_not_data:false,
      marketsStart: [],

    }
  },
  computed: {},
  mounted: function () {
    this.$bus.on('load', this.load);
    console.log("load ready");
    this.load();
  },
  beforeDestroy() {
    this.$bus.off('load', this.load);
  },


  methods: {
    async load() {
      if (this.$store.state.aeInstance == null) return;
      const startResultDecode = await this.$store.state.veagsContract.methods.get_markets_wait(this.$store.state.address);
      let startResult = startResultDecode.decodedResult;
      console.log(JSON.stringify(startResult.decodedResult));
      if (startResult.lenght === 0) {
        this.is_not_data = true;
        return;
      }

      this.marketsStart = startResult;
      this.marketsStart.sort(function (a, b) {
        return a[1].create_time < b[1].create_time ? 1 : -1
      });
      this.is_loading = false;
      this.is_not_data = false;
    }
  }
};
</script>

<style scoped>


</style>
