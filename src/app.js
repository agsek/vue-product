new Vue({
    el: '#app',
    data: {
        data: JSON.parse('[{"sku":"SA419-03X","photos":["http://s0.reserved.com/media/catalog/product/S/A/SA419-03X-001.jpg","http://s0.reserved.com/media/catalog/product/S/A/SA419-03X-002.jpg","http://s0.reserved.com/media/catalog/product/S/A/SA419-03X-003.jpg"],"categoryUrl":"/t-shirts","price":"39,99","actualPrice":"24,99","description":"wzrost modelki: 177cm","comingSoon":false,"color":{"name":"Różowy","cssName":"pink","image":"http://s0.reserved.com/media/catalog/product/S/A/SA419-03X-999.jpg"},"sizes":[{"name":"S","stock":10},{"name":"M","stock":10},{"name":"L","stock":0},{"name":"XL","stock":10}]},{"sku":"SA419-00X","photos":["http://s0.reserved.com/media/catalog/product/S/A/SA419-00X-001.jpg","http://s0.reserved.com/media/catalog/product/S/A/SA419-00X-002.jpg","http://s0.reserved.com/media/catalog/product/S/A/SA419-00X-003.jpg"],"categoryUrl":"/blouses","price":"29,99","actualPrice":"19,99","description":"wzrost modelki: 177cm","comingSoon":false,"color":{"name":"Biały","cssName":"white","image":"http://s0.reserved.com/media/catalog/product/S/A/SA419-00X-999.jpg"},"sizes":[{"name":"S","stock":10},{"name":"M","stock":10},{"name":"L","stock":10},{"name":"XL","stock":10}]},{"sku":"SA419-59X","photos":["http://s0.reserved.com/media/catalog/product/S/A/SA419-59X-001.jpg","http://s0.reserved.com/media/catalog/product/S/A/SA419-59X-002.jpg","http://s0.reserved.com/media/catalog/product/S/A/SA419-59X-003.jpg","http://s0.reserved.com/media/catalog/product/S/A/SA419-59X-004.jpg"],"categoryUrl":"/t-shirts","price":"29,99","actualPrice":"19,99","description":"wzrost modelki: 177cm","comingSoon":false,"color":{"name":"Granatowy","cssName":"navy","image":"http://s0.reserved.com/media/catalog/product/S/A/SA419-59X-999.jpg"},"sizes":[{"name":"S","stock":0},{"name":"M","stock":0},{"name":"L","stock":0},{"name":"XL","stock":0}]}]'),
        model: document.getElementById('colors').dataset.model,
        productName: 'Bluzka z wiązaniem z boku',
        sku: 'SA419-03X',
        photos: [
            'http://s2.reserved.com/media/catalog/product/cache/image/1280/9df78eab33525d08d6e5fb8d27136e95/S/A/SA419-03X-001.jpg',
            'http://s2.reserved.com/media/catalog/product/cache/image/1280/9df78eab33525d08d6e5fb8d27136e95/S/A/SA419-03X-002.jpg',
            'http://s2.reserved.com/media/catalog/product/cache/image/1280/9df78eab33525d08d6e5fb8d27136e95/S/A/SA419-03X-003.jpg'
        ],
        categoryUrl: '/t-shirts',
        price: '39,99',
        actualPrice: '24.99',
        description: 'wzrost modelki: 177cm',
        comingSoon: false,
        color: {
            name: 'Różowy',
            cssName: 'pink',
            image: ''
        },
        sizes: [
            {
                name: 'S',
                stock: 10
            },
            {
                name: 'M',
                stock: 10
            },
            {
                name: 'L',
                stock: 0
            },
            {
                name: 'XL',
                stock: 10
            }
        ]
    },
    methods: {
        updateProductInfo function (event) {
            this.sku = this.model + '-' + event.target.id;
        }
    }
})