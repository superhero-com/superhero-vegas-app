import Vue from 'vue'
import Router from 'vue-router'
import MarketPage from "../pages/MarketPage";
import PrivatePage from "../pages/PrivatePage";
import ParticipatePage from "../pages/ParticipatePage";
import UpdatePage from "../pages/UpdatePage";
import AboutPage from "../pages/AboutPage";
import MarketDetailPage from "../pages/MarketDetailPage";
import PrivateMarketPage from "../pages/PrivateMarketPage";
import CreateMarketPage from "../pages/CreateMarketPage";

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'MarketPage',
            component: MarketPage
        },
        {
            path: '/mark_detail',
            name: 'MarketDetailPage',
            component: MarketDetailPage
        },
        {
            path: '/private_market',
            name: 'PrivateMarketPage',
            component: PrivateMarketPage
        }, {
            path: '/create_market',
            name: 'CreateMarketPage',
            component: CreateMarketPage
        },
        {
            path: '/private',
            name: 'PrivatePage',
            component: PrivatePage
        },
        {
            path: '/participate',
            name: 'ParticipatePage',
            component: ParticipatePage
        },
        {
            path: '/update',
            name: 'UpdatePage',
            component: UpdatePage
        },
        {
            path: '/about',
            name: 'AboutPage',
            component: AboutPage
        }
    ]
});
