<template>
    <div class="title_group">
        <v-btn v-show="is_back" class="ma-0 pa-0 ml-4" fab small color="black" @click="goBlack">
            <v-icon color="#babac0">
                mdi-arrow-left
            </v-icon>
        </v-btn>
        <span class="ml-4 title_content">{{title}}</span>
    </div>
</template>
<script>
    export default {
        components: {},
        name: 'Title',
        props: {
            title: {
                type: String,
                default: ""
            },
            is_back: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {}
        },
        methods: {
            goBlack() {
                this.$router.back();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .title_group {
        height: 55px;
        text-align: left;
        background-color: #000000;
        color: #babac0;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 999;
    }

    .title_content {
        line-height: 55px;
        font-weight: 500;
    }
</style>
