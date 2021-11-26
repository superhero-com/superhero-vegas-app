<template>
    <div class="private">

                <p class=".text-xl-h4 text-h5 mt-5">Private forecasts have publisher public results.</p>
<!--        <div class="header mt-5">-->
<!--            <span class="header-content">Private forecasts have publisher public results!</span>-->
<!--        </div>-->


        <v-card class="card mb-5 pb-5 mt-5" rounded="lg">
            <v-card-title class="text-h6">
                Private Market
            </v-card-title>
            <div style="text-align: center">
                <v-text-field
                        class="ml-5 mr-5"
                        placeholder="Enter the publisher address or .Chain domain name"
                        outlined
                        hide-details="auto"
                ></v-text-field>

                <router-link to='/mark_detail'>
                    <v-btn @click='superHero()' class="mt-5"  large dense color="primary" rounded>
                        <v-icon left>
                            mdi-magnify
                        </v-icon>
                        Search
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
                        <div>Want to be a bookmaker?</div>
                        <div>I also make predictions？</div>
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
        margin-top:10px;color: #F7296E;border-radius: 30px;line-height: 20px; border:1px solid #F7296E;display: inline-flex;padding-left: 15px;padding-right: 2px;padding-top:2px;padding-bottom:2px;font-size: 14px
    }

    .add-market-content-icon {
        width: 40px;height:40px;background: #F7296E;border-radius: 30px;float: right;color: #ffffff;text-align: center;line-height: 40px
    }
</style>
