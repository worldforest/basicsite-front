import Vue from 'vue'
import Vuex from 'vuex'

import jaenHeader from '/components/layout/jaenHeader'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        book: BookStore
    }
})