import { createStore } from 'vuex'


const store = createStore({
  state: {
    categoryId: 1,
    categoryName: 'AI(인공지능)',
    subcategoryId: 1,
    subcategoryName: '머신러닝, 딥러닝',
    classId: 1,
    className: '파이썬을 활용한 머신러닝'
  },
  mutations: {
    setCategoryId(state, categoryId){
      state.categoryId = categoryId
    },

    setCategoryName(state, categoryName){
      state.categoryName = categoryName
    },

    setCategory(state, payload){
      if (payload && payload.categoryId !== undefined && payload.categoryName !== undefined) {
        state.categoryId = payload.categoryId;
        state.categoryName = payload.categoryName;
      } else {
        console.log("Invalid payload for setCategory: ",payload);
      }
    },
    setsubCategoryId(state, subcategoryId){
      state.subcategoryId = subcategoryId
    },

    setsubCategoryName(state, subcategoryName){
      state.subcategoryName = subcategoryName
    },

    setsubCategory(state, payload){
      if (payload && payload.subcategoryId !== undefined && payload.subcategoryName !== undefined) {
        state.subcategoryId = payload.subcategoryId;
        state.subcategoryName = payload.subcategoryName;
      } else {
        console.log("Invalid payload for subCategory: ",payload);
      }
    },

    setclassId(state, classId){
      state.classId = classId
    },

    setclassName(state, className){
      state.className = className
    },

    setClass(state, payload){
      if (payload && payload.classId !== undefined && payload.className !== undefined) {
        state.classId = payload.classId;
        state.className = payload.className;
      } else {
        console.log("Invalid payload for setClass: ",payload);
      }
    },
  },
  actions: {
    updateCategoryId({commit}, categoryId){
      commit('setCategoryId', categoryId)
    },
    updateCategoryName({commit}, categoryName){
      commit('setCategoryName', categoryName)
    },
    setCategory({commit}, { payload }){
      commit('setCategory', payload)
    },

    updatesubCategoryId({commit}, subcategoryId){
      commit('setsubCategoryId', subcategoryId)
    },
    updatesubCategoryName({commit}, subcategoryName){
      commit('setsubCategoryName', subcategoryName)
    },
    setsubCategory({commit}, { payload }){
      commit('setsubCategory', payload)
    },
    
    updateClassId({commit}, classId){
      commit('setClassId', classId)
    },
    updateClassName({commit}, className){
      commit('setClassName', className)
    },
    setClass({commit}, { payload }){
      commit('setClass', payload)
    },

  },
  getters: {
    getCategoryId: state => state.categoryId,
    getCategoryName: state => state.categoryName,
    getCategoryData: state => {
      return {
        categoryId: state.categoryId,
        categoryName: state.categoryName
      };
    },
    getsubCategoryId: state => state.subcategoryId,
    getsubCategoryName: state => state.subcategoryName,
    getsubCategoryData: state => {
      return {
        subcategoryId: state.subcategoryId,
        subcategoryName: state.subcategoryName
      };
    },
    getClassId: state => state.classId,
    getClassName: state => state.className,
    getClassData: state => {
      return {
        classId: state.classId,
        className: state.className
      };
    },
  },
  plugins: [
    store => {
      // 애플리케이션이 로드될 때 로컬 스토리지에서 상태 복원
      const savedState = localStorage.getItem('store');
      if (savedState) {
        store.replaceState(Object.assign({}, store.state, JSON.parse(savedState)));
      }

      // Vuex 상태가 변경될 때마다 로컬 스토리지에 저장
      store.subscribe((mutation, state) => {
        localStorage.setItem('store', JSON.stringify(state));
      });
    }
  ]
});

export default store;