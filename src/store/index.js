import { defineStore } from "pinia";

export const getDataStore = defineStore("dataStore", {
  state: () => ({
    products: [],
    categories: [],
    categoryNames: [],
    cartItems: [],
    numberOfCartItems: 0,
  }),
  getters: {},
  mutations: {},
  actions: {
    async getData() {
      let categoriesRes = await fetch(
        "https://dummyjson.com/products/categories"
      );
      let categoriesData = await categoriesRes.json();
      this.categoryNames = categoriesData;
      for (let categoryName of categoriesData) {
        let res = await fetch(
          `https://dummyjson.com/products/category/${categoryName}`
        );
        let data = await res.json();
        this.categories.push(data.products);
      }
    },
    async addToCart(id, category) {
      let res = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );
      let data = await res.json();
      let productsArray = data.products;
      productsArray.forEach((element) => {
        if (element.id == id) {
          this.cartItems.push(element);
          this.numberOfCartItems++;
        }
      });
      console.log(this.cartItems, this.numberOfCartItems);
    },
  },
  modules: {},
});
