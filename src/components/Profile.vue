<template>
    <div>
        <div v-if="person.name" class="face-image" :style="{backgroundImage: 'url(' + person.image + ')'}">
            <div class="name">개발자 <b>{{person.name}}</b> 입니다</div>
        </div>
    </div>
</template>

<script>
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class Profile extends Vue {
    get person() {
        return this.$store.state.person
    }
}
</script>

<style scoped lang="scss">
.face-image {
    width: 100%;
    height: 600px;
    background-position-y: center;
    background-position-x: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: gray;

    display: flex;
    align-items: center;
    //justify-content: center;

    .name {
        margin-left: 100px;
        font-size: 35px;
        color: white;
        text-shadow: 1px 3px 5px black;
    }
}


</style>