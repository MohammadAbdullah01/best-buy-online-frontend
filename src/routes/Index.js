import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from '../layouts/Cart/Cart';
import Bottom from '../layouts/Bottom/Bottom';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import AllProducts from '../pages/AllProducts/AllProducts';
import PrivateRoute from '../layouts/PrivateRoute/PrivateRoute';
import Checkout from '../features/Checkout/Checkout';
import Payment from '../features/Payment/Payment';

const Index = () => {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/products" element={<AllProducts />} />
                    <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/payment" element={<PrivateRoute><Payment /></PrivateRoute>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Bottom />
        </BrowserRouter>
    );
};

export default Index;