<template>
  <template>{{ loadProductData($route.params.categoryName,$route.params.id) }}</template>
  <div class="container d-flex mt-3 justify-content-between">
    <div class="image">
      <img :src="productImage" />
    </div>
    <div class="product-details">
      <h3 class="product-name">{{ productName }}</h3>
      <p class="price">{{ productPrice }} $</p>
      <p class="description">{{ productDescription }}</p>
      <button class="btn add-to-cart-button" @click="data.addToCart(productId,category)">Add To Cart</button>
    </div>
  </div>
</template>

<script>
import {getDataStore} from '../store/index.js'
export default {
    name:'ProductDetils',
    data:()=>({
      productId:'',
      productName:'',
      productImage:'',
      productPrice:'',
      productDescription:'',
      category: '',
      data:getDataStore(),
    }),
    methods:{
      async loadProductData(categoryName,productId){
        let res=await fetch(`https://dummyjson.com/products/category/${categoryName}`);
        let data= await res.json();
        let productsArray=data.products;
        let product={};
        productsArray.forEach(element => {
          if(element.id==productId){
            product=element
          }
        });
        this.productId=product.id;
        this.productName=product.title;
        this.productPrice=product.price;
        this.productDescription=product.description;
        this.productImage=product.images[0];
        this.category=product.category
      }
    }
}
</script>

<style scoped lang="scss">
.image{
  flex: 0 0 49%;
  img{
    width: 100%;
    border-radius: 10px;
  }
}
.product-details{
  flex: 0 0 49%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.price{
  color: #000;
}
.add-to-cart-button{
  background-color: black;
  color: white;
}
@media (max-width:767px) {
  .container{
    flex-direction: column;
    div{
      flex: 0 0 100%;
    }
    .image{
      margin-bottom: 15px;
    }
  }
}
</style>