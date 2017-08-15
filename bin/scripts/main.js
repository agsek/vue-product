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
            product: 'getProduct',
            selectedSize: 'getSelectedSize'
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
            store.commit(types.SELECT_SIZE, event.target.value)
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
export const SELECT_SIZE = 'productpage/selectSize'
export const INJECT_PRODUCTS = 'productpage/injectProducts'

// Category

// Cart

// Minicart?
export default {
    getModel: state => state.product.sku.split('-')[0],
    getSku: state => state.product.sku,
    getName: state => state.product.name,
    getCurrentPhoto: state => state.product.currentPhoto || 0,
    isUpdated: state => state.product.isUpdated,
    getPhotos: state => state.product.photos,
    getCategoryUrl: state => state.product.categoryUrl,
    getStandardPrice: state => state.product.standardPrice,
    getActualPrice: state => state.product.actualPrice,
    getDescription: state => state.product.description,
    getComingSoon: state => state.product.comingSoon,
    getSizes: state => state.product.sizes,
    hasDiscount: state => parseInt(state.product.actualPrice) !== parseInt(state.product.standardPrice),
    getProduct: state => state.product,
    getProducts: state => state.products,
    getSelectedSize: state => state.product.sizes.find(size => size.selected) || {}
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
    },
    [types.SELECT_SIZE](state, productId) {
        let size = state.product.sizes.find(size => {
            return size.id === parseInt(productId)
        })
        if (!size) {
            return false
        }
        size.selected = true
        console.log(size.id)
    },
    deselectSize(state) {
        state.product.sizes.find(size => {
            return size.selected
        }).selected = false
    }
}