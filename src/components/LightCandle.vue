<template>
    <div class="light-candle box">
        <div class="title">촛불을 들어라</div>
        <img src="@/assets/lightcandle.png"/>
        <p>촛불집회 참가인원 추산 </p>
        <p>핸드폰의 위치정보를 기반으로 한 웹앱</p>
    </div>
</template>

<script>
    import { Vue, Component } from 'vue-property-decorator'

    @Component
    export default class LightCandle extends Vue{
    }
</script>

<style scoped lang="scss">
    .box {
        width: 300px;
        height: auto;
        background: rgba(255, 255, 255, 0.5);
        white-space: nowrap;
        font-size: 15px;
    }

    img {
        width: 300px;
    }
    p {
        margin-top: 0;
    }
</style>
