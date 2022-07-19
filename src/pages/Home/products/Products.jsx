import React from 'react';
import { useGetAllProductsQuery } from '../../../features/products/productsApi';
import Product from '../product/Product';

const Products = () => {
    const { data, error, isLoading } = useGetAllProductsQuery()

    return (
        <div id='products' className=' px-5 md:px-10 lg:px-20'>
            <h1 className='text-center font-bold my-9 text-4xl text-white'>Our Latest Models</h1>
            <div>
                {isLoading ?
                    <p>Loading...</p> :
                    error ?
                        <p>An error occurd</p> :
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
                            {
                                data.map(product => <Product
                                    key={product.id}
                                    product={product}
                                />)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default Products;