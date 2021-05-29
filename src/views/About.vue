<template>
  <div class="about">
    <profile/>
    <navigation/>
    <div class="main">
      <introduction/>
      <project/>
      <div class="charts">
        <piechart/>
        <piechart/>
        <piechart/>
        <piechart/>
      </div>
    </div>
  </div>
</template>

<script>
import {Component, Vue} from "vue-property-decorator";
import axios from 'axios';

@Component({
    components: {
        profile: require('../components/Profile').default,
        navigation: require('../components/Navigation').default,
        introduction: require('../components/Introduction').default,
        project: require('../components/Project').default,
        piechart: require('../components/Piechart').default
    }
})

export default class About extends Vue {
  piechartData = {}

  async beforeMount() {
    await this.$store.dispatch('getPersonInfo')
  }

  mounted () {
    this.piechartData = this.chartData()
  }

  chartData() {
    const result = {}
    console.log('data function called');
    this.$store.state.person.projects.forEach(project => {
      if (!result[project.layer])
        result[project.layer] = {}
      project.language.forEach(language => {
        if (!result[project.layer][language]) result[project.layer][language] = 0
        result[project.layer][language]++
      })
    })
    console.log(result)
    return result
  }
}
</script>

<style scoped lang="scss">
.main {
  background-color: rgb(80, 80, 80);
  color: white;
}
</style>