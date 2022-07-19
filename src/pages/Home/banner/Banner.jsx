import React, { useState } from 'react';
import banner from '../../../assets/banner.jpg'
import { useSpring, animated, useTransition } from 'react-spring'
import './banner.css'
import { Button } from 'flowbite-react'



const Banner = () => {
    const [toggle, set] = useState(false)
    const transitions = useTransition(toggle, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: toggle,
        delay: 1500,
        onRest: () => set(!toggle),
    })
    return (
        <div className='banner-container min-h-[80vh]' style={{ backgroundImage: `url(${banner})`, backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className='flex min-h-[80vh] w-full items-center'>
                <div className='pl-10 md:pl-15 w-full md:w-[90%] lg:w-3/5'>
                    <h1 style={{ fontFamily: 'Oleo Script, cursive' }} className='text-2xl md:text-3xl lg:text-4xl  font-semibold text-neutral-700 mb-2'>Welcome to <span style={{ fontFamily: 'Oleo Script, cursive' }} className='text-sky-600'>Best Buy</span></h1>
                    <div>

                        <div className='relative'>
                            {transitions(({ opacity }, item) =>
                                item ? (
                                    <animated.div
                                        style={{
                                            position: 'absolute',
                                            opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
                                        }}>
                                        <h1 className='text-3xl  md:text-[1.8rem] md:loading-[2rem]  lg:text-4xl font-bold text-neutral-700'>Get best mobile phones in <br /> cheap price</h1>
                                    </animated.div>
                                ) : (
                                    <animated.div
                                        style={{
                                            position: 'absolute',
                                            opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
                                        }}>
                                        <h1 className='text-3xl  md:text-[1.8rem] md:loading-[2rem]  lg:text-4xl font-bold text-neutral-700'>Get 24 hour instant delivery in <br /> any area</h1>
                                    </animated.div>
                                )
                            )}
                        </div>

                    </div>
                    <div className='mt-20 md:mt-20 lg:mt-24'>
                        <p className='text-neutral-700 lg:text-[18px] mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi vero veritatis id unde excepturi nobis! Nt quia exercitationem modi expedita alias?</p>
                        <a href='/#products'>
                            <Button className='mt-2' gradientMonochrome="info">
                                Start Shopping
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default Banner;

