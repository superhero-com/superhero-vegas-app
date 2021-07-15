<template>
        <!--        <RouterLink to="login">Home</RouterLink>-->
        <!--        <img src="../assets/logo.png" alt="">-->
    <ul>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
    </ul>


</template>

<script>

    export default {
        name: 'HomePage',
        props: {
            msg: String
        },
        data() {
            return {
                count: 100,
                loading: false
            }
        },
        computed: {
            noMore() {
                return this.count >= 200
            },
            disabled() {
                return this.loading || this.noMore
            }
        },
        methods: {
            load() {
                this.loading = true
                setTimeout(() => {
                    this.count += 20
                    this.loading = false
                }, 2000)
            }
        }
    }
</script>

<style scoped>

    ul {

        overflow: hidden;;

    }
    li {
        line-height: 50px;
        background-color: #12155a;
        margin-bottom: 10px;
        color: #FFFFFF;
    }


</style>
