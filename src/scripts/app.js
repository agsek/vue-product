import Vue from 'vue'
import { store } from './store/store'
import { mapGetters } from 'vuex'
//import '../styles/main.scss'

new Vue({
    el: '#app',
    store,
    delimiters: ['${', '}'],
    computed: mapGetters({
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
        hasDiscount: 'hasDiscount'
    }),
    methods: {
        updateProductInfo(event) {
            store.commit('update', this.model + '-' + event.target.id);
        },
        selectPhoto(event) {
            store.commit('selectPhoto', event.target.value);
        },
        selectSize(event) {
            store.commit('selectSize', event)
        }
    }
});