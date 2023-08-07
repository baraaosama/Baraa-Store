<template>
  <div class="container mt-3">
    <template>{{ loadCategoryData($route.params.categoryName) }}</template>
    <h3>{{ $route.params.categoryName }}</h3>
    <ul class="list-unstyled p-2 categories ">
      <li class="category" v-for="product in products" :key="product.id">
        <router-link :to="'/categories/'+$route.params.categoryName+'/'+product.id">
          <div><img :src="product.thumbnail" /></div>
          <div class="details">
            <h4>{{ product.title }}</h4>
            <div class="price">{{ product.price }} $</div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'ListingPage',
    data:()=>({
      products:[],
    }),
    methods:{
      async loadCategoryData(categoryName){
        let res=await fetch(`https://dummyjson.com/products/category/${categoryName}`);
        let data= await res.json();
        this.products=data.products;
      }
    }
}
</script>

<style lang="scss" scoped>
.categories{
  gap: 10px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
    .category{
    border: 1px solid black;
    border-radius: 7px;
    padding: 5px;
    text-align: left;
    a{
      text-decoration: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
    img{
      width: 100%;
      max-width: 100%;
      border-radius: 7px;
    }
    h4{
      margin: 10px 0;
      color: black;
    }
    div{
      color: #000;
    }
  }
}
@media (max-width:885px){
  .categories{
    grid-template-columns: 33% 33% 33%;
  }
}
@media (max-width:550px){
  .categories{
    grid-template-columns: 50% 50%;
  }
}
</style>>

