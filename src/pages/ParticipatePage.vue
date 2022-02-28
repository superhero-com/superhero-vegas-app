<template>
    <div>
                <p class=".text-xl-h4 text-h5 mt-5">My Participate.</p>
        <v-tabs fixed-tabs background-color="black" class="black">
            <v-tab  @change="change('ONGOING')">
              Created by me
            </v-tab>
            <v-tab @change="change('FAILURE')">
              Wait result
            </v-tab>
            <v-tab @change="change('WINNING')">
              Participate
            </v-tab>

        </v-tabs>
        <component :is="this.$store.state.participatePage"></component>
    </div>


</template>

<script>
    import ParticipateOngoing from "../components/participate/ParticipateOngoing";
    import ParticipateFailure from "../components/participate/ParticipateFailure";
    import ParticipateWinning from "../components/participate/ParticipateWinning";
    export default {
        components: { ParticipateOngoing,ParticipateFailure,ParticipateWinning},
        name: 'ParticipatePage',
        props: {
            msg: String
        },
        data() {
            return {
                participatePageType: 'ongoing',
            };
        },

        methods: {
            mounted: function () {
                this.$store.commit('participatePage', "ParticipateOngoing");
            },
            change: function (labelData) {
                switch (labelData) {
                    case "ONGOING":
                        this.$store.commit('participatePage', "ParticipateOngoing");
                        break;
                    case "FAILURE":
                        this.$store.commit('participatePage', "ParticipateFailure");
                        break;
                    case "WINNING":
                        this.$store.commit('participatePage', "ParticipateWinning");
                        break;
                }
            },
        }
    }
</script>

<style scoped>


</style>
