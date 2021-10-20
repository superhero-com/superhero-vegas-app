<!--<template>-->
<!--    <div class="hello">-->
<!--        <div style="height: 55px;text-align: center;padding-left: 12px;background-color: #000000; color: #babac0; position: -webkit-sticky;position: sticky;top: 0; z-index: 999;">-->
<!--            <el-radio-group v-model="participatePageType" @change="change" style="margin:  6px auto;">-->
<!--                <el-radio-button label="ongoing">Ongoing</el-radio-button>-->
<!--                <el-radio-button label="failure">Failure</el-radio-button>-->
<!--                <el-radio-button label="winning">Winning</el-radio-button>-->
<!--            </el-radio-group>-->
<!--            <span style="line-height: 55px;  font-weight: 500;position: absolute;left: 12px">Participate</span>-->
<!--        </div>-->
<!--        <component :is="this.$store.state.participatePage"></component>-->
<!--    </div>-->
<!--</template>-->

<template>
    <div>
        <v-tabs
                fixed-tabs
                background-color="black"
                class="black"
        >
            <v-tab  @change="change('ONGOING')">
                Ongoing
            </v-tab>
            <v-tab @change="change('FAILURE')">
                Failure
            </v-tab>
            <v-tab @change="change('WINNING')">
                Winning
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
