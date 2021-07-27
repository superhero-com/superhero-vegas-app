<template>
    <div class="wallet">
        <el-row>
            助记词
        </el-row>
        <el-row>
            <el-input
                    type="textarea"
                    :rows="3"
                    placeholder="请输入助记词"
                    resize="none"
                    v-model="textarea">

            </el-input>
        </el-row>
        <el-row>
            设置安全密码
        </el-row>
        <el-row>
            <el-input
                    type="input"
                    placeholder="请输入安全密码"
                    resize="none"
                    v-model="textarea">

            </el-input>
        </el-row>

        <el-row>
            <el-button type="primary" @click='mnemonicInput()'>导入助记词</el-button>
        </el-row>
        <el-row>
            <el-button type="primary" @click='back()'>返回</el-button>
        </el-row>
    </div>
</template>


<script>

    export default {
        components: {},
        name: 'WalletMnemonicLogin',
        props: {
            msg: String
        },
        data() {
            return {
                textarea: ''
            }
        },
        methods: {
            back: function () {
                this.$store.commit('increment', "WalletSelect");
            },
            mnemonicInput: function () {
                this.$store.commit('increment', "WalletSelect");
            },
        }
    }
</script>

<style lang="scss" scoped>


</style>
