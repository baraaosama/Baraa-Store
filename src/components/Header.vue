<template>
  <div class="py-1 px-3 header">
    <div class="d-flex justify-content-between py-3 align-items-center">
        <div>
            <div  class="me-3" id="menu" @click="openMenu()"> 
                <i class="fa-solid fa-bars me-2"></i>
                <span >Menu</span>
            </div>
            <!--<a href="" id="search">
                <i class="fa-solid fa-magnifying-glass me-2"></i>
                <span>Search</span>
            </a>-->
        </div>
        <h1>Baraa Store</h1>
        <div>
            <!--<a href="" class="me-3" id="wish-list">
                <span >Wishlist</span>
            </a>
            <a href="" class="me-3" id="mylv">
                <span >MyLV</span>
            </a>-->
            <router-link to="/cart" id="cart-icon">
                <i class="fa-solid fa-cart-shopping"></i>
                <span id="cart-items" style="">{{ data.numberOfCartItems }}</span>
            </router-link>
        </div>
    </div>
  </div>
  <div class="menu-list">
    <div class="backdrop" @click="closeMenu()"></div>
    <div class="list">
        <button @click="closeMenu()"><i class="fa-solid fa-xmark" style="margin-right:10px"></i><span>Close</span></button>
        <ul class="list-unstyled mt-3 p-2">
            <li v-for="categoryName in data.categoryNames" :key="categoryName"><router-link :to="'/categories/'+categoryName" @click="closeMenu()">{{ categoryName }}</router-link></li>
        </ul>
        <hr>
        <!--<div class="mobile-menu-footer">
            <a href="" class="me-3" id="mobile-wish-list">
                <span >Wishlist</span>
            </a>
            <a href="" class="me-3" id="mobile-mylv">
                <span >MyLV</span>
            </a>
        </div>-->
    </div>
  </div>
</template>

<script>
import {getDataStore} from '../store/index.js'
export default {
  name: "HeaderComponent",
  data(){
    return {
      data:getDataStore(),
    }
  },
  created(){
   this.data.getData()
  },
  methods:{
    openMenu(){
        document.body.classList.add('menu-open')
        document.querySelector('.menu-list').classList.add('open')
    },
    closeMenu(){
        document.body.classList.remove('menu-open')
        document.querySelector('.menu-list').classList.remove('open')
    }
  }
};
</script>
<style scoped lang="scss">
.header{
    background-color: black;
    div{
        div{
            #menu{
                display: inline-block;
                color: white;
            }
            a{
                text-decoration: none;
                color: white;
            }
        }
        h1{
            color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
#cart-icon{
    position: relative;
    #cart-items{
        position:absolute;
        top:-50%;
        right:-50%;
        width:12px;
        height:12px;
        background-color:black;
        color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        padding: 5px;
        border-radius: 50%;
        font-size: 10px;
    }
}

.header:hover{
    background-color: white;
}
.header:hover *{
    color: black;
}
.menu-list{
    display: none;
    position: fixed;
    width: 100vw;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    z-index: 1000;
    a{
        text-decoration: none;
        color: black;
        display: inline-block;
        padding: 10px;
    }
    .list{
        position: relative;
        padding: 20px;
        width: 30%;
        background-color: white;
        height: 100%;
        overflow-y: auto;
        text-align: left;
        button{
            border: none;
            background-color: transparent;
        }
        ul{
            li{
                
            }
            li:hover a{
                text-decoration: underline;
            }
        }
        .mobile-menu-footer{
            display: none;
        }
    }
    .backdrop{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.8);
    }
}
.menu-list.open{
    display: block;
}
@media (max-width:738px) {
    .list{
        width: 100% !important;
    }
}
@media (max-width:767px) {
    #menu span{
        display: none;
    }
    #search span{
        display: none;
    }
    #wish-list{
        display: none;
    }
    #mylv{
        display: none;
    }
    .mobile-menu-footer{
        display: flex !important;
    }
}


</style>
