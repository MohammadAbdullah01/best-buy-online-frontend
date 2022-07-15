import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from '../layouts/Cart/Cart';
import Footer from '../layouts/Footer/Footer';
import Header from '../layouts/Header/Header';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import SignUp from '../pages/SignUp/SignUp';

const Index = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Index;