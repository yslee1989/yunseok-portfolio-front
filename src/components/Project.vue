<template>
    <div class='projects'>
        <h1>Projects</h1>
        <table>
            <th>Projects</th>
            <th>Description</th>
            <tr v-for="(project, index) in person.projects" :key="index">
                <td>
                    <div>{{project.name}}</div>
                    <div class='chip-block'>
                        <span class="chip">VueJS</span>
                        <span class="chip">Vanila Script</span>
                        </div>
                    <div class='chip-block'>
                        <span class="chip frame">Javascript</span>
                        <span class="chip frame">Python</span>
                        <span class="chip frame">Java</span>
                        <span class="chip frame">Ruby</span>
                    </div>
                </td>
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
    &:first-of-type {
    width: 20%;
}
    background-color: rgb(85, 85, 85);
}
th:nth-of-type(2) {
    width: 80%;
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
.chip-block {
    margin: 5px 0;
}
.chip {
    background-color: pink;
    color: black;
    margin: 0 3px;
    padding: 2px;
    border-radius: 5px;
    &.frame {
        background-color: skyblue;
    }
}
.description {
    white-space: pre-wrap;
}
</style>
