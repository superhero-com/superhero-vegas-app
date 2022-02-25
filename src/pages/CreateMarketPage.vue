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
          Add a Result

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
        <div class="mt-4">How long do you think you can bet on this game from now on?</div>
        <v-row
            class="mt-4"
            justify="space-around"
        >
          <v-col
              cols="12"
              sm="4"
          >
            <v-dialog
                ref="data_dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="date"
                    label="Picker in dialog"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                  v-model="date"
                  scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                    text
                    color="primary"
                    @click="modal = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                    text
                    color="primary"
                    @click="$refs.data_dialog.save(date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col
              cols="12"
              sm="4"
          >
            <v-dialog
                ref="time_dialog"
                v-model="modal2"
                :return-value.sync="time"
                persistent
                width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="time"
                    label="Picker in dialog"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                  v-if="modal2"
                  v-model="time"
                  full-width
              >
                <v-spacer></v-spacer>
                <v-btn
                    text
                    color="primary"
                    @click="modal2 = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                    text
                    color="primary"
                    @click="$refs.time_dialog.save(time)"
                >
                  OK
                </v-btn>
              </v-time-picker>
            </v-dialog>
          </v-col>
        </v-row>
      </div>
      <div class="mt-6 mb-14 d-flex justify-center">
        <v-btn @click='createMarket()' color="primary" elevation="2" large class="mt-4 rounded-lg">Confirm Create
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

export default {
  name: 'CreateMarketPage',
  components: {},
  props: {
    msg: String
  },
  data() {
    return {
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      // date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      time: "00:00",

      snackbar: false,
      error_text: '',

      content: '',
      sourceUrl: '',
      minAmount: '',

      modal: false,
      modal2: false,
      result_list: [{
        placeholder: 'China',
        model: ''
      }, {
        placeholder: 'U.S.A',
        model: ''
      }]
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
      console.log("content:" + this.content);
      console.log("sourceUrl:" + this.sourceUrl);
      console.log("minAmount:" + this.minAmount);
      console.log("date:" + this.date);



      let overTime = Date.parse(this.date+" "+this.time);
      console.log("oTime:" + overTime);

      let currentTime = Math.round(new Date() / 1);
      console.log("cTime:" + currentTime);

      let dTime = ((overTime - currentTime)/1000);
      console.log("dTime:" + dTime);
      console.log("height:" + await this.$store.state.aeInstance.height());
      // console.log(result.decodedResult);
      let results = [];
      for (let i = 0; i < this.result_list.length; i++) {
        if (this.result_list[i].model !== "") {
          results[i] = {content: this.result_list[i].model, count: 0}
        }
      }

      for (let i = 0; i < results.length; i++) {
        console.log("result-" + i + ":" + results[i].content);
      }


      // const result = await this.$store.state.veagsContract.methods.add_market(
      //     this.content,
      //     this.sourceUrl,
      //     this.minAmount,
      //     0,
      //     results);
    },

    hasPlugin(name) {
      name = name.toLowerCase();
      for (var i = 0; i < navigator.plugins.length; i++) {
        console.log(navigator.plugins);
        if (navigator.plugins [i].name.toLowerCase().indexOf(name) > -1) {

          return true;
        }
      }
      return false;
    }
  }
}
</script>

<style scoped>

.private {
  color: #FFFFFF;
}

</style>
