<template>
    <div class="search">
        <!--        <input type="text" placeholder="Search Address">-->
        <el-row>
            <div class="input">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>

        </el-row>

    </div>

</template>


<script>

    export default {
        components: {},
        name: 'Search',
        props: {
            msg: String
        },
        data() {
            return {
                currentTab: "AboutPage",
                input: ''
            }
        },
        methods: {
            toggleTab: function (tab) {
                this.currentTab = tab; // tab 为当前触发标签页的组件名
            }
        }
    }
</script>

<style lang="scss" scoped>


    .search {
        width: 306px;
        height: 80px;
        line-height: 80px;
        text-align: center;
    }

    .input {
        margin: 0 auto;
        width: 255px;
    }


</style>
