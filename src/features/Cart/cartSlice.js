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
        removeFromCart: (state, action) => {
            const newCart = state.items.filter(item => item.id !== action.payload.id)
            state.items = newCart
            localStorage.setItem("cartItems", JSON.stringify(state.items))
            toast.success(`Removed ${action.payload.name} from cart`)
        },
        decreaseQuantity: (state, action) => {
            const indexNumber = state.items.findIndex(item => item.id === action.payload.id)
            if (state.items[indexNumber].cartQuantity > 1) {
                state.items[indexNumber].cartQuantity -= 1;
                toast.success(`Decreased ${action.payload.name} quantity`)
            }
            else if (state.items[indexNumber].cartQuantity === 1) {
                const newCart = state.items.filter(item => item.id !== action.payload.id)
                state.items = newCart
                toast.success(`Removed ${action.payload.name} from cart`)
            }
            localStorage.setItem("cartItems", JSON.stringify(state.items))
        },
        clearCart: (state) => {
            state.items = []
            localStorage.setItem('cartItems', JSON.stringify(state.items))
            toast.success("Cart cleared")
        },
        getTotals: (state, action) => {
            const { total, quantity } = state.items.reduce((cartTotal, item) => {
                const { price, cartQuantity } = item;
                const totalPrice = price * cartQuantity;

                cartTotal.total += totalPrice
                cartTotal.quantity += cartQuantity;

                return cartTotal;
            },
                {
                    total: 0,
                    quantity: 0
                }
            )
            state.totalItems = quantity;
            state.totalPrice = total;
        }
    }
})

export const { addToCart, removeFromCart, decreaseQuantity, clearCart, getTotals } = cartSlice.actions;
export default cartSlice.reducer;