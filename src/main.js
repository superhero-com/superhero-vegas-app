import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import SvgIcon from './components/SvgIcon.vue'
import './assets/styles/reset.css'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = true;

//use SvgIcon
Vue.component('svg-icon', SvgIcon);

//use Vuex Store
Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        walletPage: "WalletSelect",
        participatePage: "ParticipateOngoing"
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

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');














