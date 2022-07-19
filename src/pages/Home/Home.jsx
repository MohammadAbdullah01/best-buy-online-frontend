import React from 'react';
import Header from '../../layouts/Header/Header';
import Banner from './banner/Banner';
import Products from './products/Products';

const Home = () => {
    return (
        <>
            <Header />
            <div className='bg-gradient-to-r from-cyan-500 to-blue-500 pb-5'>
                <Banner />
                <Products />
            </div>
        </>
    );
};

export default Home;