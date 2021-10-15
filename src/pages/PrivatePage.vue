<template>
    <div class="private">

        <div style="height: 55px;text-align: left;padding-left: 12px;color:#babac0;background-color: #000000; ">
            <span style="line-height: 55px;  font-weight: 500;">Private</span>
        </div>


        <div style="text-align: left;margin-top:10px;padding-left: 12px;color:#babac0; padding-bottom: 30px">
            <span style="line-height: 24px;  font-weight: 500;font-size: 16px">Private guessing. Since the guessing game may be divided into multiple countries with different languages and guessing scenes in each country, this function allows users to play with their friends and enter the domain name Aens to access the guessing game initiated by the user. The user initiated is not controlled by the prophet, and the user controls the results, the user initiated commission will be part of the dealer, please note!</span>
        </div>



        <div style=" width: 95%;margin:15px auto">
            <el-input prefix-icon="el-icon-search" placeholder="Search for the publisher address or. Chain domain name"
                      v-model="input3" class="input-with-select">

                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>


        <router-link to='/create_market'>

            <div style="color: #F7296E;border-radius: 30px;line-height: 20px; border:1px solid #F7296E;display: inline-flex;padding-left: 15px;padding-right: 2px;padding-top:2px;padding-bottom:2px;font-size: 14px">
                <div style="margin-right: 10px">
                    <div>Want to be a bookmaker?</div>
                    <div>I also make predictions？</div>
                </div>
                <div style="width: 40px;height:40px;background: #F7296E;border-radius: 30px;float: right;color: #ffffff;text-align: center;line-height: 40px">
+
                </div>
            </div>
        </router-link>


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

    .divider {
        padding: 0px;
        margin: 0px;
    }

    .el-input-group__append, .el-input-group__prepend {
        background-color: #5783c5;
        color: #ffffff;
        vertical-align: middle;
        display: table-cell;
        position: relative;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        padding: 0 20px;
        width: 1px;
        white-space: nowrap;
    }

    .private {
        color: #FFFFFF;
    }

</style>
