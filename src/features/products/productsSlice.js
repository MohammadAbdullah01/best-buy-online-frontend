import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    isLoading: false,
    error: null
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        // getProducts: (state) => state,
    }
})

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;

// !!!!!!!!!!!!!!! we dont need this because we are calling via RTK query