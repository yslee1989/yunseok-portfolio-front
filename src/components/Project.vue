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
                        <span class="chip frame">VueJS</span>
                        <span class="chip frame">Vanila Script</span>
                        </div>
                    <div class='chip-block'>
                        <span class="chip lang">Javascript</span>
                        <span class="chip lang">Python</span>
                        <span class="chip lang">Java</span>
                        <span class="chip lang">Ruby</span>
                    </div>
                </td>
                <td>{{project.desc}}</td>
            </tr>
        </table>
        <button style='width:100px' @click='showPopup'>프로젝트 추가</button>
        <div class='modal-popup' v-if='isPopupVisible'>
            <h2>프로젝트 추가</h2>
            <div>
                <b>프로젝트 이름</b>
                <div>
                    <input v-model='projectName'/>
                </div>
            </div>
            <div id='framework'>
                <b>Framework </b>
                <div>
                    <multiselect
                        v-model = "selectedFrameworkOptions"
                        label = "key"
                        track-by = "value"
                        :options = "frameworkOptions"
                        :multiple = "true"
                        :close-on-select = "false"
                    >
                    </multiselect>
                </div>
            </div>
            <div id='language'>
                <b>Language </b>
                <div>
                    <multiselect
                        v-model = "selectedLanguageOptions"
                        label = "key"
                        track-by = "value"
                        :options = "languageOptions"
                        :multiple = "true"
                        :close-on-select = "false"
                    >
                    </multiselect>
                </div>
            </div>
            <div>
                <b>프로젝트 설명 </b>
                <div>
                    <textarea v-model='projectDesc'/>
                </div>
            </div>
            <div style='margin-top: 20px'>
                <button @click='addProject'>추가</button>
                <button @click='closePopup'>닫기</button>
            </div>
        </div>
    </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import Multiselect from 'vue-multiselect'

@Component({
    components: {Multiselect}
})
export default class Project extends Vue {
    isPopupVisible = false;
    projectName = '';
    projectDesc = '';
    projectFramework = '';
    projectLanguage = '';
    frameworkOptions = [
        {key: 'C++', value: '1'},
        {key: 'C#', value: '2'},
        {key: 'JAVA', value: '3'},
    ]
    selectedFrameworkOptions = []
    languageOptions = [
        {key: 'C++', value: '1'},
        {key: 'C#', value: '2'},
        {key: 'JAVA', value: '3'},
    ]
    selectedLanguageOptions = []

    get person() {
        return this.$store.state.person
    }

    addProject() {
        return this.$store.dispatch('addProject', { name: this.projectName, desc: this.projectDesc, framework: this.projectFramework, language: this.projectLanguage });
    }

    showPopup() {
        this.isPopupVisible = true;
    }

    closePopup() {
        this.isPopupVisible = false;
    }

    addFramworkInput() {
        
    }

    addLanguageInput() {

    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
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
    &.frame {
        background-color: pink;
    }
    &.lang {
        background-color: skyblue;
    }
    color: black;
    margin: 0 3px;
    padding: 2px;
    border-radius: 5px;
}
.description {
    white-space: pre-wrap;
}
.modal-popup {
    position: fixed;
    top: 20%;
    left: 25%;
    width: 500px;
    height: 400px;
    padding: 30px;
    & > *:nth-child(n + 2) {
        margin-left: 20px;
    }
    div {
        margin-top: 5px;
    }
    
    background-color: white;
    color: black;
    text-align: left;

    input {
        width: 100%
    }
    textarea {
        width: 100%
    }
}
</style>
