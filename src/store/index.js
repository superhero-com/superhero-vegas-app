import Vue from 'vue'
import Vuex from 'vuex'
import MarketPage from "@/pages/MarketPage";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        walletPage: "WalletSelect",
        participatePage: "ParticipateOngoing",

        aeInstance: null,
        isLogin: false,
        address: ''
    },

    modules: {
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
