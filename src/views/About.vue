<template>
  <div class="about">
    <h1>이것은 윤석이의 About 페이지 입니다.</h1>
  </div>
</template>

<script>
import {Component, Vue} from "vue-property-decorator";

@Component
export default class About extends Vue {

}
</script>

<style scoped lang="scss">
.about {
  background-color: yellow;
}
</style>