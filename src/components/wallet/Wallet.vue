<template>
    <div class="wallet">
        <div>
            <Search></Search>
        </div>
        <component :is="this.$store.state.walletPage"></component>
    </div>
</template>


<script>
    import Search from "./Search";
    import WalletSelect from "./WalletSelect";
    import WalletMnemonicLogin from "./WalletMnemonicLogin";
    import WalletMnemonicCreate from "./WalletMnemonicCreate";

    export default {
        components: {WalletSelect, WalletMnemonicLogin, WalletMnemonicCreate, Search},
        name: 'Wallet',
        props: {
            msg: String
        },
        data() {
            return {
                currentTab: this.$store.state.walletPage,
            }
        },
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
