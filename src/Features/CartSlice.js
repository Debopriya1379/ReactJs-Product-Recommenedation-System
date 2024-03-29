import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : "cartItems",
    initialState : {cartItems : []},
    reducers : {
        addToCart : (state,action) => {
            state.cartItems.push(action.payload);
        },
        // deleteFromCart : (state,action) => {
        //     state.cartItems = state.cartItems.filter((item)=> item.id !== action.payload.id)
        // },
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;