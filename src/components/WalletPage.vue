<template>
    <div class="wallet-select">
        <div class="pt-4 d-flex align-center justify-center">

            <v-btn @click='loginOut()'
                   color="primary"
                   elevation="2"
                   rounded>{{ btn_connect_data }}
            </v-btn>

            <span
                    v-if="this.$store.state.isLogin"
                    class="ml-2"
            >
                {{ formatAddress() }}
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
                    <img style="width: 30px" src="../assets/icons/right_ae_logo.png" alt="">
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
                    <img style="width: 130px" src="../assets/icons/right_super_hero.png" alt="">
                </div>

                <div class="card  rounded-lg d-flex align-center justify-center mt-3 pl-5 pr-5" style="height: 75px">
                    <img style="width: 130px" src="../assets/icons/right_super_github.png" alt="">
                </div>
            </div>

        </div>
        <div class="card  rounded-lg d-flex align-start mr-3 overflow-hidden" style=" position: relative">

            <img style="width: 80px; position: absolute;left: -10px;bottom: -10px"
                 src="../assets/icons/right_vegas_bg.png" alt="">

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
                 src="../assets/icons/right_ae_bg.png" alt="">

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


const gradients = [
    ['#ffffff', '#ffffff'],
];

export default {
    components: {},
    name: 'WalletPage',
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

            btn_connect_data: "Log out",
        }
    },
    mounted: function () {

    },
    methods: {
        formatAddress() {
            return this.$store.state.address.slice(0, 5) + "..." + this.$store.state.address.slice(-4);
        },
        loginOut() {
            this.$store.state.isLogin = false;
            this.connectLoading = false;
            this.address = "";
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
