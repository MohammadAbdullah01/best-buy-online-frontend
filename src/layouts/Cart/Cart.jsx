import { Table } from 'flowbite-react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { items: cartItems } = useSelector(state => state.cart)
    console.log(cartItems);

    return (
        <>

            {cartItems.length == 0
                ?
                <div className='text-center'>
                    <h1>Your Cart is Empty</h1>
                    <Link to='/'><p> Click to Continue Shopping</p></Link>
                </div>
                :
                <>
                    <Table>
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
                                            <h1>Storage: {item.storage}</h1>
                                        </div>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    {item.price}
                                </Table.Cell>
                                <Table.Cell>
                                    <div className='border-solid border border-gray-500 w-24 p-2 text-center'>
                                        <button>-</button>
                                        <span className='mx-3'>{item.cartQuantity}</span>
                                        <button>+</button>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    {item.cartQuantity * item.price}
                                </Table.Cell>
                            </Table.Row>

                        </Table.Body>)}
                    </Table>
                    <div className='flex w-full justify-end'>
                        <div className='justify-end text-xl mr-5'>
                            <div className='flex justify-between mt-6'>
                                <h2>Subtotal</h2>
                                <h2>$0</h2>
                            </div>
                            <button>Check Out</button>
                            <Link to='/'><p> Click to Continue Shopping</p></Link>
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default Cart;