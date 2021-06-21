<template>
    <div class="navigation">
        <RouterLink to="/">
            <img class="logo" src="../assets/headerLogo.svg" alt="">
        </RouterLink>
        <ul>
            <li>

                <RouterLink exact :to="{ name: 'feed' }">
                    <div class="item">
                        <img class="icon" src="../assets/iconTips.svg" alt="">
                        <span class="text">ITEM1</span>
                    </div>
                </RouterLink>


                <RouterLink exact :to="{ name: 'feed' }">
                    <div class="item">
                        <img class="icon" src="../assets/iconTips.svg" alt="">
                        <span class="text">ITEM2</span>
                    </div>
                </RouterLink>


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
    .navigation {
        background-color: antiquewhite;
        width: 251px;


        .logo {
            width: 200px;
            height: 60px;
        }

        .icon {
            margin-left: 20px;
            display: inline;
            width: 20px;
        }

        .item {
            display: inline-flex;
            background: #2da7ff;
            line-height: 50px;
            height: 50px;

        }

        .item:hover {
            background: #ff0008;
        }

        .icon:hover {
            fill: blue;
        }

        .text {
            margin-left: 20px;
            margin-right: 20px;
        }


    }


</style>
