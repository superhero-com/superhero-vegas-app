<template>
    <!--        <RouterLink to="login">Home</RouterLink>-->
    <!--        <img src="../assets/logo.png" alt="">-->
    <div class="" style="overflow:auto">
        <div class="carousel">
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item class="carousel-item" v-for="item in 1" :key="item">
                    <!--                    <div><span>选择项目进行竞猜，竞猜开奖时间结束后会进行开奖，部分项目为手动开奖，国际竞猜为社区发起，手续费为2%用于平台运营</span></div>-->
                    <img style="width: 100%" src="../assets/icons/1910.jpg" alt=""/>
                </el-carousel-item>
            </el-carousel>

        </div>

        <div class="list-group">
            <ul
                    class="list"
                    v-infinite-scroll="load"
                    infinite-scroll-disabled="disabled">


                <el-card class="card-item" v-for="i in count" :key="i" :body-style="{ padding: '0px' }">

                    <router-link to='/mark_detail'>
                        <div style="padding: 14px;">
                            <div><span>#{{i}}问题：2022年卡塔尔世界杯谁会获得总冠军？</span></div>
                            <div><span>预测截止时间：2022年06月18日09:41</span></div>
                            <div><span>预测开奖时间：2022年08月18日09:41</span></div>
                            <div><span>预言机类型：手动/自动</span></div>
                            <div><span>数据来源：https://www.baidu.com</span></div>
                            <div><span>100AE/1次</span></div>
                            <div><span>总奖池：1202.00AE</span></div>
                            <!--                            <div class="bottom clearfix">-->
                            <!--                                <time class="time">{{ currentDate }}</time>-->
                            <!--                                <el-button type="text" class="button">操作按钮</el-button>-->
                            <!--                            </div>-->
                        </div>
                    </router-link>
                </el-card>


            </ul>
        </div>

        <!--        <p v-if="loading">加载中...</p>-->
        <!--        <p v-if="noMore">没有更多了</p>-->
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
                count: 20,
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

        overflow: auto;;

    }

    span {
        color: #000000;
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

    .carousel {
        margin-top: 12px;
        border-radius: 12px;
padding-left: 17px;
        padding-right: 17px;
    }

    .carousel-item {
        border-radius: 12px;


    }

    .card-item {
        margin-top: 17px;
        margin-left: 17px;
        margin-right: 17px;
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
</style>
