<template>
    <div>
        <!--        <RouterLink to="login">Home</RouterLink>-->
        <img src="../assets/logo.png" alt="">
        <span>The coming virus is the application...</span>
    </div>

</template>

<script>

    export default {
        name: 'HomePage',
        props: {
            msg: String
        }
    }
</script>

<style scoped>
    div {
    }

    img {
        width: 400px;
    }

    span {
        font-size: 20px;
        display: block;
        margin-top: 20px;
        color: white;
    }

</style>
