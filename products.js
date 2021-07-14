/* global Vue, axios */
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      products: [],
      newProductName: null,
      newProductDescription: null,
      newProductPrice: null,
      newProductImageUrl: null
    };
  },
  methods: {
    getProducts: function () {
      console.log("i run when created");
      axios.get("http://localhost:3000/products").then(response => {
        this.products = response.data;
        // console.log(this.products);
      });
    },
    addProduct: function () {
      axios.post("http://localhost:3000/products", {
        name: this.newProductName,
        description: this.newProductDescription,
        price: this.newProductPrice,
        image_url: this.newProductImageUrl
      }).then(response => {
        console.log(response.data);
      });
      this.getProducts();
    },
    updateProduct: function () {
      //
    }
  },
  created: function () {
    this.getProducts();
  }
});
