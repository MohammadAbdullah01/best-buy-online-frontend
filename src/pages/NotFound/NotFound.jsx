import React from 'react';
import Header from '../../layouts/Header/Header';
import { BiArrowBack } from "react-icons/bi";
import { Link } from 'react-router-dom';
import sad from '../../assets/sad.svg'

const NotFound = () => {
    return (
        <>
            <Header />
            <div className='mt-[64px] w-full h-[50vh] flex justify-center items-center flex-col'>
                <h1 className='md:text-2xl'>404</h1>
                <h1 className='md:text-2xl'>Page Not Found</h1>
                <img className='w-28 md:w-56 mx-auto my-5' src={sad} alt="" />
                <Link to='/' className='text-neutral-600'><p className='flex items-center md:text-2xl'> <BiArrowBack className='mr-1' />Back to home</p></Link>
            </div>
        </>
    );
};

export default NotFound;