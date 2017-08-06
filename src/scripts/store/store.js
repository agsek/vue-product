import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const DEBUG = process.env.NODE_ENV !== 'production'
Vue.config.debug = DEBUG

export const store = new Vuex.Store({
    strict: DEBUG,
    state: {
        products: [
            {
                sku: 'SA419-03X',
                name: 'Bluzka z wiązaniem z boku',
                photos: [
                    'http://s0.reserved.com/media/catalog/product/S/A/SA419-03X-001.jpg',
                    'http://s0.reserved.com/media/catalog/product/S/A/SA419-03X-002.jpg',
                    'http://s0.reserved.com/media/catalog/product/S/A/SA419-03X-003.jpg'
                ],
                categoryUrl: '/t-shirts',
                standardPrice: '39,99',
                actualPrice: '24,99',
                description: 'wzrost modelki: 177cm',
                comingSoon: false,
                sizes: [
                    {
                        name: 'S',
                        id: 111,
                        stock: false
                    },
                    {
                        name: 'M',
                        id: 112,
                        stock: true
                    },
                    {
                        name: 'L',
                        id: 113,
                        stock: false
                    },
                    {
                        name: 'XL',
                        id: 114,
                        stock: true
                    }
                ]
            },
            {
                sku: 'SA419-00X',
                name: 'Bluzka z wiązaniem z boku',
                photos: [
                    'http://s0.reserved.com/media/catalog/product/S/A/SA419-00X-001.jpg',
                    'http://s0.reserved.com/media/catalog/product/S/A/SA419-00X-002.jpg',
                    'http://s0.reserved.com/media/catalog/product/S/A/SA419-00X-003.jpg'
                ],
                categoryUrl: '/blouses',
                standardPrice: '29,99',
                actualPrice: '19,99',
                description: 'wzrost modelki: 176cm',
                comingSoon: false,
                sizes: [
                    {
                        name: 'S',
                        id: 121,
                        stock: true
                    },
                    {
                        name: 'M',
                        id: 122,
                        stock: true
                    },
                    {
                        name: 'L',
                        id: 123,
                        stock: true
                    },
                    {
                        name: 'XL',
                        id: 124,
                        stock: true
                    }
                ]
            },
            {
                sku: 'SA419-59X',
                name: 'Bluzka z wiązaniem z boku',
                photos: [
                    'http://s0.reserved.com/media/catalog/product/S/A/SA419-59X-001.jpg',
                    'http://s0.reserved.com/media/catalog/product/S/A/SA419-59X-002.jpg',
                    'http://s0.reserved.com/media/catalog/product/S/A/SA419-59X-003.jpg',
                    'http://s0.reserved.com/media/catalog/product/S/A/SA419-59X-004.jpg'
                ],
                categoryUrl: '/t-shirts',
                standardPrice: '29,99',
                actualPrice: '29,99',
                description: 'wzrost modelki: 175cm',
                comingSoon: false,
                sizes: [
                    {
                        name: 'S',
                        id: 131,
                        stock: false
                    },
                    {
                        name: 'M',
                        id: 132,
                        stock: false
                    },
                    {
                        name: 'L',
                        id: 133,
                        stock: false
                    },
                    {
                        name: 'XL',
                        id: 134,
                        stock: false
                    }
                ]
            }
        ],
        product: {
            sku: 'SA419-03X',
            name: 'Bluzka z wiązaniem z boku',
            currentPhoto: 0,
            isUpdated: false,
            photos: [
                'http://s0.reserved.com/media/catalog/product/S/A/SA419-03X-001.jpg',
                'http://s0.reserved.com/media/catalog/product/S/A/SA419-03X-002.jpg',
                'http://s0.reserved.com/media/catalog/product/S/A/SA419-03X-003.jpg'
            ],
            categoryUrl: '/t-shirts',
            standardPrice: '39,99',
            actualPrice: '24,99',
            description: 'wzrost modelki: 177cm',
            comingSoon: false,
            sizes: [
                {
                    name: 'S',
                    id: 111,
                    stock: false,
                    selected: false
                },
                {
                    name: 'M',
                    id: 112,
                    stock: true,
                    selected: false
                },
                {
                    name: 'L',
                    id: 113,
                    stock: false,
                    selected: false
                },
                {
                    name: 'XL',
                    id: 114,
                    stock: true,
                    selected: false
                }
            ]
        },
    },
    getters,
    mutations
})