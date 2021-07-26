<template>
    <div class="search">
        <input type="text" placeholder="Search Address">
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
    }

    input {
        outline-style: none;
        border: 1px solid #ccc;
        border-radius: 30px;
        padding: 13px 14px;
        color: #cccccc;
        width: 256px;
        background-color: #08091D;
        font-size: 14px;
    }

    input:focus {
        border-color: #66afe9;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6)
    }
</style>
