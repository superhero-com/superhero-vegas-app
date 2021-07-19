import Vue from 'vue'
import Router from 'vue-router'
import MarketPage from "../pages/MarketPage";
import PrivatePage from "../pages/PrivatePage";
import ParticipatePage from "../pages/ParticipatePage";
import UpdatePage from "../pages/UpdatePage";
import AboutPage from "../pages/AboutPage";

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'MarketPage',
            component: MarketPage
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
