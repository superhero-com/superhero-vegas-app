<template>
    <div class="sidebar">

        <div class="logo">
            <img width="272" src="../assets/logo_vegas.png" alt="">
        </div>
        <ul class="nav-list">
            <li v-for="(item,index) in nva_list" :key="index">
                <a :class='item.nva_class' href="#" @mouseover="mouseover(item.text)" @mouseleave="mouseleave">
                    <box-icon class="icon" :type='item.icon_type' :color="item.icon_color" :name='item.icon'></box-icon>
                    <span class="text">{{ item.text }} </span>
                </a>
            </li>
        </ul>
        <span class="group">Financial Bet</span>
        <ul class="nav-list">
            <li v-for="(item,index) in financial_list" :key="index">
                <a :class='item.nva_class' href="#" @mouseover="mouseover(item.text)" @mouseleave="mouseleave">
                    <box-icon class="icon" :type='item.icon_type' :color="item.icon_color" :name='item.icon'></box-icon>
                    <span class="text">{{ item.text }} </span>
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
        data() {
            return {
                nva_list: [
                    {
                        text: 'Home',
                        nva_class: 'item',
                        icon: 'home-smile',
                        icon_type: 'solid',
                        icon_color: '#000000'
                    },
                    {
                        text: 'My Bet',
                        nva_class: 'item',
                        icon: 'user-circle',
                        icon_type: 'solid',
                        icon_color: '#000000'
                    },
                    {
                        text: 'Favorites',
                        nva_class: 'item',
                        icon: 'bookmarks',
                        icon_type: 'solid',
                        icon_color: '#000000'
                    }
                ],

                financial_list: [
                    {
                        text: 'Coin',
                        nva_class: 'item',
                        icon: 'bitcoin',
                        icon_type: 'logo',
                        icon_color: '#000000'
                    },
                    {
                        text: 'Stock',
                        nva_class: 'item',
                        icon: 'line-chart',
                        icon_color: '#000000'
                    }
                ],

                sport_list: [
                    {
                        text: 'Coin',
                        nva_class: 'item',
                        icon: 'football',
                        icon_color: '#000000'
                    },
                    {
                        text: 'basketball',
                        nva_class: 'item',
                        icon: 'basketball',
                        icon_color: '#000000'
                    }
                ],
            }
        },
        methods: {
            mouseover : function (index) {

                for (let i = 0; i < this.nva_list.length; i++) {
                    this.nva_list[i].icon_color = '#000000';
                    this.nva_list[i].nva_class = 'item';
                }
                this.nva_list[index].icon_color = '#ff1000';
                this.nva_list[index].nva_class = 'item-hover';
            },
            mouseleave: function () {

                for (let i = 0; i < this.nva_list.length; i++) {
                    this.nva_list[i].icon_color = '#000000';
                    this.nva_list[i].nva_class = 'item';
                }
            }


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

    .group {
        text-align: left;
        display: flex;
        align-items: center;
        padding-left: 20px;
        margin-left: 20px;
        margin-top: 30px;
        margin-bottom: 10px;
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


    .item-hover {

        height: 50px;
        display: flex;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 10px;
        padding-left: 20px;

        border-radius: 10px;
        background-color: aquamarine;
        color: #fa169f;
        .text {
            color: #fa169f;
        }

    }

    .text {
        margin-left: 10px;
    }


</style>
