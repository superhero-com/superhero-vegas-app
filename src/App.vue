<template>
    <div id="app">
        <div class="not-bootstrap-row">
            <Navigation></Navigation>
            <RouterView class="router-view"/>
            <Wallet></Wallet>
        </div>
    </div>
</template>

<script>

    import Navigation from "./components/Navigation";
    import Wallet from "./components/Wallet";

    export default {
        name: 'App',
        components: {
            Wallet,
            Navigation
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
        width: 1310px;
        background-color: #cccccc;
        display: flex;
        flex-direction: column;

        .not-bootstrap-row {
            flex-grow: 1;
            display: flex;
            flex-wrap: nowrap;
        }

        .router-view {
            flex-grow: 1;
            min-width: 0;
        }
    }
</style>
