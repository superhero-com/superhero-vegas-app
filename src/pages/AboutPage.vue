<template>
    <div class="hello">
        <div style="height: 55px;text-align: left;padding-left: 12px;background-color: #ffffff; "><span
                style="line-height: 55px;  font-weight: 500;">About</span>
        </div>
        <div>
            <img style="width: 100%" src="../assets/icons/about_header.jpeg" alt="">
        </div>

        <div style="background: #ffffff;width: 100%;height: 300px;text-align: center;  display: flex;align-items: center;            justify-content: center;">
            <div style="float:left;width: 50%;">
                <div style="color: #F7296E">What is AEVegas?</div>
                <div>content</div>
            </div>
            <div style="float: right;width: 50%;margin-right: 15px">
                <img style="width: 100%;" src="../assets/icons/about_item_1.png" alt="">
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutPage',
        props: {
            msg: String
        }
    }
</script>

<style scoped>

</style>
