<template>
    <div v-if="!imageDownloadComplete" class="loading-page">
        <img src="@/assets/loading-animation.gif"/>
        <div>
            Conan's Page Loading...
        </div>
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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: black;
        color: darkgray;

        & > img {
            width: 30%;
        }
        & > div {
            margin-top: 50px;
        }
    }
</style>
