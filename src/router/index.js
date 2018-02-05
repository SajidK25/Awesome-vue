import Hello from '../components/views/Hello'
import Inventory from '../components/views/Inventory'
import ItemDetails from '../components/views/ItemDetails'
export const routes=[
    {
        path:'/items',
        component:Inventory
    },
    {
        path:'/item/:id',
        component:ItemDetails
    },

]