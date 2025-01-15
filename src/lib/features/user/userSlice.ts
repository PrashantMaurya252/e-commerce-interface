import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { removeFromCart } from "../cart/cartSlice"

interface User{
    _id:string,
    email:string,
    username:string,
    fullname:string,
    address:string,
    phone:number,
    favourites:Favourites[],
    cartItems:CartItem[],
    token:string
    
}

interface AuthUser{
    _id:String,
    email:String,
    username:String,
    fullname:String,
    token:String,
    isVerified:Boolean,
    avatar:String,
    cartItems:Number
}

interface CartItem{
    _id:string,
    quantity:number

}

interface Favourites{
    _id:string,
}

interface UserState{
    user:User | null,
    authUser:AuthUser | null
}
const initialState:UserState={
    user: null,
    authUser:null
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setAuthUser : (state,action:PayloadAction<AuthUser>)=>{
            state.authUser = action.payload
        },
        updateUserFavourites:(state,action:PayloadAction<Favourites>)=>{
            if(state.user){
                const isFavourite= state.user?.favourites?.find((item)=>item._id === action.payload._id)
                if(isFavourite){
                    state.user.favourites = state.user.favourites.filter((item)=> item._id !== action.payload._id)
                }else{
                    state.user.favourites.push(action.payload)
                }
            }
            
        },
        addToCart:(state,action:PayloadAction<CartItem>)=>{
            if(state.user){
                const existingUser = state.user.cartItems.find((item)=>item._id === action.payload._id)
                if(existingUser){
                    existingUser.quantity +=action.payload.quantity
                }else{
                    state.user.cartItems.push(action.payload)
                }
            }
        },
        removeFromCart:(state,action:PayloadAction<string>)=>{
            if(state.user){
                state.user.cartItems = state.user.cartItems.filter((item)=>item._id !== action.payload)
            }
        }
    }
})

export const {setAuthUser} = userSlice.actions
export default userSlice.reducer