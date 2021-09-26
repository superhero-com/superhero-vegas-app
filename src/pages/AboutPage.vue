<template>


    <div class="outer-container">
        <div style="height: 55px;text-align: left;padding-left: 12px;background-color: #ffffff; "><span
                style="line-height: 55px;  font-weight: 500;">About</span>
        </div>
        <el-divider class="divider"></el-divider>
        <div class="inner-container">
            <div class="content">
                <div>

                    <div style="overflow:auto">

                        <div class="list-group">
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

                                    <div style="float: left;width: 50%;margin-left: 15px">
                                        <img style="width: 100%;" src="../assets/icons/about_item_2.png" alt="">
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
                                        <img style="width: 100%;" src="../assets/icons/about_item_3.png" alt="">
                                    </div>

                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
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

    ul {

        overflow: auto;;

    }

    li {
        line-height: 50px;
        background-color: #12155a;
        color: #FFFFFF;
    }



    .icon {
        width: 20px;
        fill: #ffffff;
        height: 20px;
    }

    ul {

        overflow: auto;

    }

    .divider {
        padding: 0px;
        margin: 0px;
    }


    li {
        line-height: 50px;
        background-color: #12155a;
        color: #000000;
    }


    .list-group {
        /*background-color: #12155a;*/
        /*border-radius: 20px;*/

    }

    .title-group {
        color: #ffffff;
        background: #F7296E;
        font-weight: 500;
        width: 90%;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        /*margin-right: 10px;*/
        height: 5px;
        text-align: center;
        margin: 0 auto;
        /*line-height: 40px;*/
        /*padding-left: 10px;*/
        /*padding-right: 10px;*/
    }

    .number {
        color: #ffffff;
        background: #F7296E;
        font-weight: 500;
        position: absolute;
        /*width: 50%;*/
        bottom: 22px;
        border-bottom-left-radius: 10px;
        border-top-right-radius: 10px;
        padding: 10px;
        /*margin-right: 10px;*/
        /*line-height: 40px;*/
        /*padding-left: 10px;*/
        /*padding-right: 10px;*/

    }

    .divider-content {
        margin: 10px auto;
        width: 90%;
    }

    .title {
        line-height: 30px;
        font-size: 20px;
        padding-top: 18px;
        border-bottom: 18px;
        color: #000000;
        font-weight: 400;
        padding-left: 30px;
        text-align: left;
        padding-right: 30px;

    }

    .card-item-content-title {
        font-size: 14px;
        color: #666666;
    }

    .card-item-content {
        font-size: 14px;
        color: #333333;
    }

    .carousel {
        margin-top: 12px;
        border-radius: 12px;
        padding-left: 17px;
        padding-right: 17px;
    }

    .card-item-answer {
        padding-right: 45px;
        padding-left: 45px;
        margin-top: 15px;
    }

    .carousel-item {
        /*border-radius: 12px;*/


    }

    .card-item {
        margin: 8px;
        background-color: #FFFFFF;
        border-radius: 10px;


    }

    .card-item:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }


    .outer-container, .content {
        width: 614px;
        height: 100vh;
    }

    .outer-container {
        position: relative;
        overflow: hidden;
    }

    .inner-container {
        position: absolute;
        left: 0;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    /* for Chrome */
    .inner-container::-webkit-scrollbar {
        display: none;
    }
</style>
