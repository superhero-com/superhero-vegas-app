<template>
    <div id="app">
        <div class="group">
            <el-container>
                <el-aside class="el-aside-left" width="256px">
                    <navigation></navigation>
                </el-aside>
<!--                <el-divider class="divider" direction="vertical"></el-divider>-->
                <el-main>
                    <router-view></router-view>

                </el-main>
<!--                <el-divider class="divider" direction="vertical"></el-divider>-->
                <el-aside class="el-aside-right" width="330px">
                    <Wallet></Wallet>
                </el-aside>
            </el-container>


        </div>
    </div>
</template>

<script>

    // import Navigation from "./components/Navigation";
    // import Wallet from "./components/Wallet";
    //
    import Navigation from "./components/Navigation";
    import Wallet from "./components/wallet/Wallet";

    export default {
        name: 'App',
        components: {
            Wallet, Navigation,
            // Navigation
            // Wallet,
            // Navigation
            // HelloWorld
        },
        data: function () {
            return {visible: false}
        }
    }
</script>


<style lang="scss" scoped>
    #app {
        margin: 0 auto;
        min-height: 100vh;
        background-color: #000000;
        align-items: center; /*定义body的元素垂直居中*/
        justify-content: center; /*定义body的里的元素水平居中*/
        text-align: center;
    }

    .divider {
        min-height: 100vh;
        width: 1px;
        padding: 0px;
        margin: 0px;
    }

    .group {
        width: 1200px;
        text-align: center;
        margin: 0 auto;
        min-height: 100vh;
        align-items: center; /*定义body的元素垂直居中*/
        justify-content: center; /*定义body的里的元素水平居中*/
    }

    .el-header, .el-footer {
        /*background-color: #B3C0D1;*/
        /*color: #333;*/
        text-align: center;
        line-height: 80px;

    }

    .el-aside-left {
        background-color: #000000;
        /*color: #333;*/
        text-align: center;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        border-style:solid;
        /*border-width:1px;*/
        border-color: #dcdfe6;
    }


    .el-aside-right {
        background-color: #000000;
        /*color: #333;*/
        text-align: center;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        border-style:solid;
        /*border-width:1px;*/
        border-color: #dcdfe6;

    }

    .el-main {
        /*background-color: #ffffff;*/
        /*background-color: #1e1e1e;*/
        background-color:rgb(30, 30, 30);
        /*color: #333;*/
        text-align: center;
        height: 100vh;
        padding: 0;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    .element::-webkit-scrollbar {
        display: none
    }


</style>
