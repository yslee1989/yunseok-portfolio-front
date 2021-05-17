<template>
    <div class='projects'>
        <h1>Projects</h1>
        <table>
            <th>Projects</th>
            <th>Description</th>
            <tr v-for="(project, index) in person.projects" :key="index">
                <td>{{project.name}}</td>
                <td>{{project.desc}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component

export default class Project extends Vue {
    get person() {
        return this.$store.state.person
    }
}
</script>

<style scoped lang="scss">
h1 {
    text-align: left;
}
th {
    width: 30%;
    background-color: rgb(85, 85, 85);
}
table {
    background-color: black;
    padding: 10px;
}
.projects {
    display: flex;
    flex-direction: column;
    padding: 50px;
}
.description {
    white-space: pre-wrap;
}
</style>
