<template>
    <div class="update">
        <div style="height: 55px;text-align: left;padding-left: 12px;background-color: #000000; color: #babac0; position: -webkit-sticky;position: sticky;top: 0; z-index: 999;"><span
                style="line-height: 55px;  font-weight: 500;">Update</span>
        </div>
        <div style="padding-left: 10px;padding-right: 10px;background: #000000">


            <el-collapse>
                <el-collapse-item title="v1.0.0 Update Logs"  name="1" style="font-size: 18px;color: #de2563;background:#000000">
                    <div>1.The first version is updated to support superhero wallets</div>
                    <div>2.Support forecasting</div>
                    <div>3.Oracle 2.0 support</div>
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

    .el-collapse-item__header{
        display: flex;
        align-items: center;
        height: 48px;
        line-height: 48px;
        background-color: #000;
        color: #303133;
        cursor: pointer;
        border-bottom: 1px solid #ebeef5;
        font-size: 13px;
        font-weight: 500;
        transition: border-bottom-color .3s;
        outline: 0;
    }

</style>
