<template>


    <div>
        <v-card class="card mt-5 mb-5 pb-5 overflow-hidden" rounded="lg">
            <div>
                <img style="width: 100%" src="../assets/icons/about_header.jpeg" alt="">
            </div>

            <div style="width: 100%;height: 350px;text-align: center;  display: flex;align-items: center;            justify-content: center;">
                <div style="float:left;width: 50%;">
                    <div style="color: #F7296E;font-size: 20px">What is AEVegas?</div>
                    <div style="margin-top: 10px;font-size: 16px;margin-left: 15px;margin-right: 15px;line-height: 22px;color: #9D9D9D">
                        In the traditional Internet, people can use legal tender to prediction market, such as the
                        World Cup, lottery, etc. In the blockchain world, we can use smart contracts and oracle to
                        reform the prediction market industry and promote the 2.0 development of the entire
                        prediction market industry
                    </div>
                </div>
                <div style="float: right;width: 50%;margin-right: 15px">
                    <img style="width: 100%;" src="../assets/icons/about_item_1.png" alt="">
                </div>

            </div>

            <div style="width: 100%;height: 350px;text-align: center;  display: flex;align-items: center;            justify-content: center;">

                <div style="float: left;width: 50%;margin-left: 15px">
                    <img style="width: 100%;" src="../assets/icons/about_item_2.png" alt="">
                </div>
                <div style="float:right;width: 50%;">
                    <div style="color: #F7296E;font-size: 20px">What can Vegas do??</div>
                    <div style="margin-top: 10px;font-size: 16px;margin-left: 15px;margin-right: 15px;line-height: 22px;color: #9D9D9D">
                        it app is a prediction market, the content is more than just a football or lottery, is the
                        whole world, such as the Olympic Games gold medal number, the World Cup, the NBA
                        championship, even AE price forecasting, etc., is a prediction market software and content
                        from various aspects, use aetericty chain technology always run in the aeternity in the
                        chain, it will be a good example and viral applications. It also contributes to the
                        ecological development of Aeterinty. Winners share the prize pool and pay part of the fees
                        to Oracle vendors, which is a win-win in many ways.
                    </div>
                </div>


            </div>

            <div style="width: 100%;height: 350px;text-align: center;  display: flex;align-items: center;            justify-content: center;">
                <div style="float:left;width: 50%;">
                    <div style="color: #F7296E;font-size: 20px">What is AEVegas?</div>
                    <div style="margin-top: 10px;font-size: 16px;margin-left: 15px;margin-right: 15px;line-height: 22px;color: #9D9D9D">
                        Good, we've achieved horizontal center! Now it's time for the big boss -- vertical center.
                        Before we do that, we need to set the height of the HTML and body elements that are the
                        ancestors of the div element to 100% (because they default to 0), and clear the default
                        styles,
                        i.e. margin and padding, to 0.
                    </div>
                </div>
                <div style="float: right;width: 50%;margin-right: 15px">
                    <img style="width: 100%;" src="../assets/icons/about_item_3.png" alt="">
                </div>

            </div>

        </v-card>


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

    .item-content-source-title {
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

    .market-item {
        margin: 8px;
        background-color: #FFFFFF;
        border-radius: 10px;


    }

    .market-item:hover {
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
