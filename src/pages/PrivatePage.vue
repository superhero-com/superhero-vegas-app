<template>
    <div class="private">

        <div>
            <span> 私有竞猜，由于竞猜可能分为多个国家，各个国家的语言和竞猜场景不同，该功能可以用户和朋友之间的游玩，输入aens域名，访问该用户正在发起的竞猜。用户发起的不受预言机控制，又用户控制结果，用户发起的手续费将部分分给庄家，请注意！</span>
        </div>
        <div><span>请输入ae域名</span></div>
        <div class="input">
            <el-input placeholder="输入要查找的预测"></el-input>
        </div>

        <router-link to='/private_market'>
            <el-button >搜索</el-button>
        </router-link>
        <div><span>想当庄家？我也发起预测</span></div>
        <div class="input">
            <el-button>发起预测</el-button>
        </div>


    </div>
</template>

<script>
    export default {
        name: 'PrivatePage',
        props: {
            msg: String
        }
    }
</script>

<style scoped>

    .private {
        color: #FFFFFF;
    }

</style>
