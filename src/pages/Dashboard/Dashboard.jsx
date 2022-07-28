import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../layouts/Header/Header';
import './dashboard.css'
import { HiMenuAlt2 } from "react-icons/hi";
import { XIcon } from '@heroicons/react/outline'


const Dashboard = () => {
    return (
        <>
            <Header />
            <div className='mt-[64px]'>
                <div >
                    <input type="checkbox" id="check1" />
                    <label for="check1">
                        <HiMenuAlt2 id='btn1' />
                        <XIcon id="cancel" />
                    </label>
                    <div class="sidebar1">
                        <Link to="/dashboard" class="active">
                            <i class="fas fa-qrcode"></i>
                            <span>Orders</span>
                        </Link>
                        <Link to="review" class="active">
                            <i class="fas fa-qrcode"></i>
                            <span>Review</span>
                        </Link>
                        {/* <Link to="#">
                            <i class="fas fa-link"></i>
                            <span>Shortcuts</span>
                        </Link>
                        <a href="#">
                            <i class="fas fa-stream"></i>
                            <span>Overview</span>
                        </a>
                        <a href="#">
                            <i class="fas fa-calendar"></i>
                            <span>Events</span>
                        </a>
                        <a href="#">
                            <i class="far fa-question-circle"></i>
                            <span>About</span>
                        </a>
                        <a href="#">
                            <i class="fas fa-sliders-h"></i>
                            <span>Services</span>
                        </a>
                        <a href="#">
                            <i class="far fa-envelope"></i>
                            <span>Contact</span>
                        </a> */}
                    </div>
                </div>
                <div className='px-1 md:px-10 lg:px-20'>
                    {/* write here */}
                    <Outlet />
                </div>
            </div>

        </>
    );
};

export default Dashboard;