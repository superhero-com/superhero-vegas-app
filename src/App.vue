<template>

    <v-app id="inspire">
        <v-main class="background">


            <div v-if="this.$store.state.isLogin" style="width: 1200px;margin: 0 auto;">
                <div class="pa-0  " style="width: 240px;position: fixed;top:0">
                    <v-sheet class="card mt-5 pb-16 rounded-lg">
                        <navigation></navigation>
                    </v-sheet>
                </div>

                <div style="width: 630px;margin-left: 260px">
                    <v-sheet class="background">
                        <keep-alive>
                            <router-view v-if="$route.meta.keepAlive">
                                <!-- 这里是会被缓存的视图组件，比如 Home！ -->
                            </router-view>
                        </keep-alive>

                        <router-view v-if="!$route.meta.keepAlive">
                            <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
                        </router-view>
                    </v-sheet>
                </div>

                <div class="pa-0  "
                     style="width: 330px; position:fixed;float: right;top: 0;left: 50%;margin-left:310px;">
                    <WalletPage></WalletPage>

                </div>
            </div>
            <v-overlay :value="!this.$store.state.isLogin">
                <div class="d-flex flex-column" style="text-align: center">
                    <div class="height: 90px;">
                        <svg-icon class="ml-5 mr-5" name="icon_logo" alt="" />
                    </div>

                    <div >
                        <v-progress-circular :size="40" color="primary" indeterminate style="margin: auto 0"></v-progress-circular>
                    </div>
                    <span class="mt-10">Looking for a wallet. Check for popups.</span>

                </div>

            </v-overlay>
        </v-main>
    </v-app>

</template>

<script>

import {BrowserWindowMessageConnection, Node, RpcAepp, WalletDetector} from '@aeternity/aepp-sdk'
import VegasMarketContract from "@/contracts/VegasMarketContract";
import Navigation from "./components/Navigation";
import WalletPage from "@/components/WalletPage";

const MAIN_NET_NODE_INTERNAL_URL = 'https://node.aeasy.io';
const COMPILER_URL = 'https://compiler.aeasy.io';

export default {
    name: 'App',
    components: {
        WalletPage,
        Navigation,
    },
    data: function () {
        return {connectLoading: false}
    },
    mounted() {
        this.walletConnect();
    },
    methods: {
        async connectToWallet(wallet) {
            //连接钱包
            await this.$store.state.aeInstance.connectToWallet(await wallet.getConnection());
            await this.$store.state.aeInstance.subscribeAddress('subscribe', 'connected');

            //获取地址到全局变量，其他页面使用,并设置登录状态为已登录
            this.$store.state.address = await this.$store.state.aeInstance.address();
            this.$store.state.isLogin = true;
            //获取vegas合约
            this.$store.state.veagsContract = await this.$store.state.aeInstance.getContractInstance(VegasMarketContract, {contractAddress: "ct_vxg1raPbxkboAdxmSMBzEczZgSXT2Vueu238MPydd9iSntN5G"});

            this.forGetHeight();

            this.$bus.emit('load');
            this.$bus.emit('load_market_detail');


        },


        forGetHeight() {
            if (!this.$store.state.isLogin) return;
            const sel = this;
            setTimeout(() => {
                //获取当前最新高度
                this.$store.state.aeInstance.height().then(function (height) {
                    sel.$store.state.blockHeight = height;
                    sel.forGetHeight();
                });
            }, 5000)

        },

        scanForWallets() {
            //连接钱包的回调
            const handleWallets = async function ({wallets, newWallet}) {
                newWallet = newWallet || Object.values(wallets)[0];
                this.detector.stopScan();
                await this.connectToWallet(newWallet)
            };
            //获取浏览器消息连接器
            const scannerConnection = BrowserWindowMessageConnection({
                connectionInfo: {id: 'spy'}
            });

            //关联
            this.detector = WalletDetector({connection: scannerConnection});
            this.detector.scan(handleWallets.bind(this))
        },

        async walletConnect() {
            await this.walletCreated();
        },


        /**
         * 连接钱包
         */
        async walletCreated() {
            //显示loading
            this.connectLoading = true;
            //创建DApp钱包连接rpc后保存到全局变量中
            this.$store.state.aeInstance = await RpcAepp({
                name: 'Vegas Aepp',
                nodes: [
                    {name: 'ae_mainnet', instance: await Node({url: MAIN_NET_NODE_INTERNAL_URL})}
                ],
                compilerUrl: COMPILER_URL,
                onNetworkChange: async (params) => {
                    this.$store.state.aeInstance.selectNode(params.networkId);
                },
                onAddressChange: async (addresses) => {
                    console.log(addresses);
                },
                onDisconnect: () => {
                    this.resetState();
                }
            });
            //搜索浏览器钱包
            this.scanForWallets()
        },
    },

}
</script>


<style lang="scss" scoped>
html, body {
  background-color: black;
}
</style>
