<template>
    <!--        <RouterLink to="login">Home</RouterLink>-->
    <!--        <img src="../assets/logo.png" alt="">-->

    <div class="outer-container">
        <div style="height: 55px;text-align: left;background-color: #ffffff; ">
            <el-button style="margin-left: 5px;border-color: #ffffff;" icon="el-icon-back" circle @click='goBlack()'></el-button>


            <span
                    style="line-height: 55px;  font-weight: 500;">
            Market Detail</span>
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

                                <el-card class="card-item" shadow="never" v-for="i in count" :key="i"
                                         :body-style="{ padding: '0px' }">
                                    <div style="color: #cccccc;border-radius: 10px;height: 40px;line-height: 40px">
                                        <div style="color:#ffffff;background: #F7296E;display: inline-block;height: 40px;float: left;border-radius:6px;border-top-right-radius:30px;border-bottom-right-radius:30px;text-align: center;line-height: 40px;padding-left: 10px;padding-right: 10px;">
                                            <span>#1</span>

                                        </div>

                                        <div style="font-size:14px;text-align: center;line-height: 40px;float: left;color: black;margin-left: 10px">
                                            <span>EndTime : 2021-09-20 11:19:02</span>
                                        </div>
                                        <div style="font-size:14px;padding-left:10px;padding-right:10px;text-align: center;float: right;border-radius: 100px;background: #ff5945;margin: 5px 10px;height: 30px;line-height: 30px;color: #ffffff">
                                            <svg-icon style="width:13px;height:13px;margin-top: 8px;display: inline; fill: #ffffff;margin-left: 5px;float: left;margin-right: 5px" name='icon_hint'></svg-icon>
                                            <span>Manual</span>
                                        </div>
                                    </div>

                                    <div style="text-align: left;padding-left: 30px;padding-right:30px;padding-top:15px;padding-bottom:15px;font-size: 18px;line-height: 30px;font-weight: bold">
                                        <span>The 2022 World Cup in Qatar, to predict who will be the winner?</span>
                                    </div>
                                    <div style="display: flex;">
                                        <div style="text-align:left;width: 100%;padding-left: 30px;padding-right: 30px">
                                            <span class="card-item-content-title">Data source：</span>
                                            <el-link class="card-item-content" type="primary">
                                                https://www.baidu.com
                                            </el-link>
                                        </div>
                                    </div>





                                    <el-row style="margin-top: 10px ; width: 100%">
                                        <el-button round style="width: 70%">Germany</el-button>
                                    </el-row>
                                    <el-row style="margin-top: 10px ; width: 100%">
                                        <el-button round style="width: 70%">The United States</el-button>
                                    </el-row>
                                    <el-row style="margin-top: 10px ; width: 100%">
                                        <el-button round style="width: 70%">China</el-button>
                                    </el-row>
                                    <el-row style="margin-top: 10px ; width: 100%">
                                        <el-button round style="width: 70%">Brazil</el-button>
                                    </el-row>


                                    <div style="margin: 15px;color: #cccccc;background: #edf3f7;border-radius: 6px;height: 40px;text-align: center">
                                        <div style="text-align:left;padding-left: 15px;padding-right: 15px;float: left;display: inline-block;line-height: 40px">
                                            <span class="card-item-content-title">Total pledge：</span>
                                            <span class="card-item-content" style="color: #de2563;">1000 AE</span>
                                        </div>
                                        <div style="text-align:left;float: right;display: flex;  border:1px solid #cccccc;background: #ffffff;height:30px;border-radius: 5px;margin-top: 5px;margin-right: 10px">
                                            <div style="background: #F7296E;  height: 26px;margin: 2px;line-height: 26px;color: #ffffff;border-radius: 3px;display: inline">
                                                <svg-icon class="icon" style="margin: 3px;display: inline-block;margin-left: 5px;float: left" name='icon_dice'></svg-icon>
                                                <span style="font-size: 14px;display: inline;padding-left: 5px;padding-right: 10px;height: 26px">Start Prediction</span>
                                            </div>
                                            <div style="background: #ffffff;  height: 26px;margin: 2px;line-height: 26px;color: #000000;border-radius: 3px;display: inline">

                                                <span style="font-size: 14px;display: inline;padding-left: 5px;padding-right: 0px;height: 26px">100AE/At a time</span>
                                                <svg-icon class="icon" style="margin: 3px;display: inline-block;margin-right:10px;margin-left: 5px;float: right;fill: #F7296E" name='icon_ae'></svg-icon>
                                            </div>
                                        </div>
                                    </div>
                                </el-card>
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
        name: 'MarketDetailPage',
        props: {
            msg: String
        },
        data() {
            return {
                count: 1,
                loading: false
            }
        },
        computed: {
            noMore() {
                return this.count >= 20
            },
            disabled() {
                return this.loading || this.noMore
            }
        },
        methods: {
            load() {
                this.loading = true
                setTimeout(() => {
                    // this.count += 2
                    this.loading = false
                }, 2000)
            },
            goBlack() {
                this.$router.back();
                // this.$router.go(-1)
            }
        }
    };
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
