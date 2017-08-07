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
    },
    getSelectedSize(state) {
        return state.product.sizes.find(size => {
            return size.selected
        }) || {}
    }
}