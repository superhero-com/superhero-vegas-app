<template>
    <div class="pa-0 ">
        <div class="logo">
            <img style="width: 70%" src="../assets/icons/nav_logo.jpg" alt=""/>
        </div>
        <ul class="pa-0">
            <li v-for="(item,index) in nva_list" :key="index">
                <router-link :to='item.page'>
                    <a class='item' href="#">
                        <div class="line"></div>
                        <svg-icon class="icon" :name='item.icon'></svg-icon>
                        <span class="text">{{ item.text }} </span>
                    </a>
                </router-link>

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
        data() {
            return {
                currentSelect: 0,
                nva_list: [
                    {
                        text: 'Market',
                        icon: 'nav_home',
                        page: '/',
                    },
                    {
                        text: 'Private',
                        icon: 'nav_private',
                        page: '/private',
                    },
                    {
                        text: 'Participate',
                        icon: 'nav_my',
                        page: '/participate',
                    },
                    {
                        text: 'Update',
                        icon: 'nav_update',
                        page: '/update',
                    },
                    {
                        text: 'About',
                        icon: 'nav_about',
                        page: '/about',
                    }

                ],
            }
        },
        methods: {}
    }

</script>

<style lang="scss" scoped>


    .logo {
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .item {
        background-color: rgba(0, 0, 0, 0);
        height: 60px;
        display: flex;
        align-items: center;
        margin-top: 15px;


        .line {
            width: 3px;
            height: 60px;
            background: rgba(0, 0, 0, 0)
        }

        .icon {
            width: 26px;
            margin-left: 40px;
            fill: #9D9D9D;
            height: 26px;
        }

        .text {
            margin-left: 10px;
            color: #9D9D9D;
            font-size: 15px;
            line-height: 18px;
        }
    }


    .market-item:hover {
        background-color: #303038;
    }


    .router-link-exact-active {
        .item {
            /*border-radius: 10px;*/


            .line {
                background: rgb(49, 91, 247)
            }

            background-color: rgb(51, 55, 75);

            .icon {
                fill: #ffffff;
            }

            .text {
                color: #ffffff;
                opacity: 1;
            }
        }
    }


</style>
