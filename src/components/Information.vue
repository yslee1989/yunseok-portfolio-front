<template>
    <div>
        <profile :imageSource="image"/>
        <div>나에 대한 정보</div>
        <div>
            <span>나이 </span>
            <span>{{myAge}}</span><br>
            <div>나라: {{country}}</div>
        </div>
    </div>
</template>

<script>
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component({
    components: {
        profile: require('./Profile').default
    }
})
export default class Information extends Vue {
    @Prop() myAge
    @Prop() image

    get country() {
        return this.$store.state.person.location?.country
    }
}
</script>

<style scoped lang="scss">

</style>