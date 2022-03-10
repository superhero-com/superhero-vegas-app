<template>
  <div class="private">
    <p class=".text-xl-h4 text-h5 mt-5">Create your own market.</p>
    <v-card class="card mt-5 mb-5 pb-5 pt-5" rounded="lg">


      <div class="ml-4 mr-4">
        <div>Describe</div>
        <v-textarea
            outlined
            name="input-7-4"
            auto-grow
            class="mt-4 rounded-lg"
            placeholder="Example: Which country will finish the 2022 Winter Olympics in China with the most MEDALS?"
            hide-details="auto"
            v-model="content"
        ></v-textarea>
      </div>

      <div class="ml-4 mr-4">
        <div class="mt-4">Predicted results</div>

        <div v-for="(module,index) in result_list" :key="index">

          <v-text-field
              outlined
              auto-grow
              class="mt-4 rounded-lg"
              :placeholder="module.placeholder"
              v-model="module.model"
              hide-details="auto"
              append-outer-icon="mdi-close"
              @click:append-outer="deleteResult(index)"
          ></v-text-field>

        </div>
        <v-btn
            class="mt-4 rounded-lg"
            outlined
            rounded-lg
            large
            color="primary"

            @click='addResult()'
        >
          <v-icon dark>
            mdi-plus
          </v-icon>
          Other Result

        </v-btn>


      </div>

      <div class="ml-4 mr-4">
        <div class="mt-4">Data Source</div>
        <v-text-field
            v-model="sourceUrl"
            outlined
            auto-grow
            class="mt-4 rounded-lg"
            placeholder="https://weather.com"
            hide-details="auto"
        />
      </div>

      <div class="ml-4 mr-4">
        <div class="mt-4">Minimum Pledge Quantity（AE）</div>
        <v-text-field
            v-model="minAmount"
            outlined
            auto-grow
            class="mt-4 rounded-lg"
            placeholder="10"
            hide-details="auto"
        />
      </div>
      <div class="ml-4 mr-4">
        <div class="mt-4">Select the deadline for voting (from now on)</div>
        <v-btn-toggle
            class="mt-4"
            v-model="over_height"
            color="primary "
            borderless
            mandatory
        >
          <v-btn value="1">
            1
          </v-btn>

          <v-btn value="3">
            3
          </v-btn>

          <v-btn value="5">
            5
          </v-btn>

          <v-btn value="480">
            ONE DAY
          </v-btn>

          <v-btn value="3360">
            WEEK
          </v-btn>

          <v-btn value="14400">
            MOON
          </v-btn>

        </v-btn-toggle>
      </div>

      <div class="mt-6 mb-14 d-flex justify-center">
        <v-btn @click='createMarket()'
               :loading="createLoading"
               :disabled="createLoading"
               color="primary"
               elevation="2"
               large
               class="mt-4 rounded-lg">
          Confirm Create
        </v-btn>
      </div>

    </v-card>


    <v-snackbar
        v-model="snackbar"
        :vertical="true"
        color="red accent-2"
    >
      {{ error_text }}

      <template v-slot:action="{ attrs }">
        <v-btn
            color="while"
            text
            v-bind="attrs"
            @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>


</template>

<script>


import {AmountFormatter} from '@aeternity/aepp-sdk/'

export default {
  name: 'CreateMarketPage',
  components: {},
  props: {
    msg: String
  },
  data() {
    return {

      snackbar: false,
      error_text: '',

      over_height: 'one',

      content: '',
      sourceUrl: '',
      minAmount: '',

      result_list: [{
        placeholder: 'China',
        model: ''
      }, {
        placeholder: 'U.S.A',
        model: ''
      }],

      createLoading: false,
    }
  },
  methods: {
    deleteResult(index) {
      if (this.result_list.length <= 2) {
        this.snackbar = true;
        this.error_text = "Please keep at least two answers";
        return;
      }
      this.result_list.splice(index, 1);
    },

    addResult() {
      this.result_list.push({placeholder: 'Other result', model: ""});  // 每点一下，push一次
    },

    async createMarket() {

        // console.log(JSON.stringify(navigator.extensions));
        // return;
      console.log("content:" + this.content);
      console.log("sourceUrl:" + this.sourceUrl);
      console.log("minAmount:" + this.minAmount);
      console.log("over_height:" + this.over_height);


      let results = [];
      for (let i = 0; i < this.result_list.length; i++) {
        if (this.result_list[i].model !== "") {
          results[i] = {content: this.result_list[i].model, count: 0}
        }
      }

      if (this.content === null || this.content === '') {
        return;
      }
      if (this.sourceUrl === null || this.sourceUrl === '') {
        return;
      }
      if (this.minAmount === null || this.minAmount === '') {
        return;
      }
      if (this.over_height === null || this.over_height === '') {
        return;
      }

      if (results.length < 2) {
        return;
      }

      for (let i = 0; i < results.length; i++) {
        console.log("result-" + i + ":" + results[i].content);
      }

      this.createLoading = true;

      let currentHeight = await this.$store.state.aeInstance.height();
      try{
          const result = await this.$store.state.veagsContract.methods.add_market(
              this.content,
              this.sourceUrl,
              AmountFormatter.toAettos(this.minAmount),
              Number(currentHeight) + Number(this.over_height),
              results);
          let market = result.decodedResult;
          this.createLoading = false;
          //load home
          this.$bus.emit('load');
          await this.$router.push({path: '/market_detail', query: {owner: market.owner, market_id: market.market_id}})
          console.log(market);
      }catch (e) {
          console.log(e);
          this.createLoading = false;
      }



    },
  }
}
</script>

<style scoped>

.private {
  color: #FFFFFF;
}

</style>
