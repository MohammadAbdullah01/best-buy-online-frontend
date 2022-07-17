import React from 'react';
import Header from '../../layouts/Header/Header';
import Products from './products/Products';

const Home = () => {
    return (
        <>
            <Header />

            <div className='bg-gradient-to-r from-cyan-500 to-blue-500 pt-[64px] pb-5'>
                <h1>home</h1>
                <div className=''>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque repellendus accusamus error enim beatae expedita sequi aliquid maxime laborum animi rem fuga doloribus quisquam facilis excepturi quibusdam, voluptatem blanditiis velit? Commodi laborum voluptate hic cupiditate blanditiis corrupti quia ducimus ex, magni vitae delectus explicabo sint autem facilis dignissimos, quas nobis incidunt quaerat necessitatibus maxime obcaecati. Perspiciatis fuga animi dolorem adipisci soluta est? Saepe iste, libero reprehenderit enim rem impedit, sequi ad deleniti maiores ab porro accusamus id eius doloremque. Ipsa, odio! Officia blanditiis recusandae ea, corrupti non et, obcaecati ut fugit animi cumque necessitatibus, repellendus mollitia fuga delectus similique natus?
                </div>
                <Products />
            </div>
        </>
    );
};

export default Home;