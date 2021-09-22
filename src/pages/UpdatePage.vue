<template>
    <div class="update">
        <div style="height: 55px;text-align: left;padding-left: 12px;background-color: #ffffff; "><span
                style="line-height: 55px;  font-weight: 500;">Update</span>
        </div>
        <div style="padding-left: 10px;padding-right: 10px;background: #ffffff">


            <el-collapse>
                <el-collapse-item title="v1.0.3 升级信息"  name="1" style="font-size: 18px;color: #de2563">
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>

            </el-collapse>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UpdatePage',
        props: {
            msg: String
        }
    }
</script>

<style scoped>
    .update {
        text-align: left;
    }

</style>
