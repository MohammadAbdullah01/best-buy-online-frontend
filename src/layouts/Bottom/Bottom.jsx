// import { Footer } from 'flowbite-react';
import React from 'react';
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { useLocation } from 'react-router-dom';

const Bottom = () => {
    return (
        <>
            <footer className={`py-10 text-white bg-slate-700`}>
                <h2 style={{ fontFamily: 'Oleo Script, cursive' }} className='mb-4 text-3xl text-center'>Best Buy</h2>
                <div className='flex justify-center'>
                    <span className='mx-2 text-sm hover:text-red-500 hover:cursor-pointer'>BRANDS</span>
                    <span className='mx-2 text-sm hover:text-red-500 hover:cursor-pointer'>MEDIA</span>
                    <span className='mx-2 text-sm hover:text-red-500 hover:cursor-pointer'>PR AGENCIES</span>
                </div>
                <hr className='m-4 border-solid border-1 border-slate-900' />
                <div className='flex justify-center'>
                    <span className='mx-2 text-sm hover:text-red-500 hover:cursor-pointer'>BRAND DIRECTORY</span>
                    <span className='mx-2 text-sm hover:text-red-500 hover:cursor-pointer'>BLOG</span>
                    <span className='mx-2 text-sm hover:text-red-500 hover:cursor-pointer'>PRICING</span>
                    <span className='mx-2 text-sm hover:text-red-500 hover:cursor-pointer'>FAQ</span>
                    <span className='mx-2 text-sm hover:text-red-500 hover:cursor-pointer'>CONTACT US</span>
                </div>
                <div className='flex justify-center mt-4'>
                    <span className='p-2 rounded-full border border-1 border-slate-900 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:bg-red-500 duration-300 hover:cursor-pointer hover:border-white'><ImFacebook /></span>
                    <span className='p-2 rounded-full border border-1 border-slate-900 ml-1   transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-100 hover:bg-red-500 duration-300 hover:cursor-pointer hover:border-white'><BsTwitter /></span>
                    <span className='p-2 rounded-full border border-1 border-slate-900 ml-1   transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-100 hover:bg-red-500 duration-300 hover:cursor-pointer hover:border-white'><FaLinkedinIn /></span>
                    <span className='p-2 rounded-full border border-1 border-slate-900 ml-1   transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-100 hover:bg-red-500 duration-300 hover:cursor-pointer hover:border-white'><AiOutlineYoutube /></span>
                    <span className='p-2 rounded-full border border-1 border-slate-900 ml-1   transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-100 hover:bg-red-500 duration-300 hover:cursor-pointer hover:border-white'><IoLogoInstagram /></span>
                </div>
                <div className='text-center mt-10 text-sm text-neutral-400'>
                    <p><span className='mr-3'>Terms & Conditions</span> <span>Privacy Policy</span></p>
                    <p className='mt-1'> Copyright &copy; 2022 Best Buy Ltd. All rights reserved. Site credit.</p>
                </div>
            </footer>
        </>
    );
};

export default Bottom;