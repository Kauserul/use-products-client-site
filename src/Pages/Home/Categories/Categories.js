import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoriesProducts from './CategoriesProducts';

const Categories = () => {

    const { data: products = [], } = useQuery({
        queryKey: ['furniture'],
        queryFn: async () => {
            const res = await fetch('https://second-hand-mobile-server-site.vercel.app/furniture')
            const data = await res.json()
            return data
        }
    })

    // console.log(products)

    return (
        <div>
            <h2 className="text-3xl text-center mt-24">There are some Categories</h2>
            <p className='text-center text-xl mt-3 mb-5'>The perfect place for every contemporary furniture store and manufacturer.</p>
            <div className='grid grid-cols-3 gap-4 p-5'>
                {
                    products.map(product => <CategoriesProducts
                        key={product._id}
                        product={product}
                    ></CategoriesProducts>)
                }
            </div>
        </div>
    );
};

export default Categories;