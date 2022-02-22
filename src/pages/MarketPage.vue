<template>
  <!--        <RouterLink to="login">Home</RouterLink>-->
  <!--        <img src="../assets/logo.png" alt="">-->


  <div>


    <p class=".text-xl-h4 text-h5 mt-5">Welcome Back to AEVegas!</p>
    <div>
      <img style="width: 100%" src="../assets/icons/header_market.png" alt="">
    </div>
    <div v-for="(item,index) in rows" :key="index">

      <router-link :to="{path:'/market_detail', query: {owner:item[1].owner,market_id:item[1].market_id}}">
        <div class="mt-3">
          <MarketItem :is_market="false" :model="item[1]"></MarketItem>
        </div>
      </router-link>

    </div>

  </div>


</template>

<script>

import MarketItem from "../components/MarketItem";
import VegasMarketContract from "@/contracts/VegasMarketContract";

export default {
  name: 'MarketPage',
  components: {MarketItem},
  props: {
    msg: String
  },
  data() {
    return {
      loading: false,
      rows: [],

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
      if(this.$store.state.aeInstance == null)return;
      let contract = await this.$store.state.aeInstance.getContractInstance(VegasMarketContract, {contractAddress: "ct_qucrR9M8is4ZYZPHEzUJGKvdDLsmRp6hcJZEFcFeGY6tkhSf9"});
      const result = await contract.methods.get_market_public(this.$store.state.address);
      this.rows = result.decodedResult;
      console.log(JSON.stringify(result.decodedResult));
      console.log(this.$store.state.address);
    }
  }
};
</script>

<style scoped>


</style>
