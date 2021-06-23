import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    person: {
      name: '',
      projects: []
    }
  },
  mutations: {
    setPerson: (state, payload) => state.person = payload
  },
  actions: {
    getPersonInfo: async injectee => {
      const response = await axios.get('http://localhost:3000/user/이윤석');
      /*
      {
        name: '이윤석',
        image: require('../assets/이윤석.jpg'),
        intro: '안녕하세요. 이윤석입니다. \nFullstack 개발자를 목표로 공부하고 있습니다.',
        projects: [{
          name: '[Front] LinkedIn - Dev Ver.',
          desc: '자세한 내용',
          framework: ['VueJS', 'Vanilla Script'],
          language: ['Javascript', 'Java', 'Python', 'Ruby'],
          layer: 'Front'
        }, {
          name: '[Front] LinkedIn2 - Dev Ver.',
          desc: '자세한 내용2',
          framework: ['NodeJS', 'NestJS'],
          language: ['Javascript', 'Java', 'Python', 'Ruby'],
          layer: 'Front'
        }, {
          name: '[Back] LinkedIn - Dev Ver.',
          desc: '자세한 내용3',
          framework: ['NodeJS', 'NestJS'],
          language: ['Javascript', 'Java', 'Python', 'Ruby'],
          layer: 'Back'
        }]
      }
      */
      const response2 = await axios.get('http://localhost:3000/user/이윤석/projects');

      if(response.status==200){
        response.data.image = require('../assets/이윤석.jpg')
        response.data.projects = [{
          name: '[Front] LinkedIn - Dev Ver.',
          desc: '자세한 내용',
          framework: ['VueJS', 'Vanilla Script'],
          language: ['Javascript', 'Java', 'Python', 'Ruby'],
          layer: 'Front'
        }]
        injectee.commit('setPerson', response.data)
      }else{
        console.log('통신 문제가 발생했습니다.')
      }
    },
    addProject: async (injectee, payload) => {
      const response = await axios.post('http://localhost:3000/user/이윤석/projects', payload);
    }
  },
  modules: {
  }
})
