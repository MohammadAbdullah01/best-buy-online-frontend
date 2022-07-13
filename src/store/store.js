import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Cart/cartSlice";
import { productsApi } from "../features/products/productsApi";
// import productsReducer from "../features/products/productsSlice";

const store = configureStore({
    reducer: {
        // products: productsReducer,
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

export default store;