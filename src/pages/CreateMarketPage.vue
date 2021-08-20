<template>
    <div class="private">
        <el-button class="button" @click='goBlack()'>返回</el-button>
        <div>
            <span> 为了国际化标准，请输入中英文</span>
        </div>
        <div><span>预测的问题(中文)</span></div>
        <div class="input">
            <el-input placeholder="中文"></el-input>
        </div>
        <div class="input">
            <el-input placeholder="英文"></el-input>
        </div>

        <div><span>预测的结果最多4个</span></div>
        <div><span>预测的结果(A)</span></div>
        <div class="input">
            <el-input placeholder="中文"></el-input>
            <el-input placeholder="英文"></el-input>
        </div>

        <div><span>预测的结果(B)</span></div>
        <div class="input">
            <el-input placeholder="中文"></el-input>
            <el-input placeholder="英文"></el-input>
        </div>

        <div><span>预测的结果(C)</span></div>
        <div class="input">
            <el-input placeholder="中文"></el-input>
            <el-input placeholder="英文"></el-input>
        </div>

        <div><span>预测的结果(D)</span></div>
        <div class="input">
            <el-input placeholder="中文"></el-input>
            <el-input placeholder="英文"></el-input>
        </div>
        <div><span>数据来源(D)</span></div>
        <div class="input">
            <el-input placeholder="https://www.huobi.com"></el-input>
        </div>
        <div><span>最小质押数量(AE)</span></div>
        <div class="input">
            <el-input placeholder="大于1AE"></el-input>
        </div>
        <div><span>预测投注截止时间</span></div>
        <span class="demonstration"></span>
        <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
        </el-date-picker>
        <div><span>预测投注开奖</span></div>
        <span class="demonstration"></span>
        <el-date-picker
                v-model="value2"
                type="date"
                placeholder="选择日期">
        </el-date-picker>
      <div>
          <el-button class="button" @click='goBlack()'>确认发起</el-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'CreateMarketPage',
        props: {
            msg: String
        },
        data() {
            return {
                value1: "",
                value2: "",
            }
        },
        methods: {

            goBlack() {
                this.$router.back();
                // this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>

    .private {
        color: #FFFFFF;
    }

</style>
