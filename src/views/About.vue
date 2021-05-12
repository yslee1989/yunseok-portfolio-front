<template>
  <div class="about">
    <h1>이것은 {{name}}의 About 페이지 입니다.</h1>
    <button @click="changeName">이름바꾸기</button><br>
    <button @click="age++">+</button><br>
    <button @click="readPerson">사용자정보 읽기</button><br>
    <button @click="countryIsKorea">국적 = 한국</button>
    <information :myAge="age" :image="imageSource"/>
  </div>
</template>

<script>
import {Component, Vue} from "vue-property-decorator";
import axios from 'axios';

@Component({
  components: {
    information: require('../components/Information').default
  }
})
export default class About extends Vue {
  name = '이윤석'
  age = 33
  imageSource = require('../assets/이윤석2.jpg')
  //imageSource = 'https://pbs.twimg.com/media/DB65jvKUAAA-Qpn?format=jpg&name=medium'

  changeName() {
    this.name = '신철민'
  }

  // async beforeMount() {
  //   await this.$store.dispatch('getPersonInfo')
    
  // }

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
.about {
  background-color: yellow;
}
</style>