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