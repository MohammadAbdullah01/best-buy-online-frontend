import React from 'react';
import { Card } from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getTotals } from '../../../features/Cart/cartSlice';


const Product = ({ product }) => {
    const { id, price, img, name, storage } = product;
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        navigate('/cart')
    }

    return (
        <div className="max-w-sm mx-auto">
            <Card
                imgAlt={name}
                imgSrc={img}
            >
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Storage: <span className='text-slate-600'>{storage}</span>
                </h5>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        ${price}
                    </span>
                    <button
                        onClick={() => handleAddToCart(product)}
                        to="#"
                        className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to Cart
                    </button>
                </div>
            </Card>
        </div>
    );
};

export default Product;