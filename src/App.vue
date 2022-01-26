<template>

    <v-app id="inspire">
        <v-main class="background">
            <div style="width: 1200px;margin: 0 auto;">
                <div class="pa-0  " style="width: 240px;position: fixed;top:0">
                    <v-sheet class="card mt-5 pb-16 rounded-lg">
                        <navigation></navigation>
                    </v-sheet>
                </div>

                <div style="width: 630px;margin-left: 260px">
                    <v-sheet class="background">
                        <router-view></router-view>
                    </v-sheet>
                </div>

                <div class="pa-0  "
                     style="width: 330px; position:fixed;float: right;top: 0;left: 50%;margin-left:310px;">
                    <wallet></wallet>
<!--                    <v-sheet class="card mt-5 pb-16 rounded-lg" >-->

                </div>
            </div>
        </v-main>
    </v-app>

</template>

<script>

    import Navigation from "./components/Navigation";
    import Wallet from "./components/wallet/Extension";

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
    html, body {
        background-color: black;
    }
</style>
