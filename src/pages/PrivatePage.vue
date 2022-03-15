<template>
    <div class="private">

        <p class=".text-xl-h4 text-h5 mt-5">Private forecasts provide the results by the creator</p>
        <!--        <div class="header mt-5">-->
        <!--            <span class="header-content">Private forecasts have publisher public results!</span>-->
        <!--        </div>-->


        <v-card class="card mb-5 pb-5 " rounded="lg">
            <v-card-title class="text-h6">
                Search Market
            </v-card-title>

            <div class="ml-5 mb-2">Enter the creator address</div>
            <div style="text-align: center">

                <v-text-field
                        class="ml-5 mr-5 rounded-lg"
                        placeholder="ak_idkx6m3bgRr7WiKXuB8EBYBoRqVsaS..."
                        outlined
                        hide-details="auto"
                ></v-text-field>


            </div>
            <div class="mt-4 ml-5 mb-2">Enter the market ID</div>
            <div style="text-align: center">

                <v-text-field
                        class="ml-5 mr-5 rounded-lg"
                        placeholder="3815482b788c03d73d06a83fd13e6055867..."
                        outlined
                        hide-details="auto"
                ></v-text-field>


            </div>

            <div style="text-align: center">

                <router-link to='/mark_detail'>
                    <v-btn @click='superHero()'
                           large
                           dense
                           color="primary"
                           elevation="2"
                           class="mt-4 rounded-lg">
                        <v-icon left>
                            mdi-magnify
                        </v-icon>
                        SEARCH
                    </v-btn>
                </router-link>
            </div>


        </v-card>

        <div style="width: 90%;margin:15px auto;">

        </div>


        <div style="display: flex">
            <router-link to='/create_market' style="margin: 0 auto;">

                <div class="add-market-content">
                    <div style="margin-right: 10px">
                        <div>Want your own market?</div>
                        <div>I'm going to create one</div>
                    </div>
                    <div class="add-market-content-icon">
                        +
                    </div>
                </div>
            </router-link>
        </div>

    </div>
</template>

<script>

export default {
    name: 'PrivatePage',
    components: {},
    props: {
        msg: String
    }
}
</script>

<style scoped>


.private {
    color: #FFFFFF;
}

.header {
    text-align: left;
    margin-top: 10px;
    color: #babac0;
}

.header-content {
    font-weight: 500;
    font-size: 16px;
    color: white;
}

.add-market-content {
    margin-top: 10px;
    color: #F7296E;
    border-radius: 10px;
    line-height: 20px;
    border: 1px solid #F7296E;
    display: inline-flex;
    padding: 2px 2px 2px 15px;
    font-size: 14px
}

.add-market-content-icon {
    width: 40px;
    height: 40px;
    background: #F7296E;
    border-radius: 8px;
    float: right;
    color: #ffffff;
    text-align: center;
    line-height: 40px
}
</style>
