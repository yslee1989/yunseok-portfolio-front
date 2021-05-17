<template>
  <div class="about">
    <profile/>
    <navigation/>
    <div class="main">
      <introduction/>
      <project/>
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
        project: require('../components/Project').default
    }
})

export default class About extends Vue {

  async beforeMount() {
    await this.$store.dispatch('getPersonInfo')
  }
}
</script>

<style scoped lang="scss">
.main {
  background-color: rgb(56, 56, 56);
  color: white;
}
</style>