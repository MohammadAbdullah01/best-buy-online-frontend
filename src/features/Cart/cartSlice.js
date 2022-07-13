import { createSlice } from "@reduxjs/toolkit"
import toast from 'react-hot-toast';

const initialState = {
    items: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    totalItems: 0,
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // addToCart: (state, action) => {
        //     const indexNo = state.items.findIndex(item => item.id === action.payload.id)
        //     console.log(indexNo);
        //     if (indexNo >= 0) {
        //         // clickedItem.quantity = 1;    not working so doing next line

        //         state.items[indexNo].quantity += 1;
        //         console.log("im puraton");
        //     }
        //     else {
        //         const tempProduct = { ...action.payload, quantity: 1 }
        //         state.items.push(tempProduct)
        //         // state.items = [...state.items, tempProduct]
        //         console.log("i am new clicked");
        //     }
        // }
        addToCart(state, action) {
            const existingIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            if (existingIndex >= 0) {
                state.items[existingIndex] = {
                    ...state.items[existingIndex],
                    cartQuantity: state.items[existingIndex].cartQuantity + 1,

                };
                toast.success(`Increased ${action.payload.name} quantity`)
            } else {
                let tempProductItem = { ...action.payload, cartQuantity: 1 };
                state.items.push(tempProductItem);
                toast.success(`${action.payload.name} has added to cart`)
            }

            localStorage.setItem("cartItems", JSON.stringify(state.items))
        },
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;