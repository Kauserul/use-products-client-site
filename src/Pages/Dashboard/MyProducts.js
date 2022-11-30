import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyProducts = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://second-hand-mobile-server-site.vercel.app/addproduct`)
            const data = await res.json()
            return data
        }
    })

    const handleAdvertise = product =>{
        fetch(`https://second-hand-mobile-server-site.vercel.app/advertise`, {
            method : "POST",
            headers : {
                'content-type' : "application/json"
            },
            body : JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Price </th>
                            <th>Advertise</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <tr key={product._id}>
                               
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="w-20 h-20">
                                                <img src={product.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{product.name}</div>
                                            <div className="text-sm opacity-50">$ {product.resale_price}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>$ {product.resale_price}</td>
                                <td>
                                    
                                    <button onClick={()=>handleAdvertise(product)} className="btn btn-ghost btn-xs bg-green-500">Advertise</button>
                                </td>
                                
                                <th>
                                    <button className="btn btn-ghost btn-xs bg-red-500">Detele</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;