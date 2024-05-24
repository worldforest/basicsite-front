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
    selectedSategory(state, payload){
      state.categoryId = payload.categoryId,
      state.categoryName = payload.categoryName
    },
    subcategory(state, payload){
      state.subcategoryId = payload.subcategoryId,
      state.subcategoryName = payload.subcategoryName
    },
    jaenclass(state, payload){
      state.classId = payload.classId,
      state.className = payload.className
    }
  },
  actions: {
    // setCategoryData({commit}, {payload}){
    //   category

    // },
    setCategory({commit}, { payload }){
      // mutations에 정의한 메소드 commit
      commit('selectedSategory', { categoryId: payload.categoryId, categoryName: payload.categoryName});
    },
    setSubcategory({commit}, { payload }){
      commit('subcategory', { subcategoryId: payload.subcategoryId, subcategoryName: payload.subcategoryName});
    },
    setJaenClass({commit}, { payload }){
      commit('jaenclass', { classId: payload.classId, className: payload.className});
    }
  },
  getters: {
    getCategoryId: state => state.categoryId,
    getCategoryName: state => state.categoryName,
    // getCategoryData(state){
      // return `categoryId : ${state.categoryId} categoryName: ${state.categoryName}`;
      // return ({categoryId:`${state.categoryId}`},{categoryName:`${state.categoryName}`} );
      // state => state.
    // },
    getSubcategoryData(state){
      return `subcategoryId : ${state.subcategoryId} subcategoryName: ${state.subcategoryName}`;
    },
    getJaenClassData(state){
      return `classId : ${state.classId} className: ${state.className}`;
    }
  }
});