import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../layouts/Header/Header';

const Payment = () => {
    return (
        <>
            <Header />
            <div className='mt-[100px] mb-8'>
                <h1 className='text-center text-lg md:text-2xl lg:text-3xl mb-5'>Pay Now</h1>
                <h1 style={{ fontFamily: 'Oleo Script, cursive' }} className='text-center text-lg md:text-2xl lg:text-3xl'>Payment system is under construction by developer !!</h1>
                <p className='text-center text-lg md:text-2xl lg:text-3xl mt-2'>Meanwhile you can check your further status in <Link to='/dashboard' className='text-rose-600'>Dashboard</Link> page.</p>
            </div>
        </>
    );
};

export default Payment;