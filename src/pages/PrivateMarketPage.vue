<template>
    <!--        <RouterLink to="login">Home</RouterLink>-->
    <!--        <img src="../assets/logo.png" alt="">-->
    <div  class="" style="overflow:auto">
        <el-button class="button"  @click='goBlack()'>返回</el-button>
        <div><span>ak_QyFYYpgJ1vUGk1Lnk8d79WJEVcAtcfuNHqquuP2ADfxsL6yKx发起的预测</span></div>
        <ul
                class="list"
                v-infinite-scroll="load"
                infinite-scroll-disabled="disabled">



            <el-card v-for="i in count" :key="i" :body-style="{ padding: '0px' }">

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
<!--        <p v-if="loading">加载中...</p>-->
<!--        <p v-if="noMore">没有更多了</p>-->
    </div>


</template>

<script>

    export default {
        name: 'PrivateMarketPage',
        props: {
            msg: String
        },
        data() {
            return {
                count: 2,
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
    span{
        color: #FFFFFF;
    }

    li {
        line-height: 50px;
        background-color: #12155a;
        color: #FFFFFF;
    }


</style>
