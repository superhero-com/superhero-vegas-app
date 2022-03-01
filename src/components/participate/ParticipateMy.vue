<template>
    <div style="text-align: center;">
        <div style="margin-top:200px;text-align: center;color: white">No Ongoing Data</div>
    </div>


</template>


<script>

    export default {
        components: {},
        name: 'ParticipateMy',
        props: {
            msg: String
        },
        data() {
            return {
                currentTab: "ParticipateOngoing",
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
