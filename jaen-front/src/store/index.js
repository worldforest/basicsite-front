import { createStore } from 'vuex';
// import { categories } from '@/store/modules/categories'

export default createStore({
  state: {
    categoryId: null
  },
  mutations: {
    setCategoryId(state, categoryId) {
      state.categoryId = categoryId;
    }
  },
  actions: {
    updateCategoryId({ commit }, categoryId) {
      commit('setCategoryId', categoryId);
    }
  },
  getters: {
    getCategoryId: (state) => state.categoryId
  }
});