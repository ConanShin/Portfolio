<template>
    <div class="home">
    </div>
</template>

<script>
    import { Vue, Component } from 'vue-property-decorator'

    @Component
    export default class Home extends Vue{
    }
</script>

<style scoped lang="scss">
    .home {
        background-image: url("../assets/rainny-background.gif")
    }
</style>
