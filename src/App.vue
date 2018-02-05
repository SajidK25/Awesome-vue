<template>
  <div id="app">
<Navbar @search="searchCar"></Navbar>
<div class="container">
<div class="row">
<div class="col-sm-9">
<router-view></router-view>
  <!-- <Inventory @newItemAdded="addCart" :items='items'></Inventory> -->
</div>
<div class="col-sm-3"> 
<Cart :items="cart" @rmFrCart="removeCart"></Cart>
    
</div>
  </div>
</div>
</div>
</template>

<script>

import Navbar from './components/Navbar'
import Inventory from './components/views/Inventory'
import Cart from './components/Cart'
import data from './data.js'

export default {
 components:{
   Navbar,Inventory,Cart
 },
 data(){
   return {
     items:[],
      cart:[
        // {
        //   "id":110,
        //   "title":"Dodge",
        //   "photo":"http://dummyimage.com/250x250.png/cc0000/ffffff",
        //   "price":"$9.84"
        //   }
      ]
   }
 },
 mounted(){
   //console.log(data)
   this.items=data
 },
 methods:{
  searchCar(keyword){
    this.items=data.filter(item=>{
      return item.title.toLowerCase().indexOf(keyword.toLowerCase())!==-1
    })
  },
  addCart(item){
    this.cart.push(item)
  },
  removeCart(index){
    this.cart.splice(index,1)
  }
}
}

</script>

<style>
.container{
  padding-top:10px; 
}
</style>
