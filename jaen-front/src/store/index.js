import Vue from 'vue';
import Vuex from 'vuex';

Vue.useAttrs(Vuex);

export default new Vuex.Store({
  state:{
    Users: [
      {id: 1, name: "라이언", address: "Seoul"},
      {id: 2, name: "어피치", address: "Seoul"},
      {id: 3, name: "네오", address: "Seoul"},
      {id: 4, name: "무지", address: "Seoul"},
    ]
  },
  mutations: {

  },
  actions:{

  },
  modules:{

  }
})