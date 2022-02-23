<template>
  <div class="wallet-select">
    <div class="pt-4 d-flex align-center justify-center">

      <v-btn @click='walletConnect()'
             color="primary"
             elevation="2"
             :loading="connectLoading"
             :disabled="connectLoading"
             rounded>{{ btn_connect_data }}
      </v-btn>

      <span
          v-if="this.$store.state.isLogin"
          class="ml-2"
      >
                {{ address }}
            </span>

      <v-btn
          v-if="this.$store.state.isLogin"
          class="ml-2"
          icon
          x-small
          color="while"
      >
        <v-icon>mdi-content-copy</v-icon>
      </v-btn>
    </div>

    <div class="mt-1 d-flex align-center">
      <div class="card  rounded-lg justify-center pa-3" style="width: 175px">
        <div class="d-flex align-center justify-center">
          <img style="width: 30px" src="../../assets/icons/right_ae_logo.png" alt="">
          <span class="ml-2">
                       AE PRICE
                     </span>
        </div>
        <v-sparkline
            :value="value"
            :gradient="gradient"
            :smooth="radius || false"
            :line-width="width"
            :gradient-direction="gradientDirection"
            :fill="fill"
            class="mt-4 mb-4"
            auto-draw
        ></v-sparkline>
        <div class="d-flex align-start">
                    <span class="ml-2 grey--body-2">
                      $2,000
                     </span>
        </div>
        <div class="d-flex align-start">
                    <span class="ml-2 green--text caption">
                      43.21%
                     </span>
        </div>

      </div>


      <div class=" pa-3">
        <div class="card  rounded-lg d-flex align-center justify-center pl-5 pr-5" style="height: 70px">
          <img style="width: 130px" src="../../assets/icons/right_super_hero.png" alt="">
        </div>

        <div class="card  rounded-lg d-flex align-center justify-center mt-3 pl-5 pr-5" style="height: 75px">
          <img style="width: 130px" src="../../assets/icons/right_super_github.png" alt="">
        </div>
      </div>

    </div>
    <div class="card  rounded-lg d-flex align-start mr-3 overflow-hidden" style=" position: relative">

      <img style="width: 80px; position: absolute;left: -10px;bottom: -10px"
           src="../../assets/icons/right_vegas_bg.png" alt="">

      <div class="d-flex align-center  flex-column ml-auto  mt-3 mr-3">
                <span class="text-md-body-1 primary--text">
                    The total number of predictions
                </span>

        <div class="d-flex  ml-auto  align-end  mt-2 mb-3 ">
          <span class="while--text text-h5 mr-2">2,000</span>
          <span class="grey--text text-body-2 ml-auto mb-1">times</span>
        </div>

      </div>
    </div>

    <div class="card  rounded-lg d-flex align-start mr-3 overflow-hidden mt-3" style=" position: relative">

      <img style="width: 80px; position: absolute;left: -10px;bottom: -10px"
           src="../../assets/icons/right_ae_bg.png" alt="">

      <div class="d-flex align-center  flex-column ml-auto  mt-3 mr-3">
                <span class="text-md-body-1 primary--text">
                    The total number of predictions
                </span>

        <div class="d-flex  ml-auto  align-end  mt-2 mb-3 ">
          <span class="while--text text-h5 mr-2">2,000</span>
          <span class="grey--text text-body-2 ml-auto mb-1">times</span>
        </div>

      </div>
    </div>


  </div>
</template>


<script>
import {BrowserWindowMessageConnection, Node, RpcAepp, WalletDetector} from '@aeternity/aepp-sdk'
import VegasMarketContract from "@/contracts/VegasMarketContract";

const MAIN_NET_NODE_INTERNAL_URL = 'https://node.aeasy.io';
const COMPILER_URL = 'https://compiler.aeasy.io';

const gradients = [
  ['#ffffff', '#ffffff'],
];

export default {
  components: {},
  name: 'WalletSelect',
  props: {
    msg: String
  },

  data() {
    return {
      width: 5,
      radius: 10,
      gradient: gradients[0],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 6, 0, 16, 8, 6, 9, 19],
      gradientDirection: 'top',
      gradients,
      fill: false,


      address: "",
      connectLoading: false,
      spendLoading: false,
      btn_connect_data: "Connect to a Wallet",
    }
  },
  mounted: function () {
    this.walletCreated();

  },
  methods: {
    async connectToWallet(wallet) {
      //连接钱包
      await this.$store.state.aeInstance.connectToWallet(await wallet.getConnection());
      await this.$store.state.aeInstance.subscribeAddress('subscribe', 'connected');

      //获取连接钱包的地址，用于页面展示
      let address = await this.$store.state.aeInstance.address();

      //获取地址到全局变量，其他页面使用,并设置登录状态为已登录
      this.$store.state.address = await this.$store.state.aeInstance.address();
      this.$store.state.isLogin = true;
      //获取vegas合约
      this.$store.state.veagsContract = await this.$store.state.aeInstance.getContractInstance(VegasMarketContract, {contractAddress: "ct_qucrR9M8is4ZYZPHEzUJGKvdDLsmRp6hcJZEFcFeGY6tkhSf9"});


      this.$bus.emit('load');
      this.$bus.emit('load_market_detail');

      this.btn_connect_data = "Logout";
      this.address = address.slice(0, 5) + "..." + address.slice(-4);
      this.connectLoading = false;


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
      if (this.$store.state.isLogin) {
        this.$store.state.isLogin = false;
        this.connectLoading = false;
        this.address = "";
        this.btn_connect_data = "Connect to a Wallet";
      } else {
        await this.walletCreated();
      }
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
.wallet-select {
  /*width: 306px;*/
  text-align: center;
}


</style>
