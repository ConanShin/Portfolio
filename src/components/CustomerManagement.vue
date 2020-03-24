<template>
    <div class="customer-management box">
        <div class="title">고객관리 시스템</div>
        <img src="@/assets/customer-management.gif"/>
        <p>부모님 사업을 위한 고객관리 시스템 </p>
    </div>
</template>

<script>
    import { Vue, Component } from 'vue-property-decorator'

    @Component
    export default class CustomerManagement extends Vue{
    }
</script>

<style scoped lang="scss">
    .box {
        width: 300px;
        background: rgba(255, 255, 255, 0.5);
        white-space: nowrap;
        font-size: 15px;
    }

    img {
        width: 300px;
    }
</style>
