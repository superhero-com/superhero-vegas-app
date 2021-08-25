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
                                            <span class="number">#{{i}}</span>
                                            <div class="title">Who will win the 2022 World Cup in Qatar？
                                                Who will win the 2022 World Cup in Qatar？
                                            </div>
                                        </div>
                                        <el-divider class="divider-content"></el-divider>
                                        <div style="display: flex;justify-content:space-around;margin-top: 17px">

                                            <div>
                                                <div><span style="font-weight: bold">Oracle Type</span></div>
                                                <el-popover
                                                        placement="top-start"
                                                        title="Hint"
                                                        width="200"
                                                        trigger="hover"
                                                        content="Manual types are confirmed by the publisher, so be cautious in your predictions">

                                                    <el-button style="margin-top: 10px" type="primary" size="mini"
                                                               slot="reference"
                                                               icon="el-icon-warning" round>
                                                        Manual
                                                    </el-button>
                                                </el-popover>

                                            </div>

                                            <div>
                                                <div><span style="font-weight: bold;font-size: 16px">Minimum pledge(AE)</span></div>
                                                <div class="card-item-content">10 / Number
                                                </div>

                                            </div>
                                            <div>
                                                <div><span style="font-weight: bold">Total pledge(AE)</span></div>
                                                <div class="card-item-content">1010.00</div>

                                            </div>


                                        </div>


                                        <div style="padding-right: 25px;padding-left: 25px;margin-top: 20px">
                                            <el-button type="primary" :span="1" round plain style="width: 100% ;">Brazil
                                            </el-button>
                                        </div>
                                        <div style="padding-right: 25px;padding-left: 25px;margin-top: 10px">
                                            <el-button type="primary" :span="1" round plain style="width: 100% ;">The United States
                                            </el-button>
                                        </div>
                                        <div style="padding-right: 25px;padding-left: 25px;margin-top: 10px">
                                            <el-button type="primary" :span="1" round plain style="width: 100% ;">Germany
                                            </el-button>
                                        </div>
                                        <div style="padding-right: 25px;padding-left: 25px;margin-top: 10px">
                                            <el-button type="primary" :span="1" round plain style="width: 100% ;">More Countries
                                            </el-button>
                                        </div>


                                        <div style="display: flex;justify-content:space-around;margin-top: 10px">
                                            <div><span
                                                    style="color: #666666;font-size: 14px">End Time：2021-08-25 18:04</span>
                                            </div>
                                            <div><span
                                                    style="color: #666666;font-size: 14px">Over Time：2021-08-25 18:04</span>
                                            </div>

                                        </div>


                                        <div style="padding-bottom: 10px;margin-top: 10px">
                                            <span style="color: #666666;font-size: 14px">Data Source：</span>
                                            <el-link href="https://www.aeternity.com" target="_blank" type="primary">
                                                http://www.aeternity.com
                                            </el-link>
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
        display: flex;

    }

    .number {
        color: #ffffff;
        background: #F7296E;
        font-weight: 500;
        border-bottom-right-radius: 10px;
        border-top-left-radius: 10px;
        margin-right: 10px;
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        padding-right: 10px;

    }

    .divider-content {
        margin: 10px auto;
        width: 90%;
    }

    .title {
        text-align: left;
        line-height: 30px;
        font-size: 18px;
        padding-top: 18px;
        color: #000000;
        font-weight: bold;

    }

    .card-item-content {
        margin-top: 10px;
        font-size: 14px;
        color: #676767;
    }

    .carousel {
        margin-top: 12px;
        border-radius: 12px;
        padding-left: 17px;
        padding-right: 17px;
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
        width: 654px;
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
