import { Button, Table } from 'flowbite-react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, clearCart, decreaseQuantity, getTotals, removeFromCart } from '../../features/Cart/cartSlice';
import Header from '../Header/Header';
import cartimg from '../../assets/cart.svg'
import { BiArrowBack } from "react-icons/bi";
import warning from '../../assets/warning.svg'


const Cart = () => {
    const { items: cartItems } = useSelector(state => state.cart)
    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTotals())
    }, [cartItems, dispatch, cart])

    const handleRemoveItem = (item) => {
        dispatch(removeFromCart(item))
    }
    const handleDecreaseQuantity = (item) => {
        dispatch(decreaseQuantity(item))
    }
    const handleIncreaseQuantity = (item) => {
        dispatch(addToCart(item))
    }
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <>
            <Header />
            {cartItems.length == 0
                ?
                <div className='text-center mt-[80px] px-3 md:px-10 lg:px-20 mb-5'>
                    <h1 className='md:text-xl lg:text-2xl'>Your Cart is Empty</h1>
                    <img src={warning} className='w-28 md:w-56 mx-auto my-5' alt="" />
                    <Link to='/'><p className='flex items-center justify-center md:text-xl lg:text-2xl text-neutral-600'> <BiArrowBack className='mr-1 text-neutral-600' />Continue Shopping</p></Link>
                </div>
                :
                <>
                    <div className='md:px-10 lg:px-20 mt-[80px] mb-5'>
                        <div className='w-full flex'>
                            <div className='w-2/6 hidden md:block'>
                                <img className='w-56 lg:w-72 mt-10 mx-auto' src={cartimg} alt="" />
                            </div>
                            <div className='w-full md:w-4/6 ml-auto'>
                                <Table >
                                    <Table.Head style={{ backgroundColor: "#EFA8BA" }}>
                                        <Table.HeadCell>
                                            <span className='text-xl'>Product</span>
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            <span className='text-xl'>Quantity</span>
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            <span className='text-xl'>Total</span>
                                        </Table.HeadCell>
                                    </Table.Head>
                                    {cartItems.map(item => <Table.Body className="divide-y" key={item._id}>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell>
                                                <div className='flex flex-col md:flex-row'>
                                                    <div>
                                                        <img className='w-20' src={item.img} alt="" />
                                                    </div>
                                                    <div className='md:pl-2'>
                                                        <h3>{item.name}</h3>
                                                        <p>Price: {item.price}</p>
                                                        <Button
                                                            onClick={() => handleRemoveItem(item)}
                                                            size="xs"
                                                            color="failure">
                                                            Remove
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <div className='border-solid border border-gray-500 w-24 p-2 text-center'>
                                                    <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                                                    <span className='mx-3'>{item.cartQuantity}</span>
                                                    <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                                                </div>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {item.cartQuantity * item.price}
                                            </Table.Cell>
                                        </Table.Row>

                                    </Table.Body>)}
                                </Table>
                            </div>
                        </div>
                        <div className='flex w-full justify-between md:w-4/6 ml-auto'>
                            <div className='mt-6 ml-1'>
                                <Button
                                    onClick={handleClearCart}
                                    outline={true}
                                    gradientDuoTone="purpleToBlue"
                                >
                                    Clear Cart
                                </Button>
                            </div>
                            <div className='justify-end md:text-xl mr-1'>
                                <div className='flex justify-between mt-6'>
                                    <h2>Subtotal</h2>
                                    <h2>${cart.totalPrice}</h2>
                                </div>
                                <Link to='/checkout'><button style={{ backgroundColor: "#03543F" }} className='py-1 w-full text-white rounded-md my-1'>Check Out</button></Link>
                                <Link to='/' className='text-neutral-600'><p className='flex items-center'> <BiArrowBack className='mr-1' />Continue Shopping</p></Link>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default Cart;