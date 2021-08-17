<template>
    <!--        <RouterLink to="login">Home</RouterLink>-->
    <!--        <img src="../assets/logo.png" alt="">-->
    <div  class="" style="overflow:auto">
        <ul
                class="list"
                v-infinite-scroll="load"
                infinite-scroll-disabled="disabled">

            <el-card v-for="i in count" :key="i" :body-style="{ padding: '0px' }">
                <div style="padding: 14px;">
                    <span>好吃的汉堡{{i}}</span>
                    <div class="bottom clearfix">
                        <time class="time">{{ currentDate }}</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
            </el-card>
        </ul>
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

        overflow: auto;;

    }

    li {
        line-height: 50px;
        background-color: #12155a;
        color: #FFFFFF;
    }


</style>
