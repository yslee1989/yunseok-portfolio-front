<template>
    <div>
        <h1>Introduction</h1>
        <span class="description">{{person.desc}}</span>
    </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component

export default class Introduction extends Vue {
    get person() {
        return this.$store.state.person
    }
}
</script>

<style scoped lang="scss">
h1 {
    margin: 0px;
    padding: 100px 0px 15px;
}
.description {
    white-space: pre-wrap;
}
</style>
