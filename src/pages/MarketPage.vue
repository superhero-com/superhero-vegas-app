<template>
    <!--        <RouterLink to="login">Home</RouterLink>-->
    <!--        <img src="../assets/logo.png" alt="">-->
    <div>
        <el-radio-group v-model="direction">
            <el-radio label="ltr">从左往右开</el-radio>
            <el-radio label="rtl">从右往左开</el-radio>
            <el-radio label="ttb">从上往下开</el-radio>
            <el-radio label="btt">从下往上开</el-radio>
        </el-radio-group>

        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
            点我打开
        </el-button>

        <el-drawer
                title="我是标题"
                :visible.sync="drawer"
                :direction="direction"
                :before-close="handleClose">
            <span>我来啦!</span>
        </el-drawer>

    </div>


</template>

<script>

    export default {
        name: 'MarketPage',
        props: {
            msg: String
        },
        data() {
            return {
                drawer: false,
                direction: 'rtl',
            };
        },
        methods: {
            handleClose(){
               this.done();
            }
        }
    };
</script>

<style scoped>

    ul {

        overflow: auto;;

    }

    li {
        line-height: 50px;
        background-color: #12155a;
        margin-bottom: 10px;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
        color: #FFFFFF;
    }


</style>
