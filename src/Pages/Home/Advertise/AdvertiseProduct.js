import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Product from '../../Products/Product';
import ProductBooking from '../../Products/ProductBooking';

const AdvertiseProduct = () => {
    const { data: advertiseProduct = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch(`https://second-hand-mobile-server-site.vercel.app/advertise`)
            const data = await res.json()
            return data
        }
    })
    console.log(advertiseProduct)
    return (
        <div>
            {
                advertiseProduct.length &&
                <div className='mt-28'>
                    <div className='text-center mb-10'>
                        <h2 className="text-4xl mb-3">Advertise To Your Product</h2>
                        <p className='text-xl'>The perfect place for every contemporary furniture store and manufacturer.</p>
                    </div>
                    <div className='grid grid-cols-3 gap-6'>
                        {
                            advertiseProduct.map(product => <Product
                                key={product._id}
                                product={product}Auth
                            ></Product>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default AdvertiseProduct;