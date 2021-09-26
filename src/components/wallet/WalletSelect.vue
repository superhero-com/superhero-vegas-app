<template>
    <div class="wallet-select">
        <el-row>
            <img style="margin-top: 50px;margin-bottom: 50px" width="80%" src="../../assets/icons/wallet_logo.jpg" alt="">
        </el-row>
        <el-row>
            <span style="margin-left: 18px;margin-right: 18px;line-height: 20px;font-size: 16px;padding-top: 20px;margin-top: 10px">The wallet is not currently connected</span>
        </el-row>
        <el-row>
            <el-button style="margin-top: 25px" type="primary" @click='superHero()' :loading="loading" round>Connect to
                a wallet
            </el-button>
        </el-row>
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
                this.$store.commit('increment', "WalletMnemonicLogin");
                console.log(this.$store.state.walletPage)
            },
            superHero: function () {
                this.loading = true;
                this.$alert('连接成功', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.loading = false;

                        this.$store.commit('increment', "WalletAccount");
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
