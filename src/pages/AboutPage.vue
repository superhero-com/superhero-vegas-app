<template>

    <div class="hello">
        <div style="height: 55px;text-align: left;padding-left: 12px;background-color: #ffffff; "><span
                style="line-height: 55px;  font-weight: 500;">About</span>
        </div>
        <ul
                class="list"
                v-infinite-scroll="load"
                infinite-scroll-disabled="disabled">


            <div>
                <img style="width: 100%" src="../assets/icons/about_header.jpeg" alt="">
            </div>

            <div style="background: #ffffff;width: 100%;height: 350px;text-align: center;  display: flex;align-items: center;            justify-content: center;">
                <div style="float:left;width: 50%;">
                    <div style="color: #F7296E;font-size: 20px">What is AEVegas?</div>
                    <div style="margin-top: 10px;font-size: 14px;margin-left: 15px;margin-right: 15px;line-height: 20px">
                        Good, we've achieved horizontal center! Now it's time for the big boss -- vertical center.
                        Before we do that, we need to set the height of the HTML and body elements that are the
                        ancestors of the div element to 100% (because they default to 0), and clear the default styles,
                        i.e. margin and padding, to 0.
                    </div>
                </div>
                <div style="float: right;width: 50%;margin-right: 15px">
                    <img style="width: 100%;" src="../assets/icons/about_item_1.png" alt="">
                </div>

            </div>

            <div style="background: #ffffff;width: 100%;height: 350px;text-align: center;  display: flex;align-items: center;            justify-content: center;">

                <div style="float: left;width: 50%;margin-right: 15px">
                    <img style="width: 100%;" src="../assets/icons/about_item_1.png" alt="">
                </div>
                <div style="float:right;width: 50%;">
                    <div style="color: #F7296E;font-size: 20px">What is AEVegas?</div>
                    <div style="margin-top: 10px;font-size: 14px;margin-left: 15px;margin-right: 15px;line-height: 20px">
                        Good, we've achieved horizontal center! Now it's time for the big boss -- vertical center.
                        Before we do that, we need to set the height of the HTML and body elements that are the
                        ancestors of the div element to 100% (because they default to 0), and clear the default styles,
                        i.e. margin and padding, to 0.
                    </div>
                </div>


            </div>

            <div style="background: #ffffff;width: 100%;height: 350px;text-align: center;  display: flex;align-items: center;            justify-content: center;">
                <div style="float:left;width: 50%;">
                    <div style="color: #F7296E;font-size: 20px">What is AEVegas?</div>
                    <div style="margin-top: 10px;font-size: 14px;margin-left: 15px;margin-right: 15px;line-height: 20px">
                        Good, we've achieved horizontal center! Now it's time for the big boss -- vertical center.
                        Before we do that, we need to set the height of the HTML and body elements that are the
                        ancestors of the div element to 100% (because they default to 0), and clear the default styles,
                        i.e. margin and padding, to 0.
                    </div>
                </div>
                <div style="float: right;width: 50%;margin-right: 15px">
                    <img style="width: 100%;" src="../assets/icons/about_item_1.png" alt="">
                </div>

            </div>
        </ul>
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
