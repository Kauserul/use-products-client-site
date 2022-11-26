import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoriesProducts from './CategoriesProducts';

const Categories = () => {

    const { data: products = [], } = useQuery({
        queryKey: ['furniture'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/furniture')
            const data = await res.json()
            return data
        }
    })

    console.log(products)

    return (
        <div>
            <h2 className="text-3xl">This is categorires</h2>
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