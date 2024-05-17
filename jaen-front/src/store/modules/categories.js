export const categories = {
    namespaced: true,
    state: () => ({
        category_id: null,
        category_name: null,
        subcategory_id: null,
        subcategory_name: null,

    }),
    getters: {
        category_id: (state) => {
            return state.category_id
        },
        category_name: (state) => {
            return state.category_name
        },
        subcategory_id: (state) => {
            return state.subcategory_id
        },
        subcategory_name: (state) => {
            return state.subcategory_name
        },
    },
    mutations: {
        SET_DATA(state, data){
            state[data.key] = data.value
        },
    },
    actions: {
        setCategoryData: ({commit, state}, data) => {
            Object.keys(data).forEach((key) => {
                if (Object.keys(state).find((skey) => skey === key)) {
                    commit('SET_DATA', {key: key, value: data[key]})
                }
            })
        },
    },
}