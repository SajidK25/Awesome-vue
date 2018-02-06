<template>
<div v-if="item" class="row">
    <div class="col-sm-6">
      <img :src="item.item.photo" alt="photo">
      
    </div>
    <div class="col-sm-6">
      <h4>{{ item.item.title }}</h4>
      <p>{{ item.description }}</p>
      <p>{{ item.item.price }}</p>
      <button @click="addToCart(item)" class="btn btn-primary">+ Add</button>
    </div>
  </div>
  <h3 v-else>Loading .....</h3>
</template>

<script>
import Axios from 'axios'
export default {
  data(){
    return{
      item:null
    }
  },
  mounted(){
    this.fetchItem()
    
  },
  methods:{
    fetchItem(){
      var self=this
      Axios.get('http://localhost:3020/item/'+this.$route.params.id)
      .then(response=>{
        self.item=response.data
        console.log(response.data)
        
      })
    },
    addToCart(item){
      this.$store.commit('addToCart',item)
    }
  }

}
</script>

<style>

</style>
