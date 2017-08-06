export default {
    update(state, sku) {
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
            sizes: newProduct.sizes,
            hasDiscount: newProduct.hasDiscount
        }
    },
    selectPhoto(state, photoIndex) {
        state.product.currentPhoto = photoIndex
    }
}