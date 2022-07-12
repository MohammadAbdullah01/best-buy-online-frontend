import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from '../layouts/Cart/Cart';
import Header from '../layouts/Header/Header';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';

const Index = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Index;