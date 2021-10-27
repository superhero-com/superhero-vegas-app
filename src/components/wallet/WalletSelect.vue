<template>
    <div class="wallet-select">
        <div class="pt-16">
            <img  width="80%"  src="../../assets/icons/wallet_logo.jpg"
                 alt="">
        </div>
        <div class="mt-6">
            <span class="mt-16 white--text">The wallet is not currently connected</span>
        </div>
        <div class="mt-6">
            <v-btn @click='superHero()' color="primary" elevation="2" large rounded>Connect to a wallet</v-btn>
        </div>
    </div>
</template>


<script>

    export default {
        components: {},
        name: 'WalletSelect',
        props: {
            msg: String
        },
        data() {
            return {loading: false}
        },
        methods: {
            mnemonic: function () {
                this.$store.commit('walletPage', "WalletMnemonicLogin");
                console.log(this.$store.state.walletPage)
            },
            superHero: function () {
                this.loading = true;
                this.$alert('连接成功', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.loading = false;

                        this.$store.commit('walletPage', "WalletAccount");
                        this.$message({
                            type: 'info',
                            message: `action: ${action}`
                        });
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wallet-select {
        /*width: 306px;*/
        text-align: center;
    }


</style>
