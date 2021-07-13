<template>
    <div class="sidebar">

        <div class="logo">
            <box-icon name='twitter' type='logo' size='40px'></box-icon>
        </div>
        <ul class="nav-list">
            <li>
                <a class='item' href="#">
                    <box-icon class="icon" type='solid' name='home-smile'></box-icon>
                    <span class="text">Home</span>
                </a>
            </li>
            <li>
                <a class='item' href="#">
                    <box-icon class="icon" name='bitcoin' type='logo'></box-icon>
                    <span class="text">My Bet</span>
                </a>
            </li>


        </ul>
        <span class="group">Financial Bet</span>
        <ul class="nav-list">
            <li>
                <a class='item' href="#">
                    <box-icon class="icon" type='solid' name='home-smile'></box-icon>
                    <span class="text">Home</span>
                </a>
            </li>
            <li>
                <a class='item' href="#">
                    <box-icon class="icon" name='bitcoin' type='logo'></box-icon>
                    <span class="text">My Bet</span>
                </a>
            </li>


        </ul>
    </div>

</template>


<script>


    export default {
        comments: {},
        name: 'Navigation',
        props: {
            msg: String
        },


    }

</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
    .sidebar{
        margin-bottom: 10px;
    }

    .logo {
        background-color: antiquewhite;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .group{
        text-align: left;
        display: flex;
        align-items: center;
        padding-left: 20px;
        margin-left: 20px;
        margin-top: 30px;
    }

    .item {
        height: 50px;
        display: flex;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 10px;
        padding-left: 20px;
    }


    .item:hover {
        border-radius: 10px;
        background-color: aquamarine;
        /*color: #fa169f;*/


    }

    .text {
        margin-left: 10px;
    }


</style>
