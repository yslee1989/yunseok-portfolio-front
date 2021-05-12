<template>
    <div>
        <div>내사진</div>
        <img :src="imageSource" alt="내얼굴"/>
    </div>
</template>

<script>
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class Profile extends Vue {
    @Prop() imageSource
}
</script>

<style scoped lang="scss">

</style>