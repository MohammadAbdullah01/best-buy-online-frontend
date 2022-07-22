import React from 'react';
import Header from '../../layouts/Header/Header';
import Products from '../Home/products/Products';

const AllProducts = () => {
    return (
        <>
            <Header />
            <div className='bg-gradient-to-r from-cyan-500 to-blue-500 vh-cover-full pt-1 mt-[64px] pb-16'>
                <div>
                    <Products />
                </div>
            </div>
        </>
    );
};

export default AllProducts;