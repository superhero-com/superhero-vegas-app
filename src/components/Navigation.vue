<template>
    <div class="sidebar">

        <div class="logo">
            <img style="width: 200px" src="../assets/icons/nav_logo.png" alt=""/>
        </div>
        <ul class="nav-list">
            <li v-for="(item,index) in nva_list" :key="index">
                <router-link :to='item.page'>
                    <a :class='item.nva_class' href="#">
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
                        nva_class: 'item',
                        icon: 'nav_home',
                        page: '/',
                    },
                    {
                        text: 'Private',
                        nva_class: 'item',
                        icon: 'nav_private',
                        page: '/private',
                    },
                    {
                        text: 'Participate',
                        nva_class: 'item',
                        icon: 'nav_my',
                        page: '/participate',
                    },
                    {
                        text: 'Update',
                        nva_class: 'item',
                        icon: 'nav_update',
                        page: '/update',
                    },
                    {
                        text: 'About',
                        nva_class: 'item',
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

    .sidebar {
        margin-bottom: 10px;
    }

    .logo {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .item {
        height: 50px;
        display: flex;
        align-items: center;
        margin-left: 25px;
        margin-right: 25px;
        margin-top: 15px;
        padding-left: 22px;

        .icon {
            width: 26px;
            fill: #000000;
            height: 26px;
        }

        .text {
            margin-left: 12px;
            color: #000000;
            font-size: 15px;
            font-weight: 500;
            line-height: 18px;
        }
    }


    .router-link-active {

    }

    .router-link-exact-active {
        .item {
            border-radius: 100px;
            background-color: #feeaf1;

            .icon {
                fill: #ff2772;
            }

            .text {
                color: #ff2772;
                opacity: 1;
            }
        }
    }


</style>
