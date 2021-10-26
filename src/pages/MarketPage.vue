<template>
    <!--        <RouterLink to="login">Home</RouterLink>-->
    <!--        <img src="../assets/logo.png" alt="">-->


    <div>
        <Title title="Public Market"></Title>
        <router-link to='/mark_detail'>
            <MarketItem></MarketItem>
        </router-link>
    </div>


</template>

<script>

    import Title from "../components/Title";
    import MarketItem from "../components/MarketItem";
    export default {
        name: 'MarketPage',
        components: {MarketItem, Title},
        props: {
            msg: String
        },
        data() {
            return {
                count: 1,
                knowledge: 33,
                loading: false
            }
        },
        computed: {
            noMore() {
                return this.count >= 20
            },
            disabled() {
                return this.loading || this.noMore
            }
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
