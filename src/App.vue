<template>
    <div id="app">
        <div class="group">
            <el-container>
                <el-aside width="255px"><navigation></navigation></el-aside>
                <el-divider class="divider" direction="vertical"></el-divider>
                <el-main>
                    <div class="outer-container">
                        <div class="inner-container">
                            <div class="content">
                                <router-view></router-view>
                            </div>
                        </div>
                    </div>
                </el-main>
                <el-divider class="divider" direction="vertical"></el-divider>
                <el-aside width="289px">
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
            Wallet,Navigation,
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
        background-color: #FFFFFF;
        align-items: center; /*定义body的元素垂直居中*/
        justify-content: center; /*定义body的里的元素水平居中*/
        text-align: center;
    }

    .divider{
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

    .el-aside {
        /*background-color: #08091D;*/
        /*color: #333;*/
        text-align: center;
    }

    .el-main {
        /*background-color: #E9EEF3;*/
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
    .element::-webkit-scrollbar {display:none}

    .outer-container,.content {
        width: 660px;
        height: 100vh;
    }
    .outer-container {
        position: relative;
        overflow: hidden;
    }
    .inner-container {
        position: absolute;
        left: 0;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    /* for Chrome */
    .inner-container::-webkit-scrollbar {
        display: none;
    }
</style>
