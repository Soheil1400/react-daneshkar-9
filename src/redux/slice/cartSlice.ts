import {createSlice} from "@reduxjs/toolkit";
import {CartModel} from "../../model/cartModel";

const initialState: CartModel[] = []

const CartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProduct: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id)
            if (index !== -1) {
                state[index].count = state[index].count + 1
            } else {
                //index = -1
                state.push({...action.payload, count: 1})
            }
        },
        deleteProduct: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id)
            state.splice(index, 1)
        },
        decreaseProduct: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id)
            state[index].count = state[index].count - 1
        }
    }
})

export const {addProduct, deleteProduct, decreaseProduct} = CartSlice.actions

export default CartSlice.reducer