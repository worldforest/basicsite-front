// import Vue from 'vue'
// import Vuex from 'vuex'
// import { createStore } from 'vuex';

// Vue.use(Vuex)

// export default createStore({
  // state: {
  //   count: 0
  // },
  // mutations: {
  //   increment(state) {
  //     state.count++;
  //   }
  // },
  // actions: {
  //   incrementAsync({ commit }) {
  //     setTimeout(() => {
  //       commit('increment');
  //     }, 1000);
  //   }
  // },
  // getters: {
  //   doubleCount(state) {
  //     return state.count * 2;
  //   }
  // }

//   export default new Vuex.Store({
//   state: {
//     message: 'Hello'
//   },
//   mutations: {
//     changeMessage (state, newMsg) {
//       state.message = newMsg
//     }

//   },
//   actions: {
//     callMutation ({ commit }, { newMsg }) {
//       commit('changeMessage', newMsg)
//     }
//   },
//   getters: {
//     getMsg (state) {
//       return `${state.message} => Length : ${state.message.length}`
//     }
//   }
// });

// import Vue from 'vue'
import Vuex from 'vuex'

// Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'Hello'
  },
  mutations: {
    changeMessage (state, newMsg) {
      state.message = newMsg
    },
  },
  actions: {
    callMutation ({ commit }, { newMsg }) {
      commit('changeMessage', newMsg)
    }
  },
  getters: {
    getMsg (state) {
      return `${state.message} => Length : ${state.message.length}`
    }
  }
});