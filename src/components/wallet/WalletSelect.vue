<template>
    <div class="wallet-select">
        <a href="#">
            Generate New Wallet
        </a>
        <a href="#">
            Retrieve Existing Account
        </a>
    </div>
</template>


<script>

    export default {
        components: {},
        name: 'WalletSelect',
        props: {
            msg: String
        },
        data() {
            return {
                currentTab: "AboutPage",
            }
        },
        methods: {
            toggleTab: function (tab) {
                this.currentTab = tab; // tab 为当前触发标签页的组件名
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wallet-select {
        width: 306px;
    }
    a {
        /* Green */
        border: none;
        width: 261px;
        height: 51px;
        text-align: center;
        line-height: 51px;
        margin-top: 20px;
        text-decoration: none;
        border-radius: 10px;
        display: inline-block;
        background: #0F4CD9 linear-gradient(90deg, #0F4CD9 0%, #DE4AD0 100%);
        font-size: 17px;
        color: #FFFFFF;
    }

    a:hover {
        background-color: #3e8e41;
    }

</style>
