<template>
    <div class="private">
        <p class=".text-xl-h4 text-h5 mt-5">Create your own market.</p>
        <v-card class="card mt-5 mb-5 pb-5 pt-5" rounded="lg">


            <div class="ml-4 mr-4">
                <div>The problem with forecasting</div>
                <v-textarea
                        outlined
                        name="input-7-4"
                        auto-grow
                        class="mt-4 rounded-lg"
                        placeholder="Example: What will the weather be like in Beijing in 10 days?"
                        hide-details="auto"
                ></v-textarea>
            </div>

            <div class="ml-4 mr-4">
                <div class="mt-4">Predicted results (up to four)</div>
                <v-text-field
                        outlined
                        auto-grow
                        class="mt-4 rounded-lg"
                        placeholder="It's sunny"
                        hide-details="auto"
                ></v-text-field>
                <v-text-field
                        outlined
                        auto-grow
                        class="mt-4 rounded-lg"
                        placeholder="It's cloudy"
                        hide-details="auto"
                ></v-text-field>
                <v-text-field
                        outlined
                        auto-grow
                        class="mt-4 rounded-lg"
                        placeholder="It rains"
                        hide-details="auto"
                ></v-text-field>
                <v-text-field
                        outlined
                        auto-grow
                        class="mt-4 rounded-lg"
                        placeholder="Other"
                        hide-details="auto"
                ></v-text-field>
            </div>

            <div class="ml-4 mr-4">
                <div class="mt-4">Data Source</div>
                <v-text-field
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
                        outlined
                        auto-grow
                        class="mt-4 rounded-lg"
                        placeholder="10"
                        hide-details="auto"
                />
            </div>
            <div class="ml-4 mr-4">
                <div class="mt-4">How long do you think you can bet on this game from now on（Hours）?</div>
                <v-text-field
                        outlined
                        auto-grow
                        class="mt-4 rounded-lg"
                        placeholder="240"
                        hide-details="auto"
                />
            </div>
            <div class="mt-6 mb-14 d-flex justify-center">
                <v-btn @click='createMarket()' color="primary" elevation="2" large rounded>Confirm Create</v-btn>
            </div>

        </v-card>
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
                value1: "",
                value2: "",
                dates: ['', ''],
            }
        },
        methods: {

            async createMarket() {
                if (this.$store.state.isLogin) {
                    let height = await this.$store.state.aeInstance.height();
                    alert(height);

                    alert(this.hasPlugin("Superhero"))
                } else {
                    alert("Please login");
                }

                // this.$router.go(-1)
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
