/* global Vue, axios */
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      products: [],
    };
  },
  created: function () {
    console.log("i run when created");
    axios.get("http://localhost:3000/products").then(response => {
      this.products = response.data;
      // console.log(this.products);
    });
  }
});
