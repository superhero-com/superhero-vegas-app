<template>
    <div class="private">

        <Title title="Private"></Title>

        <div class="header">
            <span class="header-content">Private guessing. Since the guessing game may be divided into multiple countries with different languages and guessing scenes in each country, this function allows users to play with their friends and enter the domain name Aens to access the guessing game initiated by the user. The user initiated is not controlled by the prophet, and the user controls the results, the user initiated commission will be part of the dealer, please note!</span>
        </div>


        <div style="width: 90%;margin:15px auto;">
            <div style="text-align: center">
                <v-text-field
                        class=""
                        style="height:40px;"
                        label="Enter the publisher address or .Chain domain name"
                        outlined
                ></v-text-field>

                <router-link to='/mark_detail'>
                    <v-btn @click='superHero()' class="mt-10" large dense color="primary" rounded>
                        <v-icon left>
                            mdi-magnify
                        </v-icon>
                        Search
                    </v-btn>
                </router-link>

            </div>

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
    import Title from "../components/Title";

    export default {
        name: 'PrivatePage',
        components: {Title},
        props: {
            msg: String
        }
    }
</script>

<style scoped>

    .divider {
        padding: 0px;
        margin: 0px;
    }

    input {
        outline-style: none;
        border: 1px solid #ccc;
        border-radius: 30px;
        background-color: rgba(49, 91, 247, 0);
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 15px;
        padding-right: 15px;
        color: white;
        font-size: 14px;
        width: 70%;
        font-family: "Microsoft soft";
    }

    .private {
        color: #FFFFFF;
    }

    .header {
        text-align: left;
        margin-top: 10px;
        padding-left: 12px;
        color: #babac0;
        padding-bottom: 10px
    }

    .header-content {
        line-height: 24px;
        font-weight: 500;
        font-size: 16px
    }

    .add-market-content {
        margin-top:10px;color: #F7296E;border-radius: 30px;line-height: 20px; border:1px solid #F7296E;display: inline-flex;padding-left: 15px;padding-right: 2px;padding-top:2px;padding-bottom:2px;font-size: 14px
    }

    .add-market-content-icon {
        width: 40px;height:40px;background: #F7296E;border-radius: 30px;float: right;color: #ffffff;text-align: center;line-height: 40px
    }
</style>
