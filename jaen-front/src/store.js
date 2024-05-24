import Vuex from 'vuex'

// Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categoryName: 'AI(인공지능)',
    categoryId: 1,
    subcategoryName: '안녕',
    subcategoryId: 1,
    classId: 1,
    className: '파이썬을 활용한 머신러닝',
    category: []
  },
  mutations: {
    setCategory(state, payload){
      if (payload && payload.categoryId !== undefined && payload.categoryName !== undefined) {
        state.categoryId = payload.categoryId,
        state.categoryName = payload.categoryName
      } else {
          console.error('Invalid payload for setCategory:', payload);
          state.categoryId = null;
      }
    },
    subcategory(state, payload){
      state.subcategoryId = payload.subcategoryId,
      state.subcategoryName = payload.subcategoryName
    },
    jaenclass(state, payload){
      state.classId = payload.classId
    }
  },
  actions: {
    // setCategoryData({commit}, {payload}){
    //   category

    // },
    setCategory({commit}, { payload }){
      // mutations에 정의한 메소드 commit
      commit('setCategory', payload)
    },
    setSubcategory({commit}, { payload }){
      commit('subcategory', { subcategoryId: payload.subcategoryId, subcategoryName: payload.subcategoryName});
    },
    setJaenClass({commit}, { payload }){
      commit('jaenclass', { classId: payload.classId});
    }
  },
  getters: {
    getCategoryId: state => state.categoryId,
    getCategoryName: state => state.categoryName,
    getJaenClassId: state => state.classId,
    getSubcategoryData(state){
      return `subcategoryId : ${state.subcategoryId} subcategoryName: ${state.subcategoryName}`;
    },
    getJaenClassData(state){
      return `classId : ${state.classId} className: ${state.className}`;
    }
  }
});