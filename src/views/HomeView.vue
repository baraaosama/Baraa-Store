<template>
  <div class="home">

    <div class="category" v-for="categoryArray in data.categories" :key="categoryArray" >
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item" v-for="(category,index) in categoryArray" :key="category.category" :class="{'active':index===0}">
            <img :src="category.thumbnail" class="d-block w-100" alt="" >
            <div class="carousel-caption d-none d-md-block">
              <router-link :to="'/categories/'+category.category">
                <h5>{{ category.category }}</h5>
                <p>Explore The Collection</p>
              </router-link>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mount } from '@vue/test-utils';
// @ is an alias to /src
import {getDataStore} from '../store/index.js'


export default {
  name: "HomeView",
  data(){
    return {
      data:getDataStore()
    }
  },
  methods:{
    
  },
    created(){
   this.data.getData()
  },
};
</script>
<style scoped lang="scss">
  .category{
    width: 100%;
    height: 100vh;
    & div:not(.carousel-caption){
      height: 100%;
    }
    .carousel-caption{
      background-color: black;
      border-radius: 70px;
      padding: 10px 0;
      width: 30%;
      left: 50%;
      transform: translateX(-50%);
      a{
        text-decoration: none;
        color: unset;
        p{
          margin: 0;
        }
      }
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width:767px) {
    .category{
      height: unset;
    }
  }
</style>
