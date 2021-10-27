<template>
    <div>
        <Title is_back="true" title="Market Detail"></Title>
        <router-link to='/mark_detail'>
            <MarketItem is_market="true"></MarketItem>
        </router-link>
    </div>
</template>

<script>

    import MarketItem from "../components/MarketItem";
    import Title from "../components/Title";
    export default {
        name: 'MarketDetailPage',
        components: {Title, MarketItem},
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
