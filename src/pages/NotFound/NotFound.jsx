import React from 'react';
import Header from '../../layouts/Header/Header';

const NotFound = () => {
    return (
        <>
            <Header />
            <div className='mt-[64px]'>
                <h1>404</h1>
                <h1>Page Not Found</h1>
            </div>
        </>
    );
};

export default NotFound;