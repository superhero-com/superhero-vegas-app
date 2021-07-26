<template>
    <div class="wallet">
        wallet login
    </div>
</template>


<script>

    export default {
        components: {},
        name: 'WalletMnemonicCreate',
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


</style>
