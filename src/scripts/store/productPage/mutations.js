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