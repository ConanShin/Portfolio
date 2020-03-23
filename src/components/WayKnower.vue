<template>
    <div class="way-knower box">
        <div class="title">아저씨 이 길로 가 주세요</div>
        <img src="@/assets/WayKnower.png"/>
        <p>고객이 원하는 길로 택시를 안내 </p>
        <p>미취학아동과 노인을 대신 택시콜 </p>
    </div>
</template>

<script>
    import { Vue, Component } from 'vue-property-decorator'

    @Component
    export default class WayKnower extends Vue{
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
