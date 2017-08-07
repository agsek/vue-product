import Vue from 'vue'
import store from './store/productPage'
import { mapGetters } from 'vuex'
import * as types from './store/types'
//import '../styles/main.scss'

new Vue({
    el: '#app',
    store,
    delimiters: ['${', '}'],
    created() {
        let products = JSON.parse(document.getElementById('app').dataset.products),
            product = products.find(product => {
                return product.isActive
            })
        this.$store.commit(types.INJECT_PRODUCTS, products)
        this.$store.commit(types.UPDATE_PRODUCT, product.sku)
    },
    computed: {
        selectedSize() {
            return this.sizes.find(size => {
                return size.selected
            }) || {}
        },
        ...mapGetters({
            model: 'getModel',
            sku: 'getSku',
            productName: 'getName',
            currentPhoto: 'getCurrentPhoto',
            updated: 'isUpdated',
            photos: 'getPhotos',
            categoryUrl: 'getCategoryUrl',
            standardPrice: 'getStandardPrice',
            actualPrice: 'getActualPrice',
            description: 'getDescription',
            comingSoon: 'getComingSoon',
            sizes: 'getSizes',
            hasDiscount: 'hasDiscount',
            product: 'getProduct'
        })
    },
    methods: {
        updateProductInfo(event) {
            store.commit(types.UPDATE_PRODUCT, this.model + '-' + event.target.id);
        },
        selectPhoto(event) {
            store.commit(types.SELECT_PHOTO, event.target.value);
        },
        selectSize(event) {
            store.commit('selectSize', event)
        }
    }
});
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
// Product Page
export const UPDATE_PRODUCT = 'productpage/update'
export const SELECT_PHOTO = 'productpage/selectPhoto'
export const INJECT_PRODUCTS = 'productpage/injectProducts'

// Category

// Cart

// Minicart?
export default {
    getModel(state) {
        return state.product.sku.split('-')[0]
    },
    getSku(state) {
        return state.product.sku
    },
    getName(state) {
        return state.product.name
    },
    getCurrentPhoto(state) {
        return state.product.currentPhoto || 0
    },
    isUpdated(state) {
        return state.product.isUpdated
    },
    getPhotos(state) {
        return state.product.photos
    },
    getCategoryUrl(state) {
        return state.product.categoryUrl
    },
    getStandardPrice(state) {
        return state.product.standardPrice
    },
    getActualPrice(state) {
        return state.product.actualPrice
    },
    getDescription(state) {
        return state.product.description
    },
    getComingSoon(state) {
        return state.product.comingSoon
    },
    getSizes(state) {
        return state.product.sizes
    },
    hasDiscount(state) {
        return parseInt(state.product.actualPrice) !== parseInt(state.product.standardPrice)
    },
    getProduct(state) {
        return state.product
    },
    getProducts(state) {
        return state.products
    }
}
import * as types from '../types'

export default {
    [types.UPDATE_PRODUCT](state, sku) {
        const newProduct = state.products.find(product => {
            return product.sku === sku
        })

        state.product = {
            sku: newProduct.sku,
            name: newProduct.name,
            currentPhoto: 0,
            isUpdated: true,
            photos: newProduct.photos,
            categoryUrl: newProduct.categoryUrl,
            standardPrice: newProduct.standardPrice,
            actualPrice: newProduct.actualPrice,
            description: newProduct.description,
            comingSoon: newProduct.comingSoon,
            sizes: newProduct.sizes
        }
    },
    [types.SELECT_PHOTO](state, photoIndex) {
        state.product.currentPhoto = photoIndex
    },
    [types.INJECT_PRODUCTS](state, products) {
        state.products = products
    }
}