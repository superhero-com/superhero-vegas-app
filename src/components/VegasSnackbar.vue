<template>
    <v-snackbar
            v-model="snackbar"
    >
        {{ snackbarMsg }}

        <template v-slot:action="{ attrs }">
            <v-btn
                    color="pink"
                    text
                    v-bind="attrs"
                    @click.native.prevent="snackbar = false"
            >
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>
<script>
export default {
    name: 'VegasSnackbar',
    props: {
        snackbar: {},
        snackbarMsg: {}
    },

}
</script>
