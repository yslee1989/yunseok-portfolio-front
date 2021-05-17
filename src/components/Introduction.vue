<template>
    <div>
        <h1>Introduction</h1>
        <span class="description">{{person.intro}}</span>
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
    margin-bottom: 15px;
}
.description {
    white-space: pre-wrap;
}
</style>
