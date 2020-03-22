<template>
    <div class="home">
        <div class="menu" @click="showApps">Apps</div>
        <div class="menu">Projects</div>
        <div class="menu">Background</div>
    </div>
</template>

<script>
    import { Vue, Component } from 'vue-property-decorator'

    @Component
    export default class Home extends Vue{
        showApps () {

        }
    }
</script>

<style scoped lang="scss">
    $container-padding-vertical: 100px;
    $container-padding-horizontal: 50px;

    .home {
        height: calc(100vh - #{$container-padding-vertical * 2});
        background-size: cover;
        background-image: url("../assets/rainny-boomerang.gif");
        padding: $container-padding-vertical $container-padding-horizontal;
    }

    .menu {
        font-weight: bold;
        text-align: right;
    }
</style>
