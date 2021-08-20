<template>
    <div class="hello">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="我正在参与的" name="first">我正在参与的</el-tab-pane>
            <el-tab-pane label="已经结束的" name="second">已经结束的</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: 'ParticipatePage',
        props: {
            msg: String
        },
        data() {
            return {
                activeName: 'first'
            };
        },
    }
</script>

<style scoped>

</style>
