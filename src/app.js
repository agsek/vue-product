new Vue({
  el: '#app',
  data: {
    data: JSON.parse('[{"sku":"SA419-03X","name":"Bluzka z wiązaniem z boku","photo":[],"categoryUrl":"","price":"39,99","actualPrice":"24,99","description":"wzrost modelki: 177cm","comingSoon":false,"color":{"name":"Różowy","cssName":"pink","image":""},"sizes":[{"name":"S","stock":10},{"name":"M","stock":10},{"name":"L","stock":0},{"name":"XL","stock":10}]},{"sku":"SA419-00X","name":"Bluzka z wiązaniem z boku","photo":[],"categoryUrl":"","price":"29,99","actualPrice":"19,99","description":"wzrost modelki: 177cm","comingSoon":false,"color":{"name":"Biały","cssName":"white","image":""},"sizes":[{"name":"S","stock":10},{"name":"M","stock":10},{"name":"L","stock":10},{"name":"XL","stock":10}]},{"sku":"SA419-59X","name":"Bluzka z wiązaniem z boku","photo":[],"categoryUrl":"","price":"29,99","actualPrice":"19,99","description":"wzrost modelki: 177cm","comingSoon":false,"color":{"name":"Granatowy","cssName":"navy","image":""},"sizes":[{"name":"S","stock":0},{"name":"M","stock":0},{"name":"L","stock":0},{"name":"XL","stock":0}]}]'),
    model: document.getElementById('colors').dataset.model,
    sku: 'SA419-03X',
    photos: [],
    categoryUrl: null,
    price: null,
    actualPrice: null,
    description: null,
    comingSoon: null,
    color: {},
    sizes: []
  },
  methods: {
    updateProductInfo(event) {
        this.sku = this.model + '-' + event.target.id;
    }
  }
})