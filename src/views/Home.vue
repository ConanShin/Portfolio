<template>
    <div class="home">
        <div class="menu" @click="showApps">Apps</div>
        <div class="menu" @click="showProjects">Projects</div>
        <div class="menu">Background</div>
        <div class="container">
            <div class="apps">
                <face-recognition class="app hide"/>
                <light-candle class="app hide"/>
                <voldmort class="app hide"/>
                <way-knower class="app hide"/>
                <apart class="app hide"/>
                <customer-management class="app hide"/>
            </div>
            <div class="cv hide">
                <img src="@/assets/CV.png"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {Vue, Component, Watch} from 'vue-property-decorator'
    import FaceRecognition from '@/components/FaceRecognition'
    import LightCandle from '@/components/LightCandle'
    import Voldmort from '@/components/Voldmort'
    import WayKnower from '@/components/WayKnower'
    import Apart from '@/components/Apart'
    import CustomerManagement from '@/components/CustomerManagement'

    @Component({
        components: {FaceRecognition, LightCandle, Voldmort, WayKnower, Apart, CustomerManagement}
    })
    export default class Home extends Vue {
        stopEvent = false
        currentMenu = ''

        @Watch('currentMenu')
        scrollToCorrectPosition (menu) {
            console.log(menu)
            switch (menu) {
                case '':
                case 'apps':
                    this.$el.querySelector('.container').scrollTo(0, 0)
                    this.$el.querySelector('.container').style['overflow-x'] = 'scroll'
                    break;
                case 'projects':
                    this.$el.querySelector('.container').scrollTo(0, 800)
                    this.$el.querySelector('.container').style['overflow-x'] = 'hidden'
            }
        }

        showApps() {
            this.stopEvent = true
            this.hideAll()
            if (this.currentMenu === 'apps') return this.currentMenu = ''

            this.currentMenu = 'apps'
            const apps = this.$el.querySelectorAll('.app')
            let index = 0

            const showEffect = () => setTimeout(() => {
                if (this.stopEvent) return
                apps[index].classList.remove('hide')
                apps[index++].classList.add('show')
                if (index === app.length) return
                showEffect()
            }, 500)
            this.stopEvent = false
            showEffect()
        }

        showProjects() {
            this.stopEvent = true
            this.hideAll()
            if (this.currentMenu === 'projects') return this.currentMenu = ''

            this.currentMenu = 'projects'
            const cv = this.$el.querySelector('.cv')
            setTimeout(() => {
                cv.classList.remove('hide')
                cv.classList.add('show')
            }, 500)
        }

        hideAll() {
            const apps = this.$el.querySelectorAll('.app')
            apps.forEach(app => {
                app.classList.remove('show')
                app.classList.add('hide')
            })

            const cv = this.$el.querySelector('.cv')
            cv.classList.remove('show')
            cv.classList.add('hide')
        }

        mounted() {
            const menus = this.$el.querySelectorAll('.menu')
            let index = menus.length
            const showEffect = () => setTimeout(() => {
                menus[--index].classList.add('show')
                if (index === 0) return
                showEffect()
            }, 500)

            showEffect()
        }
    }
</script>

<style scoped lang="scss">
    $container-padding-vertical: 100px;
    $container-padding-horizontal: 50px;

    @keyframes show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes hide {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    .show {
        animation-delay: 1s;
        animation: show 1s ease;
        animation-fill-mode: forwards;
    }

    .hide {
        animation: hide 1s ease;
        animation-fill-mode: forwards;
    }

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

        &.show:nth-child(1) {
            top: $container-padding-vertical + 10px;
        }

        &.show:nth-child(2) {
            top: $container-padding-vertical + 65px;
        }

        &.show:nth-child(3) {
            top: $container-padding-vertical + 120px;
        }
    }

    .container {
        height: 100%;
        width: 85%;
        overflow-y: hidden;
        &::-webkit-scrollbar {
            background: transparent;
        }
    }

    .apps {
        display: flex;
    }

    .app {
        $hidden-area: -800px;
        display: inline-block;
        margin-right: 50px;
        height: fit-content;
    }

    .cv {
        width: 90%;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        & > img {
            width: 100%;
        }

        &::-webkit-scrollbar {
            background: transparent;
        }
    }
</style>
