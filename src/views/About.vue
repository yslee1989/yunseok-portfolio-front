<template>
  <div class="about">
    <profile/>
    <navigation/>
    <div class="main">
      <introduction/>
      <h1>이것은 {{name}}의 About 페이지 입니다.</h1>
      <button @click="changeName">이름바꾸기</button><br>
      <button @click="age++">+</button><br>
      <button @click="readPerson">사용자정보 읽기</button><br>
      <button @click="countryIsKorea">국적 = 한국</button>
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
        introduction: require('../components/Introduction').default
    }
})

export default class About extends Vue {
  name = '이윤석'
  age = 33
  imageSource = require('../assets/이윤석2.jpg')

  changeName() {
    this.name = '신철민'
  }

  async readPerson() {
    await this.$store.dispatch('getPersonInfo')
  }

  async countryIsKorea() {
    this.$store.state.person.location.country = 'Korea'
    console.log(this.$store.state)
  }
}
</script>

<style scoped lang="scss">
.main {
  background-color: rgb(56, 56, 56);
}
</style>