<template>
    <div class="navigation">
        <span class="ename">{{person.name}}</span>
        <span class="menu">Summary</span>
        <span class="menu">Project</span>
    </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component

export default class Navigation extends Vue {
    get person() {
        return this.$store.state.person
    }
}
</script>

<style scoped lang="scss">
.navigation {
    background-color: rgb(59, 59, 59);
    height: 60px;
    display: flex;
    align-items: center;
}
.ename {
    color: white;
    margin: 10px;
    padding: 5px;
}
.menu {
    color: darkgray;
    margin: 10px;
    padding: 5px;
}
</style>