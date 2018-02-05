<template>
<ul class="list-group">
  <li v-for="(item,index) in items" :key="index" class="list-group-item">
      {{item.title}}-{{item.price}} <button @click="removeFromCart(index)" class="btn btn-sm btn-danger">-</button>
    </li>
 <li class="list-group-item">
     Total ::: {{ totalPrice }}
     </li> 
</ul>
</template>

<script>
export default{
    props:['items'],
    computed:{
        totalPrice(){
            var total=0
            this.items.forEach(item  => {
                total+= parseFloat(item.price)
            })
            return total
        }
    },
    methods:{
        removeFromCart(index){
            this.$emit('rmFrCart',index)
        }
    }
   
}
</script>

<style>
    
</style>