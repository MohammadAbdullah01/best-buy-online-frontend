import { Button, Card, Label, TextInput, Checkbox } from 'flowbite-react';
import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import welcome from '../../assets/welcome.svg'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import ScaleLoader from "react-spinners/ScaleLoader";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const SignUp = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [updateProfile, profileUpdatingLoading, profileUpdatingError] = useUpdateProfile(auth);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [
        createUserWithEmailAndPassword,
        emailPassUser,
        emailPassLoading,
        emailPassError,
    ] = useCreateUserWithEmailAndPassword(auth);
    useEffect(() => {
        if (emailPassUser || googleUser) {
            navigate('/')
        }
    }, [emailPassUser, googleUser, navigate])
    useEffect(() => {
        toast.error(googleError?.message.slice(22, -2) || emailPassError?.message.slice(22, -2))
    }, [googleError?.message || emailPassError?.message])
    // if (googleUser?.email || emailPassUser?.email) {
    //     navigate('/')
    // }
    const onSubmit = async (data) => {
        const displayName = data.name;
        const email = data.email;
        const password = data.password;
        console.log(email, password);
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName });
        // if (googleLoading || profileUpdatingLoading || emailPassLoading) {
        //     return <p>loading</p>
        // }
        // if (googleError?.message || emailPassError?.message) {
        //     toast.error(googleError?.message.slice(22, -2) || emailPassError?.message.slice(22, -2) || profileUpdatingError?.message);
        // }

    }

    return (
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 vh-cover-full pb-36 pt-8  mt-[64px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center items-center px-10 md:px-28 lg:px-44'>
                <div className='hidden md:block'>
                    <img className='sm:w-0 md:w-64 lg:w-80' src={welcome} alt="" />
                </div>
                <div className='w-full'>
                    <h1 className='text-3xl bold font-mono text-center my-3'>Please Sign Up</h1>
                    <div className='bg-slate-300 px-4 py-6 rounded-lg'>
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

                                    {...register('email', { pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ })}
                                    required={true}
                                />
                                {errors.email && <p className='text-rose-500'>Invalid email</p>}
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="password1"
                                        value="Your password"
                                    />
                                </div>
                                <TextInput
                                    id="password1"
                                    type="password"
                                    {...register('password', { pattern: /^.{6,}$/ })}
                                    required={true}
                                />
                                {errors.password && <p className='text-rose-500'>Minimum 6 characters</p>}
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox Display Name id="remember" />
                                <Label htmlFor="remember">
                                    Accept <span className='text-sky-600'>terms and conditions</span>
                                </Label>
                            </div>
                            {
                                (emailPassLoading || profileUpdatingLoading || googleLoading)
                                &&
                                <ScaleLoader style={override} color={"#2b6ae3"} />
                            }
                            <button
                                type="submit"
                                className='py-2 w-full bg-slate-900 text-white rounded hover:bg-slate-700'
                            >Sign Up</button>
                        </form>
                        <div class="relative flex py-5 items-center">
                            <div class="flex-grow border-t border-gray-400"></div>
                            <span class="flex-shrink mx-4 text-gray-800">OR</span>
                            <div class="flex-grow border-t border-gray-400"></div>
                        </div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className='py-2 w-full bg-slate-900 text-white rounded hover:bg-slate-700'
                        >Continue with google</button>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default SignUp;