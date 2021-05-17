import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    person: {}
  },
  mutations: {
    setPerson: (state, payload) => state.person = payload
  },
  actions: {
    getPersonInfo: async injectee => {
      const response = {
        name: '이윤석',
        image: require('../assets/이윤석.jpg'),
        intro: '안녕하세요. 이윤석입니다. \nFullstack 개발자를 목표로 공부하고 있습니다',
        projects: [{
          name: 'Front 개발',
          desc: '자세한 내용'
        }, {
          name: 'Back 개발',
          desc: '자세한 내용2'
        }]
      }
      injectee.state.person = response
    }
  },
  modules: {
  }
})
