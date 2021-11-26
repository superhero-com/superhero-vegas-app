<template>
    <div>
        <p class=".text-xl-h4 text-h5 mt-5"> Update Log.</p>
        <v-card class="card mt-5 mb-5 pb-5" rounded="lg">

            <v-treeview :items="items" open-all></v-treeview>
        </v-card>
    </div>


</template>
<script>
    export default {
        name: 'UpdatePage',
        props: {
            msg: String
        },
        data: () => ({
            items: [
                {
                    id: 1,
                    name: 'v0.0.1',
                    children: [
                        {id: 1, name: '1. Smart contract development'},
                        {id: 2, name: '2. Complete the aggregator contract'},
                        {id: 3, name: '3. Integrated superhero wallet'},
                        {id: 4, name: '4. Complete private forecasts etc'},

                    ],
                }
            ],
        }),

        methods: {},
    }
</script>

<style scoped>


</style>
