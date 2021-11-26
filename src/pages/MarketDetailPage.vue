<template>
    <div>
        <p class=".text-xl-h4 text-h5 mt-5">Start making predictions.</p>
            <MarketItem is_market="true"></MarketItem>
    </div>
</template>

<script>

    import MarketItem from "../components/MarketItem";
    export default {
        name: 'MarketDetailPage',
        components: { MarketItem},
        props: {
            msg: String
        },
        data() {
            return {
            }
        },
        computed: {

        },
        methods: {

        }
    };
</script>

<style scoped>

</style>
