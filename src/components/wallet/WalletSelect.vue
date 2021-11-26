<template>
    <div class="wallet-select">
        <div class="pt-16">
            <img width="80%" src="../../assets/icons/wallet_logo.jpg"
                 alt="">
        </div>
        <div class="mt-6">
            <span class="mt-16 white--text">The wallet is not currently connected</span>
        </div>
        <div class="mt-6">
            <v-btn @click='walletCreated()'
                   color="primary"
                   elevation="2"
                   :loading="connectLoading"
                   :disabled="connectLoading"
                   large
                   rounded>{{address}}
            </v-btn>
            <br/>

<!--            <v-dialog-->
<!--                    v-model="dialog"-->
<!--                    persistent-->
<!--                    max-width="290"-->
<!--            >-->
<!--                <template v-slot:activator="{ on, attrs }">-->
<!--                    <v-btn @click='spend()'-->
<!--                           v-bind="attrs"-->
<!--                           color="primary"-->
<!--                           elevation="2"-->
<!--                           :loading="spendLoading"-->
<!--                           :disabled="spendLoading"-->
<!--                           large-->
<!--                           rounded>Spend-->
<!--                    </v-btn>-->
<!--                </template>-->
<!--                <v-card>-->
<!--                    <v-card-title class="text-h5">-->
<!--                        Spend Success！-->
<!--                    </v-card-title>-->
<!--                    <v-card-text>{{hash}}-->
<!--                    </v-card-text>-->
<!--                    <v-card-actions>-->
<!--                        <v-spacer></v-spacer>-->
<!--                        <v-btn-->
<!--                                color="green darken-1"-->
<!--                                text-->
<!--                                @click="dialog = false"-->
<!--                        >-->
<!--                            Disagree-->
<!--                        </v-btn>-->
<!--                        <v-btn-->
<!--                                color="green darken-1"-->
<!--                                text-->
<!--                                @click="dialog = false"-->
<!--                        >-->
<!--                            Agree-->
<!--                        </v-btn>-->
<!--                    </v-card-actions>-->
<!--                </v-card>-->
<!--            </v-dialog>-->

        </div>
    </div>
</template>


<script>
    import {BrowserWindowMessageConnection, Node, RpcAepp, WalletDetector} from '@aeternity/aepp-sdk/'

    // Send wallet connection info to Aepp throug content script
    const MAIN_NET_NODE_INTERNAL_URL = 'https://node.aechina.io';
    const COMPILER_URL = 'https://compiler.aeasy.io';
    export default {
        components: {},
        name: 'WalletSelect',
        props: {
            msg: String
        },

        data() {
            return {
                client: null,
                dialog: false,
                connectLoading: false,
                spendLoading: false,
                address: "Connect",
                hash: "",
                balance: "",
                walletName: "",
            }
        },
        mounted: function () {
            this.walletCreated();
        },
        methods: {
            mnemonic: function () {
                this.$store.commit('walletPage', "WalletMnemonicLogin");
                console.log(this.$store.state.walletPage)
            },


            async spend() {
                this.spendLoading = true;
                let spendResponse = await this.client.spend(
                    50000,
                    "ak_QyFYYpgJ1vUGk1Lnk8d79WJEVcAtcfuNHqquuP2ADfxsL6yKx", {
                        // fee: 1
                        // onAccount: onAccount
                    }
                );
                this.dialog = true;
                this.spendLoading = false;
                this.hash = spendResponse.hash;
                console.log(spendResponse);
            },
            async connectToWallet(wallet) {
                console.log(wallet);
                await this.client.connectToWallet(await wallet.getConnection());
                this.accounts = await this.client.subscribeAddress('subscribe', 'connected');

                let address = await this.client.address();
                this.address = address.slice(0, 5) + "..." + address.slice(-4);
                this.balance = await this.client.getBalance(address);
                this.walletName = this.client.rpcClient.info.name;
                this.connectLoading = false;

            },
            scanForWallets() {
                const handleWallets = async function ({wallets, newWallet}) {
                    newWallet = newWallet || Object.values(wallets)[0];
                    this.detector.stopScan();
                    await this.connectToWallet(newWallet)
                };
                const scannerConnection = BrowserWindowMessageConnection({
                    connectionInfo: {id: 'spy'}
                });
                this.detector = WalletDetector({connection: scannerConnection});
                this.detector.scan(handleWallets.bind(this))
            },
            async walletCreated() {
                this.connectLoading = true;
                this.client = await RpcAepp({
                    name: 'Simple Aepp',
                    nodes: [
                        {name: 'ae_mainnet', instance: await Node({url: MAIN_NET_NODE_INTERNAL_URL})}
                    ],
                    compilerUrl: COMPILER_URL,
                    onNetworkChange: async (params) => {
                        this.client.selectNode(params.networkId);
                        // this.nodeInfoResponse = await errorAsField(this.client.getNodeInfo())
                    },
                    onAddressChange: async (addresses) => {
                        console.log(addresses);
                        // this.pub = await this.client.address();
                        // this.balance = await this.client.balance(this.pub).catch(e => '0');
                        // this.addressResponse = await errorAsField(this.client.address())
                    },
                    onDisconnect: () => {
                        this.resetState();
                        alert('Disconnected')
                    }
                });
                this.height = await this.client.height();
                console.log(this.height);
                this.scanForWallets()

            },
        },


    }

</script>

<style lang="scss" scoped>
    .wallet-select {
        /*width: 306px;*/
        text-align: center;
    }


</style>
