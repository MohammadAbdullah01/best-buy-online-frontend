import React from 'react';
import faq from '../../../assets/faq.jpg'
import mobile from '../../../assets/mobile.png'
import { Accordion } from 'flowbite-react/lib/esm/components'
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Faq = () => {
    return (
        <section className='py-24 px-3 md:px-10 lg:px-20 text-white' style={{ background: `rgba(0,0,0,0.1) url(${faq})`, backgroundPosition: 'center center', backgroundSize: 'cover', backgroundBlendMode: "darken", backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
            <h1 className='text-2xl md:text-4xl text-center font-bold'>SEE WHY CUSTOMERS LOVE THE OUR MOBILES</h1>
            <h2 className='text-xl  text-neutral-400 text-center font-semibold my-3 tracking-widest'>DESIGNED TO PERFECTION</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-items-center'>
                {/* <div className='mx-auto'> */}
                <img src={mobile} alt="" />
                {/* </div> */}
                <div>
                    <Accordion arrowIcon={BsFillArrowDownCircleFill}>
                        <Accordion.Panel>
                            <Accordion.Title>
                                NEW GRADIENT COLOR FINISHES
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-white ">
                                    Rierem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Is there a Figma file available?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-white ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                FULLY HIDDEN CAMERA LENS
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-white">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.
                                </p>

                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Faq;