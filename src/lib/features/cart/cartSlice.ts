import {createSlice,PayloadAction} from "@reduxjs/toolkit"

interface CartItem {
    _id:string,
    name:string,
    price:number,
    quantity:number
}

interface CartState{
    items : CartItem[]
}

const initialState : CartState ={
    items:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action:PayloadAction<CartItem>)=>{
            const item = state.items.find((item)=>item._id === action.payload._id)
            if(item){
                item.quantity += action.payload.quantity
            }else{
                state.items.push(action.payload)
            }
        },
        removeFromCart:(state,action:PayloadAction<string>)=>{
            state.items = state.items.filter((item)=>item._id !== action.payload)
        },
        clearCart:(state)=>{
            state.items =[]
        }
    }
})

export const {addToCart,removeFromCart,clearCart} = cartSlice.actions
export default cartSlice.reducer