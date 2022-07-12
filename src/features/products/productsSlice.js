import { createSlice } from '@reduxjs/toolkit'

const initialProducts = {
    items: [],
    isLoading: false,
    error: null
}

export const productsSlice = createSlice({
    name: "products",
    initialState: initialProducts,
    reducers: {
        getProducts: (state) => state,
    }
})

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;