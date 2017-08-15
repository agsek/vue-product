import { expect } from 'chai'
import getters from 'src/scripts/store/productPage/getters'
import store from 'src/scripts/store/productPage'

describe('product page store', () => {
    describe('getters', () => {
        const emptyState = store.state
        const state = {
            product: {
                sku: 'ABC123-X12',
                name: 'Bluzka z wiązaniem z boku',
                currentPhoto: 2,
                isUpdated: true,
                photos: ['urlToPhoto'],
                categoryUrl: 'urlToCategory',
                standardPrice: '19,90',
                actualPrice: '9,90',
                description: '100% bawełny',
                comingSoon: false,
                sizes: [
                    {
                        name: 'S',
                        stock: true
                    }
                ]
            }
        }
        describe('getModel', () => {
            it('should return null if state is empty', () => {
                const result = getters.getModel(emptyState);
                expect(result).equal(null)
            })

            it('should return model extracted from sku', () => {
                const result = getters.getModel(state);
                expect(result).equal('ABC123')
            })
        })
        describe('getSku', () => {
            it('should return null if state is empty', () => {
                const result = getters.getSku(emptyState);
                expect(result).equal(null)
            })

            it('should return sku', () => {
                const result = getters.getSku(state);
                expect(result).equal('ABC123-X12')
            })
        })
        describe('getName', () => {
            it('should return an empty string if state is empty', () => {
                const result = getters.getName(emptyState);
                expect(result).equal('')
            })

            it('should return name', () => {
                const result = getters.getName(state);
                expect(result).equal('Bluzka z wiązaniem z boku')
            })
        })
        describe('getCurrentPhoto', () => {
            it('should return 0 if state is empty', () => {
                const result = getters.getCurrentPhoto(emptyState);
                expect(result).equal(0)
            })

            it('should return current choosen photo', () => {
                const result = getters.getCurrentPhoto(state);
                expect(result).equal(2)
            })
        })
        describe('isUpdated', () => {
            it('should return false if state is empty', () => {
                const result = getters.isUpdated(emptyState);
                expect(result).equal(false)
            })

            it('should return true for updated product', () => {
                const result = getters.isUpdated(state);
                expect(result).equal(true)
            })
        })
    })
})