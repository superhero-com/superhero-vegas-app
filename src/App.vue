<template>
    <div id="app">
        <div class="content">
            <v-app>
                <v-main>
                    <v-row>
                        <div class="nav">
                            <v-col>
                                <navigation style="width: 275px"></navigation>
                            </v-col>
                        </div>

                        <div class="router">
                            <v-col>

                                <router-view></router-view>


                            </v-col>
                        </div>

                        <div class="wallet">
                            <v-col>



                            </v-col>
                        </div>


                    </v-row>
                </v-main>
            </v-app>
        </div>
    </div>
</template>

<script>

    // import Navigation from "./components/Navigation";
    // import Navigation from "./components/Navigation";

    import Navigation from "./components/Navigation";

    export default {
        name: 'App',
        components: {Navigation},
        // components: {Navigation},
        // components: {Navigation},
        data: () => ({
            links: [
                'Dashboard',
                'Messages',
                'Profile',
                'Updates',
            ],
        }),
    };
</script>

<style>
    #app {
        margin: 0 auto;
        min-height: 100vh;
        background-color: #08091D;
        align-items: center; /*定义body的元素垂直居中*/
        justify-content: center; /*定义body的里的元素水平居中*/
        text-align: center;
    }

    .content {
        width: 1440px;
        text-align: center;
        margin: 0 auto;
        min-height: 100vh;
        align-items: center; /*定义body的元素垂直居中*/
        justify-content: center; /*定义body的里的元素水平居中*/
    }

    .router {
        width: 859px;
        margin: auto 0;
        height: 100vh;
        overflow: auto;
        background-color: #d6d6d0;
    }

    .nav {
        width: 275px;
    }

    .wallet {
        width: 306px;
        background-color: #535361;
    }

</style>
