import { createSlice,PayloadAction } from "@reduxjs/toolkit"

interface User{
    _id:string,
    email:string,
    username:string,
    fullname:string,
    address:string,
    phone:number,
    favourites:
    
}

interface Favourites{
    _id:string,
}

const initialState={
    user:null
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setAuthUser : (state,action:PayloadAction<User>)=>{
            state.user = action.payload
        }
    }
})

export const {setAuthUser} = userSlice.actions
export default userSlice.reducer