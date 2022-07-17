import React from 'react';
import Header from '../../layouts/Header/Header';
import Products from './products/Products';

const Home = () => {
    return (
        <>
            <Header />
            <div className='bg-gradient-to-r from-cyan-500 to-blue-500 pt-[64px] pb-5'>
                <h1>home</h1>
                <Products />
            </div>
        </>
    );
};

export default Home;