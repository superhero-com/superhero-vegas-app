<template>
    <div class="update">
        <div style="height: 55px;text-align: left;padding-left: 12px;background-color: #ffffff; "><span
                style="line-height: 55px;  font-weight: 500;">Update</span>
        </div>
        <div style="padding-left: 10px;padding-right: 10px;background: #ffffff">


            <el-collapse>
                <el-collapse-item title="v1.0.3 Update Logs"  name="1" style="font-size: 18px;color: #de2563">
                    <div>log；logloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglog</div>
                    <div>log；logloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglog</div>
                    <div>log；logloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglog</div>
                    <div>log；logloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglog</div>
                    <div>log；logloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglogloglog</div>
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
