<template>
    <div class="home">
        <div class="menu" @click="showApps">Apps</div>
        <div class="menu">Projects</div>
        <div class="menu">Background</div>
        <div>
            <face-recognition class="app"/>
            <light-candle class="app"/>
            <voldmort class="app"/>
            <way-knower class="app"/>
        </div>
    </div>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    import FaceRecognition from '@/components/FaceRecognition'
    import LightCandle from '@/components/LightCandle'
    import Voldmort from '@/components/Voldmort'
    import WayKnower from '@/components/WayKnower'

    @Component({
        components: {FaceRecognition, LightCandle, Voldmort, WayKnower}
    })
    export default class Home extends Vue {
        showApps() {
            const apps = this.$el.querySelectorAll('.app')
            let index = 0

            const dropEffect = () => setTimeout(() => {
                apps[index++].classList.add('drop')
                if (index === app.length) return
                dropEffect()
            }, 500)

            dropEffect()
        }

        mounted() {
            const menus = this.$el.querySelectorAll('.menu')
            let index = menus.length
            const dropEffect = () => setTimeout(() => {
                menus[--index].classList.add('drop')
                if (index === 0) return
                dropEffect()
            }, 500)

            dropEffect()
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
        display: inline-block;
        position: absolute;
        top: -100px;
        right: $container-padding-horizontal;

        font-size: 20px;
        font-weight: bold;
        text-align: right;
        cursor: pointer;

        transition: top 0.3s ease;

        &.drop:nth-child(1) {
            top: $container-padding-vertical + 10px;
        }

        &.drop:nth-child(2) {
            top: $container-padding-vertical + 65px;
        }

        &.drop:nth-child(3) {
            top: $container-padding-vertical + 120px;
        }
    }

    .app {
        $hidden-area: -800px;
        position: absolute;
        transition: top 0.3s ease;
        top: $hidden-area;

        &:nth-child(1) {
            &.drop {
                top: $container-padding-vertical + 10px;
            }
        }

        &:nth-child(2) {
            left: 400px;

            &.drop {
                top: $container-padding-vertical + 10px;
            }
        }

        &:nth-child(3) {
            left: 750px;

            &.drop {
                top: $container-padding-vertical + 10px;
            }
        }

        &:nth-child(4) {
            left: 1100px;

            &.drop {
                top: $container-padding-vertical + 10px;
            }
        }
    }
</style>
