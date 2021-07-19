<template>
    <div class="sidebar">

        <div class="logo">
            <img style="width: 200px" src="../assets/icons/nve_logo.png" alt=""/>
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
        methods: {




        }
    }

</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

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
        margin-left: 35px;
        margin-right: 35px;
        margin-top: 15px;
        padding-left: 20px;

        .icon {
            width: 24px;
            fill: #535361;
            height: 24px;
        }

        .text {
            margin-left: 15px;
            color: #FFFFFF;
            font-size: 15px;
            font-family: Arial, serif;
            font-weight: 400;
            line-height: 17px;
            letter-spacing: 1px;
            opacity: 0.3;
        }
    }


    .router-link-active {

    }

    .router-link-exact-active {
        .item {
            border-radius: 10px;
            background-color: #12155a;

            .icon {
                fill: #FFFFFF;
            }

            .text {
                color: #FFFFFF;
                opacity: 1;
            }
        }
    }


</style>
