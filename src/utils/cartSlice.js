import { CreateSlice, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state, action)=>{
           
            state.items.push(action.payload);
        },
        removeItem:(state, action)=>{
            // console.log(action);
            state.items.splice(action.payload, action.payload);
        },
        clearCart : (state)=>{
            state.items = [];
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;