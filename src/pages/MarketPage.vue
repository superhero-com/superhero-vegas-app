<template>
    <!--        <RouterLink to="login">Home</RouterLink>-->
    <!--        <img src="../assets/logo.png" alt="">-->


    <div>


        <p class=".text-xl-h4 text-h5 mt-5">Welcome Back to AEVegas!</p>
<!--        <v-card class="card mt-5 mb-5 pb-5" rounded="lg">-->
<!--            <v-card-title class="text-h6">-->
<!--                Public Market-->
<!--            </v-card-title>-->
<!--           -->

<!--        </v-card>-->
        <div>
            <img style="width: 100%" src="../assets/icons/header_market.png" alt="">
        </div>
        <router-link to='/mark_detail'>
            <div class="mt-3">
                <MarketItem></MarketItem>
            </div>

        </router-link>

    </div>


</template>

<script>

    import MarketItem from "../components/MarketItem";

    export default {
        name: 'MarketPage',
        components: {MarketItem},
        props: {
            msg: String
        },
        data() {
            return {
                count: 10,
                knowledge: 33,
                loading: false
            }
        },
        computed: {

        },
        methods: {
            load() {
                this.loading = true
                setTimeout(() => {
                    // this.count += 2
                    this.loading = false
                }, 2000)
            }
        }
    };
</script>

<style scoped>


</style>
