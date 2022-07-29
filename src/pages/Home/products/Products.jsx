import React, { useEffect } from 'react';
import { useState } from 'react';
// import { useGetAllProductsQuery } from '../../../features/products/productsApi';
import empty from '../../../assets/productempty.svg'
import Product from '../product/Product';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'flowbite-react';
const override = {
    display: "block",
    margin: "8px auto",
    textAlign: 'center'
};

const Products = () => {
    // const { data, error, isLoading } = useGetAllProductsQuery()
    const [searched, setSearched] = useState("")
    const [products, setProducts] = useState([])
    const [dataLoading, setDataLoading] = useState(false)
    const { pathname } = useLocation()
    console.log(pathname);
    useEffect(() => {
        setDataLoading(true)
        fetch(`https://afternoon-eyrie-39455.herokuapp.com/products?name=${searched}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDataLoading(false)
            })
    }, [searched])
    const handleSearch = (e) => {
        setSearched(e.target.value)
    }
    return (
        <div id='products' className=' px-3 md:px-10 lg:px-20 pb-5'>

            <h1 className='text-center font-bold my-9 text-2xl md:text-3xl lg:text-4xl text-white'>Our Latest Arrivals</h1>
            <div className='flex justify-end items-center mb-5'>
                <p className='text-lg mr-1 text-white'>Search by name</p>
                <input onChange={handleSearch} type="text" className='border-solid border-1 border-gray-500 w-32 md:w-52 h-8 focus:border-gray-600' />
            </div>
            {dataLoading && <ScaleLoader style={override} color={"#EFA8BA"} />}
            {pathname === "/" && <>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-5 '>
                    {
                        products?.slice(0, 9)?.map(product => <Product
                            key={product._id}
                            product={product}
                        />)
                    }
                </div>
                <div className='flex justify-end mt-4'>
                    <Link to='/products'>
                        <Button
                            outline={true}
                            gradientDuoTone="purpleToBlue"
                        >
                            SEE MORE
                        </Button>
                    </Link>
                </div>
            </>}
            {pathname === "/products" && <>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-5 '>
                    {
                        products?.map(product => <Product
                            key={product._id}
                            product={product}
                        />)
                    }
                </div>
            </>}
            {((products.length == 0) && searched) && <>
                <div className='w-full'>
                    <h1 className='text-center my-5 text-xl md:text-2xl'>Opps!! No product found</h1>
                    < img src={empty} className='block mx-auto w-3/5 md:w-5/12' alt="" />
                </div>
            </>}

        </div>
    );
};

export default Products;