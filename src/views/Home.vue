<template>
    <div class="home">
        <div class="menu" @click="showApps">Apps</div>
        <div class="menu" @click="showProjects">Projects</div>
        <div class="menu">Background</div>
        <div class="apps">
            <face-recognition class="app up"/>
            <light-candle class="app up"/>
            <voldmort class="app up"/>
            <way-knower class="app up"/>
        </div>
        <div class="cv hide">
            <img src="@/assets/CV.png"/>
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
        stopEvent = false
        currentMenu = ''

        showApps() {
            this.stopEvent = true
            this.hideAll()
            if (this.currentMenu === 'apps') return this.currentMenu = ''

            this.currentMenu = 'apps'
            const apps = this.$el.querySelectorAll('.app')
            let index = 0

            const dropEffect = () => setTimeout(() => {
                if (this.stopEvent) return
                apps[index].classList.remove('up')
                apps[index++].classList.add('drop')
                if (index === app.length) return
                dropEffect()
            }, 500)
            this.stopEvent = false
            dropEffect()
        }

        showProjects() {
            this.stopEvent = true
            this.hideAll()
            if (this.currentMenu === 'projects') return this.currentMenu = ''

            this.currentMenu = 'projects'
            this.stopEvent = false
            if(this.stopEvent) return
            const cv = this.$el.querySelector('.cv')
            cv.classList.remove('hide')
            cv.classList.add('show')
        }

        hideAll() {
            const apps = this.$el.querySelectorAll('.app')
            apps.forEach(app => {
                app.classList.remove('drop')
                app.classList.add('up')
            })

            const cv = this.$el.querySelector('.cv')
            cv.classList.remove('show')
            cv.classList.add('hide')
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
        top: $hidden-area;

        @keyframes drop {
            from {
                top: $hidden-area
            }
            to {
                top: $container-padding-vertical + 10px
            }
        }
        @keyframes up {
            from {
                top: $container-padding-vertical + 10px
            }
            to {
                top: $hidden-area
            }
        }

        &.drop {
            animation-delay: 1s;
            animation: drop 1s ease;
            animation-fill-mode: forwards;
        }

        &.up {
            animation: up 1s ease;
            animation-fill-mode: forwards;
        }

        &:nth-child(2) {
            left: 400px;
        }

        &:nth-child(3) {
            left: 750px;
        }

        &:nth-child(4) {
            left: 1100px;
        }
    }

    .cv {
        width: 90%;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        & > img {
            width: 100%;
        }

        @keyframes fadeOut {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        &.hide {
            animation: fadeOut 1s ease;
            animation-fill-mode: forwards;
        }
        &.show {
            animation-delay: 1s;
            animation: fadeIn 1s ease;
            animation-fill-mode: forwards;
        }
    }
</style>
