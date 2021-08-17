<template>
    <div class="wallet">
        已连接到钱包

        <el-row>
            当前地址
        </el-row>
        <el-row>
            ak_idkx6m3bgRr7WiKXuB8EBYBoRqVsaSc6qo4dsd23HKgj3qiCF
        </el-row>

        <el-row>
            当前余额
        </el-row>
        <el-row>
            10000.0000AE
        </el-row>


    </div>
</template>


<script>

    export default {
        components: {},
        name: 'WalletAccount',
        props: {
            msg: String
        },
        data() {
            return {
                currentTab: "WalletAccount",
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


</style>
