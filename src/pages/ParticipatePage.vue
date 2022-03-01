<template>
    <div>
                <p class=".text-xl-h4 text-h5 mt-5">My Participate.</p>
        <v-tabs fixed-tabs background-color="black" class="black">
            <v-tab  @change="change('MY')">
              Created by me
            </v-tab>
            <v-tab @change="change('WAIT')">
              Wait result
            </v-tab>
            <v-tab @change="change('RECORD')">
              Participate
            </v-tab>

        </v-tabs>
        <component :is="this.$store.state.participatePage"></component>
    </div>


</template>

<script>
    import ParticipateOngoing from "../components/participate/ParticipateMy";
    import ParticipateFailure from "../components/participate/ParticipateWait";
    import ParticipateWinning from "../components/participate/ParticipateRecord";
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
                    case "MY":
                        this.$store.commit('participatePage', "ParticipateMy");
                        break;
                    case "WAIT":
                        this.$store.commit('participatePage', "ParticipateWait");
                        break;
                    case "RECORD":
                        this.$store.commit('participatePage', "ParticipateRecord");
                        break;
                }
            },
        }
    }
</script>

<style scoped>


</style>
