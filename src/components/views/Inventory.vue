<template>
 <div v-if="!loading" class="col-sm-9">
   <div v-for="(item,index) in items" :key="index" class="card" style="width: 15rem;">
  <router-link :to="{ path:'/item/'+item.id}">
   <img class="card-img-top" :src="item.photo" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{ item.title}}</h5>
  </div> 
  </router-link>
  
  <div class="card-footer">
    <p class="card-text">{{item.price}}</p>
    <a @click="addToCart(item)" class="btn btn-primary">+ Add</a>
  </div>
</div>

</div>
<div v-else>LOADING !!!!!!!</div>
</template>

<script>
import  Axios  from 'axios'
export default{
  
  data(){
    return{
      loading:true,
      items:[]
    }
  },
  mounted(){
    this.fetchInventory()
  },
    // props:['items'],
    methods:{
      addToCart(item){
          //this.$emit('newItemAdded',item)
          this.$store.commit('addToCart',item)
      },
      fetchInventory(){
        var self=this
        Axios.get('http://localhost:3020/items').then(response=>{
          setTimeout(function(){
            self.items=response.data
            self.loading=false
          },3000)
          
        })
      }
    }
}
</script>

<style>
    
</style>