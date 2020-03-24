<template>
    <div class="face-recognition box">
        <div class="title">Face Recognition</div>
        <img src="@/assets/face-recognition.gif"/>
        <p>얼굴정보를 인식 / 등록 / 관리할 수 있는 앱 </p>
        <p>AWS Rekognition을 사용한 node기반 백엔드 </p>
        <p>Swift기반 iOS 모바일 앱 </p>
    </div>
</template>

<script>
    import { Vue, Component } from 'vue-property-decorator'

    @Component
    export default class FaceRecognition extends Vue{
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
        height: 550px;
    }
</style>
