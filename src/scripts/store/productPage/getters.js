export default {
    getModel: state => state.product.sku ? state.product.sku.split('-')[0] : null,
    getSku: state => state.product.sku || null,
    getName: state => state.product.name || '',
    getCurrentPhoto: state => state.product.currentPhoto || 0,
    isUpdated: state => state.product.isUpdated || false,
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