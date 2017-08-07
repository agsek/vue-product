import Vue from 'vue'
import Vuex from 'vuex'

import getters from './productPage/getters'
import mutations from './productPage/mutations'

Vue.use(Vuex)

const DEBUG = process.env.NODE_ENV !== 'production'
Vue.config.debug = DEBUG

export default new Vuex.Store({
    strict: DEBUG,
    state: {
        products: [],
        product: {}
    },
    getters,
    mutations
})