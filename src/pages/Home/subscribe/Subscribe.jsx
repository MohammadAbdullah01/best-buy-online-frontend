import React from 'react';
import subscribe from '../../../assets/subscribe.jpg'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import './subscribe.css'
import toast from 'react-hot-toast';


const Subscribe = () => {
    const handleSubscribe = (e) => {
        e.preventDefault()
        toast.success("Thanks for subscribing")

    }
    return (
        <section className='text-white py-24 text-center px-10' style={{ backgroundImage: `url(${subscribe})`, backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <h2 className='font-bold text-xl md:text-2xl'>Subscribe now</h2>
            <h1 className='font-bold text-3xl md:text-5xl mt-3 mb-6'>Get our updates always fast</h1>
            <h2 className='font-bold text-xl md:text-2xl'>Your personal data will always be safe</h2>
            <form onSubmit={handleSubscribe} >
                <span className='relative'>
                    <input id='subscribe-input' className='my-5 pl-5 py-1 md:py-3 text-lg md:text-xl rounded-full w-[250px] md:w-[320px]' type="text" placeholder='Your email address' required />
                    <button>
                        <IoIosArrowDroprightCircle type='submit' className='text-neutral-800 hover:text-red-500 text-3xl md:text-5xl absolute right-1 cursor-pointer top-[-4px] md:top-[-14px]' />
                    </button>
                </span>
            </form>
        </section>
    );
};

export default Subscribe;