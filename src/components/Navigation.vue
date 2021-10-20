<template>
    <div class="pa-0">
        <div class="logo">
            <img style="width: 70%" src="../assets/icons/nav_logo.jpg" alt=""/>
        </div>
        <ul class="nav-group pa-0">
            <li v-for="(item,index) in nva_list" :key="index">
                <router-link :to='item.page'>
                    <a class='item' href="#">
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

    .nav-group{
        margin-left: 45px;
        margin-right: 45px;
    }
    .logo {
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .item {
        background-color: rgba(0, 0, 0, 0);
        height: 50px;
        display: flex;
        align-items: center;
        margin-top: 15px;
        padding-left: 22px;
        padding-right: 22px;

        .icon {
            width: 26px;
            fill: #9D9D9D;
            height: 26px;
        }

        .text {
            margin-left: 12px;
            color: #9D9D9D;
            font-size: 15px;
            font-weight: 500;
            line-height: 18px;
        }
    }


    .router-link-exact-active {
        .item {
            border-radius: 100px;
            background-color: rgb(30, 30, 30);

            .icon {
                fill: #1161FE;
            }

            .text {
                color: #1161FE;
                opacity: 1;
            }
        }
    }


</style>
