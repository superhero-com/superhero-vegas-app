<template>
    <div class="wallet">

        <component :is="this.$store.state.walletPage"></component>
    </div>
</template>


<script>
    import WalletSelect from "./WalletSelect";
    import WalletMnemonicLogin from "./WalletMnemonicLogin";
    import WalletMnemonicCreate from "./WalletMnemonicCreate";
    import WalletAccount from "./WalletAccount";

    export default {
        components: {WalletSelect, WalletMnemonicLogin, WalletMnemonicCreate,WalletAccount},
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
        align-items: center; /*定义body的元素垂直居中*/
        justify-content: center; /*定义body的里的元素水平居中*/
    }


</style>
