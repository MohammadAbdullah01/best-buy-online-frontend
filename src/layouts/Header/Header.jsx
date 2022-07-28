import { Avatar, Dropdown, Navbar, Button } from 'flowbite-react';
import React, { useState } from 'react';
import { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom'
import { getTotals } from '../../features/Cart/cartSlice';
import auth from '../../firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { signOut } from 'firebase/auth';
import demoUser from '../../assets/demoUser.jpg'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Products', href: '/products', current: false },
  { name: 'Dahboard', href: '/dashboard', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  const [navbar, setMyNavbar] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setMyNavbar(true)
    } else {
      setMyNavbar(false)
    }
  }
  window.addEventListener("scroll", changeBackground)
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch])

  return (
    <Disclosure as="nav" className={`${location.pathname === '/' ? navbar ? 'bg-sky-500' : 'bg-sky-500 md:bg-transparent' : 'bg-sky-500 '} fixed left-0 top-0 w-full z-50`}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        style={({ isActive }) => {
                          return {
                            fontSize: "15px",
                            fontWeight: "bold",
                            padding: '7px 13px',
                            color: isActive ? "white" : "#09121c",
                            borderBottom: isActive ? "2px solid #7733ff" : "",
                          };
                        }}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className=" p-2 rounded-full text-white hover:text-gray-400  mr-5"
                >
                  <span className="sr-only">View notifications</span>
                  <Link to='/cart'><ShoppingCartIcon className="h-5  md:h-6 w-5 md:w-6 relative" aria-hidden="true" /><span className='absolute mt-[-37px] ml-[10px] text-white h-5 w-5 rounded-full bg-gray-700 text-[14px]'>{cart.totalItems}</span></Link>
                </button>

                {/* Profile dropdown */}
                {user ?
                  <Menu as="div" className="ml-3 relative z-50">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        {user?.photoURL ?
                          <img className="h-8 md:h-10 w-8 md:w-10 rounded-full" src={user?.photoURL} alt="" />
                          :
                          <img className="h-8 w-8 rounded-full" src={demoUser} alt="" />
                        }

                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {/* <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item> */}
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              onClick={() => signOut(auth)}
                            >
                              Sign out
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  :
                  <Link to='/signup'>
                    <Button
                      outline={true}
                      gradientDuoTone="purpleToBlue"
                    >
                      Sign Up
                    </Button>
                  </Link>
                }
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={NavLink}
                  to={item.href}
                  style={({ isActive }) => {
                    return {
                      fontSize: "15px",
                      fontWeight: "bold",
                      padding: '7px 13px',
                      display: 'block',
                      textAlign: 'center',
                      color: isActive ? "white" : "#09121c",
                      borderBottom: isActive ? "2px solid #7733ff" : "",
                    };
                  }}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;




