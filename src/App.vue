<template>
    <div id="app">
        <div class="content">
            <el-container>
                <el-aside width="272px"><navigation></navigation></el-aside>
<!--                <el-container>-->
<!--                    <el-header height="80px">Header</el-header>-->

<!--                    <el-container>-->
<!--                        <el-main>-->
<!--                            <router-view></router-view>-->

<!--                        </el-main>-->
<!--                        <el-aside width="306px">Aside</el-aside>-->
<!--                    </el-container>-->
<!--                    <el-footer>Footer</el-footer>-->
<!--                </el-container>-->
            </el-container>


        </div>
    </div>
</template>

<script>

    // import Navigation from "./components/Navigation";
    // import Wallet from "./components/Wallet";

    import Navigation from "./components/Navigation";
    export default {
        name: 'App',
        components: {
            Navigation
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
        background-color: #001630;
        align-items: center; /*定义body的元素垂直居中*/
        justify-content: center; /*定义body的里的元素水平居中*/
        text-align: center;
    }

    .content {
        width: 1440px;
        text-align: center;
        margin: 0 auto;
        min-height: 100vh;
        align-items: center; /*定义body的元素垂直居中*/
        justify-content: center; /*定义body的里的元素水平居中*/
    }

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 80px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
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


</style>
