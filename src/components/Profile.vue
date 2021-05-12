<template>
    <div>
        <div class="face-image" :style="{backgroundImage: 'url(' + imageSource + ')'}"></div>
    </div>
</template>

<script>
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class Profile extends Vue {
    get imageSource() {
        return this.$store.state.person.image
    }
}
</script>

<style scoped lang="scss">
.face-image {
    width: 100%;
    height: 300px;
}
</style>