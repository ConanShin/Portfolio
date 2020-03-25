<template>
    <div class="apart box">
        <div class="title">아파트 커뮤니티</div>
        <img src="@/assets/apartment.gif"/>
        <p>아파트 입주민들의 커뮤니티 </p>
        <p>공공API를 활용하여 매매거래 실시간확인 </p>
    </div>
</template>

<script>
    import { Vue, Component } from 'vue-property-decorator'

    @Component
    export default class Apart extends Vue {
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
