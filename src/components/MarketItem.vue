<template>
    <div class="market-item">
        <div class="item-header">
            <div class="item-header-id">
                <span>#1</span>
            </div>
            <div class="item-header-time">
                <span>EndTime : 2021-09-20 11:19:02</span>
            </div>
            <div class="item-header-type">
                <svg-icon class="item-header-type-icon" name='icon_hint'></svg-icon>
                <span>Manual</span>
            </div>
        </div>

        <div class="item-content-text">
            <span>The 2022 World Cup in Qatar, to predict who will be the winner?</span>
        </div>




        <div class="item-content-source">
            <span class="item-content-source-title">Data source：</span>
            <span @click="sourceClock" class="card-item-content" style="color:#f7296e">
                https://www.baidu.com
            </span>
        </div>
        <div class="item-footer">
            <div class="item-footer-pledge">
                <span class="item-content-source-title">Total pledge：</span>
                <span class="card-item-content" style="color: #9D9D9D;">1000.00 (AE)</span>
            </div>
            <div class="item-footer-time-group">
                <div class="item-footer-time-group-left-group">
                    <svg-icon class="icon item-footer-time-group-left-group-icon" name='icon_dice'></svg-icon>
                    <span class="item-footer-time-group-left-group-text">Start Prediction</span>
                </div>
                <div class="item-footer-time-group-right-group">
                    <span class="item-footer-time-group-right-group-text">100AE/At a time</span>
                    <svg-icon class="icon item-footer-time-group-right-group-icon" name='icon_ae'></svg-icon>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        components: {},
        name: 'MarketItem',
        props: {
            title: {
                type: String,
                default: ""
            },
            is_back: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {knowledge: 33}
        },
        methods: {

            sourceClock() {
    console.log("1111");
    return;
            }
        }
    }
</script>

<style lang="scss" scoped>

    .market-item {
        margin-top: 10px;
        background-color: #343434;
        border-radius: 10px;
        margin-left: 10px;
        margin-right: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
        border: 0 solid #000000
    }

    .item-header {
        color: #babac0;
        border-radius: 10px;
        height: 40px;
        background: rgba(0, 0, 0, 0.97);
        margin-left: 10px;
        margin-right: 10px;
        line-height: 40px;
    }

    .item-header-id {
        font-size: 18px;
        color: #ffffff;
        background: rgb(49, 91, 247);
        display: inline-block;
        height: 40px;
        float: left;
        border-radius: 10px 30px 30px 10px;
        text-align: center;
        line-height: 40px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .item-header-time {
        font-size: 14px;
        text-align: center;
        line-height: 40px;
        float: left;
        color: #9D9D9D;
        margin-left: 10px;
    }

    .item-header-type {
        font-size: 14px;
        padding-left: 10px;
        padding-right: 10px;
        text-align: center;
        float: right;
        border-radius: 100px;
        background: #EA034F;
        margin: 5px 10px;
        height: 26px;
        line-height: 26px;
        color: #ffffff
    }

    .item-header-type-icon {
        width: 13px;
        height: 13px;
        margin-top: 7px;
        display: inline;
        fill: #ffffff;
        margin-left: 5px;
        float: left;
        margin-right: 5px
    }

    .icon {
        width: 20px;
        fill: #ffffff;
        height: 20px;
    }


    .item-content-source-title {
        font-size: 14px;
        color: #9D9D9D;
    }

    .card-item-content {
        font-size: 14px;
        color: #fff;
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


    .market-item:hover {
        background-color: #2a2a2a;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        /*line-height: 200px;*/
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

        height: calc(100vh);
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


    .item-content-text {
        text-align: left;
        padding: 15px 30px;
        font-size: 18px;
        line-height: 30px;
        font-weight: bold;
        color: #ffffff
    }

    .item-content-source {
        text-align: left;
        width: 100%;
        padding-left: 30px;
        padding-right: 30px
    }

    .item-footer {
        color: #000000;
        background: #000000;
        border-radius: 6px;
        height: 40px;
        text-align: center;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px
    }

    .item-footer-pledge {
        text-align: left;
        padding-left: 15px;
        padding-right: 15px;
        float: left;
        display: inline-block;
        line-height: 40px
    }

    .item-footer-time-group {
        text-align: left;
        float: right;
        display: flex;
        border: 1px solid #1E1E1E;
        background: rgba(247, 41, 110, 0);
        height: 30px;
        border-radius: 5px;
        margin-top: 5px;
        margin-right: 10px
    }

    .item-footer-time-group-left-group {
        background: rgb(49, 91, 247);
        height: 26px;
        margin: 2px;
        line-height: 26px;
        color: #ffffff;
        border-radius: 3px;
        display: inline
    }

    .item-footer-time-group-left-group-icon {
        display: inline-block;
        margin: 3px 3px 3px 5px;
        float: left
    }

    .item-footer-time-group-left-group-text {
        font-size: 14px;
        display: inline;
        padding-left: 2px;
        padding-right: 10px;
        height: 26px
    }

    .item-footer-time-group-right-group {
        background: rgba(0, 255, 157, 0);
        height: 26px;
        margin: 2px;
        line-height: 26px;
        color: #ffffff;
        border-radius: 3px;
        display: inline
    }

    .item-footer-time-group-right-group-text {
        font-size: 14px;
        display: inline;
        padding-left: 5px;
        padding-right: 0;
        height: 26px
    }

    .item-footer-time-group-right-group-icon {
        display: inline-block;
        margin: 3px 10px 3px 5px;
        float: right;
        fill: #F7296E;
        border-radius: 50px
    }
</style>
