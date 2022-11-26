import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';
import ProductBooking from './ProductBooking';

const Products = () => {
    const products = useLoaderData()
    const [product, setProduct] = useState('')
    return (
        <div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        setProduct={setProduct}
                    ></Product>)
                }
            </div>
            <ProductBooking
                product={product}
            ></ProductBooking>
        </div>
    );
};

export default Products;