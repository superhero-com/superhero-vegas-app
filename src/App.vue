<template>
    <div id="app">
        <div class="not-bootstrap-row">
<!--            <Navigation></Navigation>-->
            <RouterView class="router-view"/>
<!--            <Wallet></Wallet>-->
        </div>
    </div>
</template>

<script>

    // import Navigation from "./components/Navigation";
    // import Wallet from "./components/Wallet";

    export default {
        name: 'App',
        components: {
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
        /*width: 1310px;*/
        background-color: #000000;
        text-align: center;
        display: flex;
        align-items: center; /*定义body的元素垂直居中*/
        justify-content: center; /*定义body的里的元素水平居中*/

    }
</style>
