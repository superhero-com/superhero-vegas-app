<template>
    <div class="private">
        <Title is_back="true" title="Create Market"></Title>

        <div class="ml-4 mr-4">
            <div class="mt-4">The problem with forecasting</div>
            <v-textarea
                    outlined
                    name="input-7-4"
                    auto-grow
                    class="mt-4"
                    placeholder="Example: What will the weather be like in Beijing in 10 days?"
                    hide-details="auto"
            ></v-textarea>
        </div>

        <div class="ml-4 mr-4">
            <div class="mt-4">Predicted results (up to four)</div>
            <v-text-field
                    outlined
                    auto-grow
                    class="mt-4"
                    placeholder="It's sunny"
                    hide-details="auto"
            ></v-text-field>
            <v-text-field
                    outlined
                    auto-grow
                    class="mt-4"
                    placeholder="It's cloudy"
                    hide-details="auto"
            ></v-text-field>
            <v-text-field
                    outlined
                    auto-grow
                    class="mt-4"
                    placeholder="It rains"
                    hide-details="auto"
            ></v-text-field>
            <v-text-field
                    outlined
                    auto-grow
                    class="mt-4"
                    placeholder="Other"
                    hide-details="auto"
            ></v-text-field>
        </div>

        <div class="ml-4 mr-4">
            <div class="mt-4">Data Source</div>
            <v-text-field
                    outlined
                    auto-grow
                    class="mt-4"
                    placeholder="https://weather.com"
                    hide-details="auto"
            />
        </div>

        <div class="ml-4 mr-4">
            <div class="mt-4">Minimum Pledge Quantity（AE）</div>
            <v-text-field
                    outlined
                    auto-grow
                    class="mt-4"
                    placeholder="10"
                    label="Count"
                    hide-details="auto"
            />
        </div>
        <div class="ml-4 mr-4">
            <div class="mt-4">How long do you think you can bet on this game from now on（Hours）?</div>
            <v-text-field
                    outlined
                    auto-grow
                    class="mt-4"
                    label="240"
                    hide-details="auto"
            />
        </div>
        <div class="mt-6 mb-14 d-flex justify-center">
            <v-btn @click='goBlack()' color="primary" elevation="2" large rounded>Confirm Create</v-btn>
        </div>
    </div>
</template>

<script>
    import Title from "../components/Title";

    export default {
        name: 'CreateMarketPage',
        components: {Title},
        props: {
            msg: String
        },
        data() {
            return {
                value1: "",
                value2: "",
                dates: ['', ''],
            }
        },
        methods: {

            goBlack() {
                this.$router.back();
                // this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>

    .private {
        color: #FFFFFF;
    }

</style>
