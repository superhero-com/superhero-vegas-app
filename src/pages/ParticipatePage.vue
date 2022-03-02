<template>
  <div>
    <p class=".text-xl-h4 text-h5 mt-5">My Participate.</p>
    <v-tabs fixed-tabs background-color="black" class="black">
      <v-tab @change="change('MY')">
        Created by me
      </v-tab>
      <v-tab @change="change('WAIT')">
        Wait result
      </v-tab>
      <v-tab @change="change('RECORD')">
        Participate
      </v-tab>

    </v-tabs>
    <component :is="participatePage" ref="child"></component>
  </div>


</template>

<script>
import ParticipateMy from "../components/participate/ParticipateMy";
import ParticipateWait from "../components/participate/ParticipateWait";
import ParticipateRecord from "../components/participate/ParticipateRecord";

export default {
  components: {ParticipateMy, ParticipateWait, ParticipateRecord},
  name: 'ParticipatePage',
  props: {
    msg: String
  },
  data() {
    return {
      participatePage: 'ParticipateMy',
    };
  },
  mounted: function () {
    this.change("MY");
  },

  methods: {

    change: function (labelData) {
      switch (labelData) {
        case "MY":
          this.participatePage = "ParticipateMy";
          break;
        case "WAIT":
          this.participatePage = "ParticipateWait";
          break;
        case "RECORD":
          this.participatePage = "ParticipateRecord";
          break;
      }
      this.$nextTick(() => {
        this.$refs.child.load();
      })
    },
  }
}
</script>

<style scoped>


</style>
