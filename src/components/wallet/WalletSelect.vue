<template>
    <div class="wallet-select">
        <el-row>
            钱包
        </el-row>
        <el-row>
            选择你的登录方式
        </el-row>
        <el-row>
            <el-button type="primary" @click='mnemonic()'>助记词登录</el-button>
        </el-row>

        <el-row>
            或者
        </el-row>
        <el-row>
            <el-button type="primary" @click='superHero()' :loading="loading">连接超级英雄钱包</el-button>
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
            return {loading:false}
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
                        this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                        });
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wallet-select {
        width: 306px;
        text-align: center;
    }


</style>
