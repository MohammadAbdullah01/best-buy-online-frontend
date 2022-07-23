import React from 'react';
import Header from '../../layouts/Header/Header';
import Banner from './banner/Banner';
import Faq from './faq/Faq';
import LatestModels from './latestModels/LatestModels';
import Products from './products/Products';
import Subscribe from './subscribe/Subscribe';

const Home = () => {
    return (
        <>
            <Header />
            <div className='bg-gradient-to-r from-cyan-500 to-blue-500 '>
                <Banner />
                <Products />
                <LatestModels />
                <Faq />
                <Subscribe />
            </div>
        </>
    );
};

export default Home;