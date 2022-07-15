import React from 'react';
import Products from './products/Products';

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500'>
            <h1>home</h1>
            <Products />
        </div>
    );
};

export default Home;