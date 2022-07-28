import { Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import Header from '../../layouts/Header/Header';

const Checkout = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const name = data.name;
        const email = data.email;
        const address = data.password;
        const mobile = data.mobile
        navigate('/payment')
    }
    console.log(user?.displayName);
    return (
        <>
            <Header />
            <div className='mt-[70px]  px-3 md:px-10 lg:px-20 pb-5'>
                <div className='grid grid-cols-1 md:grid-cols-5'>
                    <div className='col-span-3'>
                        <h1 className='text-center text-lg md:text-xl'>Shipping Address</h1>
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
                                            htmlFor="phone"
                                            value="Your Phone Number"
                                        />
                                    </div>
                                    <TextInput
                                        id="phone"
                                        type="number"
                                        {...register('phone', { pattern: /^.{11,}$/ })}
                                        required={true}
                                    />
                                    {errors.phone && <p className='text-rose-500'>Minimum 11 characters</p>}
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
                                {/* {
                                    (emailPassLoading || profileUpdatingLoading || googleLoading)
                                    &&
                                    <ScaleLoader style={override} color={"#2b6ae3"} />
                                } */}
                                <button
                                    style={{ backgroundColor: "#03543F" }}
                                    type="submit"
                                    className='py-2 w-full  text-white rounded '
                                >Place Order</button>
                            </form>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <h1 className='text-center text-lg md:text-xl mt-5 md:mt-0'>Order Summary</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;