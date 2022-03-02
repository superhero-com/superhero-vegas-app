import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        walletPage: "WalletSelect",
        // participatePage: "ParticipateMy",

        aeInstance: null,
        veagsContract: null,
        blockHeight: 0,
        isLogin: false,
        address: ''
    },

    mutations: {
        walletPage(state, page) {
            state.walletPage = page;
        },
        participatePage(state, page) {
            state.participatePage = page;
        }
    }
});
