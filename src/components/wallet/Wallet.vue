<template>
    <div class="wallet">
        <div>
<!--            <Search></Search>-->
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
            }
        },
    }
</script>

<style lang="scss" scoped>
    .wallet {
        width: 329px;
        /*background-color: #001630;*/
        align-items: center; /*定义body的元素垂直居中*/
        justify-content: center; /*定义body的里的元素水平居中*/
        color: #000000;
        padding-bottom: 20px;
    }

    span {
        color: #FFFFFF;
    }

</style>
