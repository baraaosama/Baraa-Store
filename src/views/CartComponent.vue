<template>
    <h2 class="mt-2">Cart</h2>
    <div v-if="dataObject.numberOfCartItems > 0 " class="cart-items-container container" >
        <div v-for="item in cartItems" :key="item.id" class="cart-item d-flex justify-content-between align-items-center">
            <div class="remove-item" @click="removeItem(item.id)"><i class="fa-regular fa-circle-xmark"></i></div>
            <div class="cart-item-image"><img :src="item.images[0]"/></div>
            <div class="item-name">{{ item.title }}</div>
            <div class="item-price">{{ item.price }} $</div>
        </div>
        <div class="totals mt-5">
            <h5>Totals</h5>
            <div class="total-price d-flex justify-content-between align-items-center"><div>Total Price</div><div>{{ totalPrice }} $</div></div>
        </div>
        <button class="btn"><router-link to="/">Continue Shopping</router-link></button>
    </div>
    <p v-if="dataObject.numberOfCartItems == 0">Cart Is Empty</p>
</template>

<script>
import {getDataStore} from '../store/index.js'
export default {
    name:'CartComponent',
    data:()=>({
        dataObject:getDataStore(),
        totalPrice:0,
    }),
    methods:{
        updateTotals() {
            this.totalPrice = this.cartItems.reduce((total, item) => total + item.price, 0);
        },
        removeItem(id) {
            this.dataObject.cartItems.forEach((element, index) => {
                if (element.id == id) {
                this.dataObject.cartItems.splice(index, 1);
                this.dataObject.numberOfCartItems--;
                }
            });
            this.updateTotals()
            },
    },
    computed:{
        cartItems:function(){return this.dataObject.cartItems}
    },
    mounted(){
        this.updateTotals()
    }
}
</script>

<style lang="scss" scoped>
    .cart-items-container{
        .cart-item{
            border: 1px solid black;
            padding: 5px;
            margin-bottom: 10px;
            border-radius: 7px;
            .cart-item-image{
                width: 60px;
                height: 60px;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 5px;
                }
            }
        }
        .totals{
            h5{
                background-color: #D9D9D9;
                text-align: left;
                padding: 5px;
                border-radius: 5px;
            }
            .total-price{
                border: 1px solid black;
                border-radius: 5px;
                padding: 5px;
            }
        }
        .btn{
            background-color: black;
            color: white;
            margin-top: 15px;
            width: 100%;
            a{
                text-decoration: none;
                color: white;
                width: 100%;
                height: 100%;
                display: block;
            }
        }
    }
</style>>

