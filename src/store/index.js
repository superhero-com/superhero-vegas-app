import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //sdk
        aeSdk: null,
        //合约
        veagsContract: null,
        //当前高度
        blockHeight: 0,
        //是否登录
        isLogin: false,
        //是否登出
        isLogout: false,
        //账户地址
        address: '',
        //是否是聚合器账户
        isAggregatorUser: false,
        //导航
        nvaList: [
            {
                text: 'Markets',
                icon: 'nav_home',
                page: '/',
            },
            {
                text: 'Private',
                icon: 'nav_private',
                page: '/private',
            },
            {
                text: 'My Bet',
                icon: 'nav_my',
                page: '/participate',
            },

            {
                text: 'Update',
                icon: 'nav_update',
                page: '/update',
            },
            {
                text: 'About',
                icon: 'nav_about',
                page: '/about',
            }

        ]
    },

    mutations: {
        //切换我的预测状态
        participatePage(state, page) {
            state.participatePage = page;
        }
    }
});
