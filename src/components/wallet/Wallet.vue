<template>
    <div class="wallet">
        <div>
            <Search></Search>
        </div>
        <WalletSelect></WalletSelect>
        <!--        <component :is="currentTab"></component>-->
        <!--        <button class="tab" @click="toggleTab('WalletSelect')"><a>小王子</a></button>-->
        <!--        <button class="tab" @click="toggleTab('PrivatePage')"><a>小玫瑰</a></button>-->
        <!--            {{ tab }}-->
    </div>
</template>


<script>
    import Search from "./Search";
    import WalletSelect from "./WalletSelect";

    export default {
        components: {WalletSelect, Search},
        name: 'Wallet',
        props: {
            msg: String
        },
        data() {
            return {
                currentTab: "WalletSelect",
            }
        },
        methods: {
            toggleTab: function (tab) {
                this.currentTab = tab; // tab 为当前触发标签页的组件名
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wallet {
        width: 306px;
        background-color: #001630;
        color: #FFFFFF;

    }

    span {
        color: #FFFFFF;
    }

</style>
