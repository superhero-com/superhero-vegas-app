<template>
  <div>
    <p class=".text-xl-h4 text-h5 mt-5">My Participate.</p>
    <v-tabs fixed-tabs background-color="black" class="black">
      <v-tab @change="change('ParticipateInProgress')">
        In Progress
      </v-tab>
<!--      <v-tab @change="change('ParticipateWait')">-->
<!--        Wait result-->
<!--      </v-tab>-->
      <v-tab @change="change('ParticipateRecord')">
          Bet Record
      </v-tab>

    </v-tabs>
    <component :is="participatePage" ref="child"></component>
  </div>


</template>

<script>
import ParticipateInProgress from "../components/participate/ParticipateInProgress";
import ParticipateRecord from "../components/participate/ParticipateRecord";

export default {
  components: {ParticipateInProgress, ParticipateRecord},
  name: 'ParticipatePage',
  props: {
    msg: String
  },
  data() {
    return {
      participatePage: 'ParticipateInProgress',
    };
  },
  mounted: function () {
    this.change("ParticipateInProgress");
  },

  methods: {

    change: function (labelData) {
      this.participatePage = labelData;
      this.$nextTick(() => {
        this.$refs.child.load();
      })
    },
  }
}
</script>

<style scoped>


</style>
