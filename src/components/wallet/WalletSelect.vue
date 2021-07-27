<template>
    <div class="wallet-select">
        <el-row>
            钱包
        </el-row>
        <el-row>
            选择你的登录方式
        </el-row>
        <el-row>
            <el-button type="primary">助记词登录</el-button>
        </el-row>

        <el-row>
            或者
        </el-row>
        <el-row>
        <el-button type="primary">连接超级英雄钱包</el-button>
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
            return {
                currentTab: "AboutPage",
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
    .wallet-select {
        width: 306px;
        text-align: center;
    }


</style>
