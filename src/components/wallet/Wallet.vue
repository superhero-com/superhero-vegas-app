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
    import WalletAccount from "./WalletAccount";

    export default {
        components: {WalletSelect, WalletMnemonicLogin, WalletMnemonicCreate,WalletAccount, Search},
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
        /*background-color: #001630;*/
        color: #FFFFFF;
        padding-bottom: 20px;
    }

    span {
        color: #FFFFFF;
    }

</style>
