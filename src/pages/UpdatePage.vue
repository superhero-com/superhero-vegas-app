<template>
    <div>
        <v-expansion-panels    v-model="panel" multiple>
            <v-expansion-panel >
                <v-expansion-panel-header>
                    V1.0.0 Update logs
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    This release completes the basic prediction (public prediction, and private prediction) and adds the integration of superhero wallet.
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>

</template>
<script>
    export default {
        name: 'UpdatePage',
        props: {
            msg: String
        },
        data () {
            return {
                panel: [0],
            }
        },

        methods: {

        },
    }
</script>

<style scoped>


</style>
