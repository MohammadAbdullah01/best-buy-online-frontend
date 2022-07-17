import { Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';
import welcome from '../../assets/welcome2.svg'
import Header from '../../layouts/Header/Header';

const override = {
    display: "block",
    margin: "0 auto",
};

const SignIn = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [
        signInWithEmailAndPassword,
        emailPassUser,
        emailPassLoading,
        emailPassError,
    ] = useSignInWithEmailAndPassword(auth);
    useEffect(() => {
        if (emailPassUser || googleUser) {
            navigate('/')
        }
    }, [emailPassUser, googleUser, navigate])
    useEffect(() => {
        toast.error(googleError?.message.slice(22, -2) || emailPassError?.message.slice(22, -2))
    }, [googleError?.message || emailPassError?.message])
    const onSubmit = async (data) => {
        const email = data.email;
        const password = data.password;
        console.log(email, password);
        await signInWithEmailAndPassword(email, password)
    }
    return (
        <>
            <Header />
            <div className='bg-gradient-to-r from-cyan-500 to-blue-500 vh-cover-full pb-36 pt-8  mt-[64px]'>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center items-center px-10 md:px-28 lg:px-44'>

                    <div className='w-full'>
                        <h1 className='text-3xl bold font-mono text-center my-3'>Please Sign In</h1>
                        <div className='bg-slate-300 px-4 py-6 rounded-lg'>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-4">
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
                                    (emailPassLoading || googleLoading)
                                    &&
                                    <ScaleLoader style={override} color={"#2b6ae3"} />
                                }
                                <button
                                    type="submit"
                                    className='py-2 w-full bg-slate-900 text-white rounded hover:bg-slate-700'
                                >Sign In</button>
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
                    <div className='hidden md:block'>
                        <img className='sm:w-0 mt-5 md:w-64 lg:w-70' src={welcome} alt="" />
                    </div>
                </div >
            </div >
        </>
    );
};

export default SignIn;