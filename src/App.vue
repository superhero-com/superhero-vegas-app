<template>

    <v-app id="inspire">
        <v-main class="black">
            <div style="width: 1200px;margin: 0 auto;">
                <div class="pa-0  " style="width: 300px;position: fixed;top:0">
                    <v-sheet min-height="100vh" class="black">
                        <navigation></navigation>
                    </v-sheet>
                </div>

                <div style="width: 600px;margin-left: 300px">
                    <v-sheet min-height="100vh" class="grey darken-4">
                        <router-view></router-view>
                    </v-sheet>
                </div>

                <div class="pa-0  " style="width: 300px; position:fixed;float: right;top: 0;left: 50%;margin-left:300px;">
                    <v-sheet min-height="100vh" class="black">
                        <wallet></wallet>
                    </v-sheet>
                </div>
            </div>
        </v-main>
    </v-app>

</template>

<script>

    import Navigation from "./components/Navigation";
    import Wallet from "./components/wallet/Wallet";

    export default {
        name: 'App',
        components: {
            Wallet,
            Navigation,
        },
        data: function () {
            return {visible: false}
        }
    }
</script>


<style lang="scss" scoped>
    html, body{
        background-color: black;
    }
</style>
