import React from 'react';
import { Button, Card } from 'flowbite-react'
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
            <div className='rounded-lg bg-white p-3'>
                <div >
                    <img className='w-3/5 mx-auto' src={img} alt="" />
                </div>
                <div className='text-neutral-700'>
                    <h1 className='text-2xl font-bold'>{name}</h1>
                    <h2>Storage: {storage}</h2>
                    <div className='flex justify-between mt-4 items-center'>
                        <h2 className='text-xl font-semibold text-red-500'>${price}</h2>
                        <Button
                            onClick={() => handleAddToCart(product)}
                            color="success">
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;