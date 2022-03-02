<template>
  <div style="text-align: center;">
    <div v-if="!is_loading" style="margin-top:200px;text-align: center;color: white">There are no ongoing topics that I initiated</div>

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

        <router-link :to="{path:'/market_detail', query: {owner:item[1].owner,market_id:item[1].market_id}}">
          <div class="mt-3">
            <MarketItem :is_market="false" :model="item[1]"></MarketItem>
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
  name: 'ParticipateMy',
  props: {
    msg: String,

  },
  data() {
    return {
      is_loading: true,
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
      const startResultDecode = await this.$store.state.veagsContract.methods.get_markets_start(this.$store.state.address);
      let startResult = startResultDecode.decodedResult;
      console.log(JSON.stringify(startResult));
      if (startResult.lenght === 0) {
        return;
      }
      this.marketsStart = startResult;
      this.marketsStart.sort(function (a, b) {
        return a[1].create_time < b[1].create_time ? 1 : -1
      });
      this.is_loading = false;
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
