<template>
    <div class="hello">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="background: #ffffff">
            <el-tab-pane label="Participate in the" name="first" style="line-height: 200px">empty</el-tab-pane>
            <el-tab-pane label="The end of the" name="second" style="line-height: 200px">empty</el-tab-pane>
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
