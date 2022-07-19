import { Button, Table } from 'flowbite-react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, clearCart, decreaseQuantity, getTotals, removeFromCart } from '../../features/Cart/cartSlice';
import Header from '../Header/Header';

const Cart = () => {
    const { items: cartItems } = useSelector(state => state.cart)
    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTotals())
    }, cartItems, dispatch, cart)
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
                <div className='text-center  mt-[64px]'>
                    <h1>Your Cart is Empty</h1>
                    <Link to='/'><p> Click to Continue Shopping</p></Link>
                </div>
                :
                <>
                    <div >
                        <Table className='mt-[64px]'>
                            <Table.Head>
                                <Table.HeadCell>
                                    Product
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Price
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Quantity
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Total
                                </Table.HeadCell>
                            </Table.Head>
                            {cartItems.map(item => <Table.Body className="divide-y" key={item.id}>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        <div className='flex'>
                                            <img className='w-20' src={item.img} alt="" />
                                            <div>
                                                <h1>{item.name}</h1>
                                                <h1
                                                    className='mb-2'
                                                >Storage: {item.storage}</h1>
                                                <Button
                                                    onClick={() => handleRemoveItem(item)}
                                                    size="xs"
                                                    color="dark">
                                                    Remove
                                                </Button>
                                            </div>
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell>
                                        {item.price}
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
                        <div className='flex w-full justify-between '>
                            <div className='mt-6 ml-5'>
                                <Button
                                    onClick={handleClearCart}
                                    outline={true}
                                    gradientDuoTone="purpleToBlue"
                                >
                                    Clear Cart
                                </Button>
                            </div>
                            <div className='justify-end text-xl mr-5'>
                                <div className='flex justify-between mt-6'>
                                    <h2>Subtotal</h2>
                                    <h2>${cart.totalPrice}</h2>
                                </div>
                                <button>Check Out</button>
                                <Link to='/'><p> Click to Continue Shopping</p></Link>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default Cart;