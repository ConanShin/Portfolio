<template>
    <div v-if="!imageDownloadComplete" class="loading-page">
        Loading...
    </div>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'

    @Component
    export default class LoadingPage extends Vue {
        get imageDownloadComplete () {
            return this.$store.getters.imageDownloadComplete
        }
    }
</script>

<style scoped lang="scss">
    .loading-page {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: white;
    }
</style>
