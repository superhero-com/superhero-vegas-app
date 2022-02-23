import Vue from 'vue'
import Vuex from 'vuex'
import MarketPage from "@/pages/MarketPage";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        walletPage: "WalletSelect",
        participatePage: "ParticipateOngoing",

        aeInstance: null,
        veagsContract: null,
        isLogin: false,
        address: ''
    },

    result_datas: {
        marketPage: MarketPage,
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
