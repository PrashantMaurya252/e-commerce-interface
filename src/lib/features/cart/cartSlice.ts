import {createSlice,PayloadAction} from "@reduxjs/toolkit"

interface cartItem {
    id:string,
    name:string,
    price:number,
    quantity:number
}

interface cartState{
    items : cartItem[]
}

const initialState : cartState ={
    items:[]
}