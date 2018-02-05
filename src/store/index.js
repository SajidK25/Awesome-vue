export const storage={
    state:{
        inventory:[],
        cart:[]
    },
    getters:{
        getInventory(state){
            return state.inventory
        },
        getcart(state){
            return state.cart
        }
    }
}