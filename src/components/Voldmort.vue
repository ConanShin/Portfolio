<template>
    <div class="voldmort box">
        <div class="title">볼드모트</div>
        <img src="@/assets/voldmort.gif"/>
        <p>신용카드 혜택을 누리기위한 실적 트래킹 </p>
        <p>신용카드 발급시 사은품 최대 딜러 매칭</p>
        <p>신용카드 유지기간 및 신규가능 알림</p>
    </div>
</template>

<script>
    import { Vue, Component } from 'vue-property-decorator'

    @Component
    export default class Voldmort extends Vue{
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
</style>
