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
      const response = await axios.get('https://randomuser.me/api/')
      console.log(response)
      injectee.commit('setPerson', response.data.results[0])
    }
  },
  modules: {
  }
})
