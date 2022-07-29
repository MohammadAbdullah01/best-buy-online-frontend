import React from 'react';
import { Button } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../features/Cart/cartSlice';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Product = ({ product }) => {
    const { price, img, name, seller, ratings, ratingsCount } = product;
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        navigate('/cart')
    }
    return (
        <div className="max-w-sm mx-auto transition ease-in-out delay-150  hover:-translate-y-3   duration-300">
            <div style={{ backgroundColor: "#ECEFF1" }} className='rounded-lg bg-white p-3'>
                <div >
                    <img className='w-4/5 mx-auto' src={img} alt="" />
                </div>
                <div className='text-neutral-700'>
                    <h1 className='text-2xl font-bold'>{name.length > 25 ? name.slice(0, 25) + '...' : name}</h1>
                    <h2>Manufacturer: {seller}</h2>
                    <Rating
                        initialRating={ratings}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                        readonly
                    ></Rating> <span className='text-sm'>({ratingsCount})</span>
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