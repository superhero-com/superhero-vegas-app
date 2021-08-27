<template>
    <!--        <RouterLink to="login">Home</RouterLink>-->
    <!--        <img src="../assets/logo.png" alt="">-->


    <div class="outer-container">
        <div style="height: 55px;text-align: left;padding-left: 12px;background-color: #ffffff; "><span
                style="line-height: 55px;  font-weight: 500;">Public Market</span>
        </div>
        <el-divider class="divider"></el-divider>
        <div class="inner-container">
            <div class="content">
                <div>

                    <div style="overflow:auto">


                        <!--        <el-carousel :interval="5000" height="200px" arrow="always">-->
                        <!--            <el-carousel-item class="carousel-item" v-for="item in 2" :key="item">-->

                        <!--                <div class="carousel-item-content">-->
                        <!--                    <img style="width: 100%" src="../assets/icons/1910.jpg" alt=""/>-->
                        <!--                </div>-->

                        <!--            </el-carousel-item>-->
                        <!--        </el-carousel>-->


                        <div class="list-group">
                            <ul
                                    class="list"
                                    v-infinite-scroll="load"
                                    infinite-scroll-disabled="disabled">

                                <router-link to='/mark_detail'>

                                    <el-card class="card-item" shadow="never" v-for="i in count" :key="i"
                                             :body-style="{ padding: '0px' }">

                                        <div class="title-group">


                                        </div>

<!--                                        <div style="width: 100%;position: absolute">-->
<!--                                            <div class="number">#{{i}}</div>-->
<!--                                        </div>-->

                                        <div class="title">#1 Wu Yifan incident in prison will be sentenced to several
                                            years？
                                        </div>
                                        <el-divider class="divider-content"></el-divider>


                                        <div style="display: flex;margin-top: 27px">

                                            <!--                                            <div>-->
                                            <!--                                                <div><span style="font-weight: 400">Oracle Type</span></div>-->
                                            <!--                                                <el-popover-->
                                            <!--                                                        placement="top-start"-->
                                            <!--                                                        title="Hint"-->
                                            <!--                                                        width="200"-->
                                            <!--                                                        trigger="hover"-->
                                            <!--                                                        content="Manual types are confirmed by the publisher, so be cautious in your predictions">-->

                                            <!--                                                    <el-button style="margin-top: 10px" type="primary" size="mini"-->
                                            <!--                                                               slot="reference"-->
                                            <!--                                                               icon="el-icon-warning" round>-->
                                            <!--                                                        Manual-->
                                            <!--                                                    </el-button>-->
                                            <!--                                                </el-popover>-->

                                            <!--                                            </div>-->


                                            <!--                                            <el-divider direction="vertical" style="height: 40px"></el-divider>-->
                                            <div style="text-align:left;width: 100%;padding-left: 30px;padding-right: 30px">
                                                <span class="card-item-content-title">Total pledge：</span>
                                                <span class="card-item-content" style="color: #de2563;">1010.00 (AE)</span>


                                            </div>


                                        </div>
                                        <div style="display: flex;margin-top: 22px">

                                            <!--                                            <div>-->
                                            <!--                                                <div><span style="font-weight: 400">Oracle Type</span></div>-->
                                            <!--                                                <el-popover-->
                                            <!--                                                        placement="top-start"-->
                                            <!--                                                        title="Hint"-->
                                            <!--                                                        width="200"-->
                                            <!--                                                        trigger="hover"-->
                                            <!--                                                        content="Manual types are confirmed by the publisher, so be cautious in your predictions">-->

                                            <!--                                                    <el-button style="margin-top: 10px" type="primary" size="mini"-->
                                            <!--                                                               slot="reference"-->
                                            <!--                                                               icon="el-icon-warning" round>-->
                                            <!--                                                        Manual-->
                                            <!--                                                    </el-button>-->
                                            <!--                                                </el-popover>-->

                                            <!--                                            </div>-->


                                            <!--                                            <el-divider direction="vertical" style="height: 40px"></el-divider>-->
                                            <div style="text-align:left;width: 100%;padding-left: 30px;padding-right: 30px">
                                                <span class="card-item-content-title">End time：</span>
                                                <span class="card-item-content">2021-08-26 16:48</span>


                                            </div>


                                        </div>
                                        <div style="display: flex;margin-top: 22px">

                                            <!--                                            <div>-->
                                            <!--                                                <div><span style="font-weight: 400">Oracle Type</span></div>-->
                                            <!--                                                <el-popover-->
                                            <!--                                                        placement="top-start"-->
                                            <!--                                                        title="Hint"-->
                                            <!--                                                        width="200"-->
                                            <!--                                                        trigger="hover"-->
                                            <!--                                                        content="Manual types are confirmed by the publisher, so be cautious in your predictions">-->

                                            <!--                                                    <el-button style="margin-top: 10px" type="primary" size="mini"-->
                                            <!--                                                               slot="reference"-->
                                            <!--                                                               icon="el-icon-warning" round>-->
                                            <!--                                                        Manual-->
                                            <!--                                                    </el-button>-->
                                            <!--                                                </el-popover>-->

                                            <!--                                            </div>-->


                                            <!--                                            <el-divider direction="vertical" style="height: 40px"></el-divider>-->
                                            <div style="text-align:left;width: 100%;padding-left: 30px;padding-right: 30px">
                                                <span class="card-item-content-title">Data source：</span>
                                                <el-link class="card-item-content" type="primary">
                                                    https://www.baidu.com
                                                </el-link>

                                            </div>


                                        </div>


                                        <!--                                        <div class="card-item-answer">-->
                                        <!--                                            <el-button type="primary" :span="1" round plain style="width: 100% ;">Brazil-->
                                        <!--                                            </el-button>-->
                                        <!--                                        </div>-->
                                        <!--                                        <div class="card-item-answer">-->
                                        <!--                                            <el-button type="primary" :span="1" round plain style="width: 100% ;">The-->
                                        <!--                                                United States-->
                                        <!--                                            </el-button>-->
                                        <!--                                        </div>-->
                                        <!--                                        <div class="card-item-answer">-->
                                        <!--                                            <el-button type="primary" :span="1" round plain style="width: 100% ;">-->
                                        <!--                                                Germany-->
                                        <!--                                            </el-button>-->
                                        <!--                                        </div>-->
                                        <!--                                        <div class="card-item-answer">-->
                                        <!--                                            <el-button type="primary" :span="1" round plain style="width: 100% ;">More-->
                                        <!--                                                Countries-->
                                        <!--                                            </el-button>-->
                                        <!--                                        </div>-->


                                        <div style="padding-bottom: 30px;margin-top: 10px;text-align: right;margin-right: 30px">
                                            <el-button style="margin-top: 15px" type="primary" plain round>Start
                                                prediction (100AE/ time)
                                            </el-button>
                                        </div>
                                        <!--                            <div class="bottom clearfix">-->
                                        <!--                                <time class="time">{{ currentDate }}</time>-->
                                        <!--                                <el-button type="text" class="button">操作按钮</el-button>-->
                                        <!--                            </div>-->

                                    </el-card>
                                </router-link>

                            </ul>
                        </div>

                        <!--        <p v-if="loading">加载中...</p>-->
                        <!--        <p v-if="noMore">没有更多了</p>-->
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>

    export default {
        name: 'MarketPage',
        props: {
            msg: String
        },
        data() {
            return {
                count: 10,
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
            }
        }
    };
</script>

<style scoped>

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
        font-size: 17px;
        color: #666666;
        float: left;
    }

    .card-item-content {
        font-size: 18px;
        float: right;
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
        margin: 15px;
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
