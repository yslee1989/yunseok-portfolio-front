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
        image: require('../assets/이윤석.jpg')
      }
      injectee.state.person = response
    }
  },
  modules: {
  }
})
