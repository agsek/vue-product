new Vue({
    el: '#app',
    delimiters: ['${', '}'],
    data: {
        data: JSON.parse('[{"SA419-03X":{"photos":["http://s0.reserved.com/media/catalog/product/S/A/SA419-03X-001.jpg","http://s0.reserved.com/media/catalog/product/S/A/SA419-03X-002.jpg","http://s0.reserved.com/media/catalog/product/S/A/SA419-03X-003.jpg"],"categoryUrl":"/t-shirts","price":"39,99","newPrice":"24,99","description":"wzrost modelki: 177cm","comingSoon":false,"sizes":[{"name":"S","stock":0},{"name":"M","stock":10},{"name":"L","stock":0},{"name":"XL","stock":10}]},"SA419-00X":{"photos":["http://s0.reserved.com/media/catalog/product/S/A/SA419-00X-001.jpg","http://s0.reserved.com/media/catalog/product/S/A/SA419-00X-002.jpg","http://s0.reserved.com/media/catalog/product/S/A/SA419-00X-003.jpg"],"categoryUrl":"/blouses","price":"29,99","newPrice":"19,99","description":"wzrost modelki: 176cm","comingSoon":false,"sizes":[{"name":"S","stock":10},{"name":"M","stock":10},{"name":"L","stock":10},{"name":"XL","stock":10}]},"SA419-59X":{"photos":["http://s0.reserved.com/media/catalog/product/S/A/SA419-59X-001.jpg","http://s0.reserved.com/media/catalog/product/S/A/SA419-59X-002.jpg","http://s0.reserved.com/media/catalog/product/S/A/SA419-59X-003.jpg","http://s0.reserved.com/media/catalog/product/S/A/SA419-59X-004.jpg"],"categoryUrl":"/t-shirts","price":"29,99","newPrice":null,"description":"wzrost modelki: 175cm","comingSoon":false,"sizes":[{"name":"S","stock":0},{"name":"M","stock":0},{"name":"L","stock":0},{"name":"XL","stock":0}]}}]'),
        model: document.getElementById('colors').dataset.model,
        productName: document.getElementById('productName').innerText,
        sku: document.getElementById('productSku').innerText,
        currentPhoto: 0,
        updated: false
    },
    computed: {
        photos: function () {
            return this.data[0][this.sku].photos
        },
        categoryUrl: function () {
            return this.data[0][this.sku].categoryUrl
        },
        price: function () {
            return this.data[0][this.sku].price
        },
        newPrice: function () {
            return this.data[0][this.sku].newPrice
        },
        description: function () {
            return this.data[0][this.sku].description
        },
        comingSoon: function () {
            return this.data[0][this.sku].comingSoon
        },
        sizes: function () {
            return this.data[0][this.sku].sizes
        }
    },
    methods: {
        updateProductInfo: function (event) {
            this.updated = true;
            this.sku = this.model + '-' + event.target.id;
            this.currentPhoto = 0;
        },
        prevPhoto: function () {
            if (this.currentPhoto > 0) {
                this.currentPhoto--;
            } else {
                this.currentPhoto = this.photos.length - 1;
            }

            this.selectSliderControl();
        },
        nextPhoto: function () {
            if (this.currentPhoto < this.photos.length - 1) {
                this.currentPhoto++;
            } else {
                this.currentPhoto = 0;
            }

            this.selectSliderControl();
        },
        selectPhoto: function (event) {
            this.currentPhoto = event.target.value;
        },
        selectSliderControl: function () {
            document.getElementById('sliderControls')
                .querySelector('[value="' + this.currentPhoto + '"]')
                .checked = 'checked';
        }
    }
});