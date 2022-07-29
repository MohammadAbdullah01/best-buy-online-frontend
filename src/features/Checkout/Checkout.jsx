import { Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import Header from '../../layouts/Header/Header';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import ScaleLoader from "react-spinners/ScaleLoader";

const override = {
    display: "block",
    margin: "0 auto",
};

const Checkout = () => {
    const [apiLoading, setApiLoading] = useState(false)
    const { items: cartItems } = useSelector(state => state.cart)
    const cart = useSelector(state => state.cart)
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const name = data.name;
        const email = data.email;
        const address = data.address;
        const mobile = data.mobile
        const date = new Date();
        const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
        const order = {
            name: name,
            email: email,
            address: address,
            mobile: mobile,
            paid: false,
            date: `${day}/${month}/${year}`,
            products: cart.items,
            totalItems: cart.totalItems,
            totalPrice: cart.totalPrice
        }
        setApiLoading(true)
        fetch(`https://afternoon-eyrie-39455.herokuapp.com/orders`, {
            method: "post",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setApiLoading(false)
                    navigate('/payment')
                    toast.success('Order on progress')
                    reset()
                }
            })
    }
    return (
        <>
            <Header />
            <div className='mt-[70px]  px-3 md:px-10 lg:px-20 pb-5'>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-x-3'>
                    <div className='col-span-3'>
                        <h1 className='text-center text-lg md:text-xl lg:text-2xl font-semibold pt-3'>Shipping Address</h1>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-4">
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="name"
                                            value="Your name"

                                        />
                                    </div>
                                    <TextInput
                                        id="name"
                                        type="text"
                                        value={user?.displayName}
                                        {...register('name', { pattern: /^.{3,}$/ })}
                                        required={true}
                                    />
                                    {errors.name && <p className='text-rose-500'>Provide valid name</p>}
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="email1"
                                            value="Your email"

                                        />
                                    </div>
                                    <TextInput
                                        id="email1"
                                        type="email"
                                        value={user?.email}
                                        {...register('email', { pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ })}
                                        required={true}
                                    />
                                    {errors.email && <p className='text-rose-500'>Invalid email</p>}
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="mobile"
                                            value="Your Mobile Number"
                                        />
                                    </div>
                                    <TextInput
                                        id="mobile"
                                        type="number"
                                        {...register('mobile', { pattern: /^.{5,}$/ })}
                                        required={true}
                                    />
                                    {errors.mobile && <p className='text-rose-500'>Minimum 5 length</p>}
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="addredd"
                                            value="Your Full Address"
                                        />
                                    </div>
                                    <TextInput
                                        id="address"
                                        type="text"
                                        {...register('address', { pattern: /^.{3,}$/ })}
                                        required={true}
                                    />
                                    {errors.address && <p className='text-rose-500'>Provide valid address</p>}
                                </div>
                                {apiLoading && <ScaleLoader style={override} color={"#2b6ae3"} />}
                                <button
                                    style={{ backgroundColor: "#03543F" }}
                                    type="submit"
                                    className='py-2 w-full  text-white rounded '
                                >Place Order</button>
                            </form>
                        </div>
                    </div>
                    <div className='col-span-2 bg-gray-300 mt-4 md:mt-0 px-1 md:px-5 pt-5'>
                        <h1 className='text-center text-lg md:text-xl lg:text-2xl font-semibold mt-5 md:mt-0'>Order Summary</h1>
                        <div className='md:mt-3'>
                            <h2 className='md:text-lg lg:text-xl'>Total Quantity: {cart.totalItems}</h2>
                            <h2 className='md:text-lg lg:text-xl'>Total Price: {cart.totalPrice}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;