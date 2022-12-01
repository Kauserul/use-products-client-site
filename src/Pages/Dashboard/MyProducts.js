import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AddAProduct from './AddAProduct';

const MyProducts = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/addproduct`)
            const data = await res.json()
            return data
        }
    })

    const handleAdvertise = product => {
        fetch(`http://localhost:5000/advertise`, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    const handleDelete = id => {
        fetch(`http://localhost:5000/myorder/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        console.log(id)
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {
                        AddAProduct.length > 0 &&

                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Available</th>
                                <th>Advertise</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    }
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
                                <td>Available</td>
                                <td>

                                    <button onClick={() => handleAdvertise(product)} className="btn btn-ghost btn-xs bg-green-500">Advertise</button>
                                </td>

                                <th>
                                    <button onClick={() => handleDelete(product._id)} className="btn btn-ghost btn-xs bg-red-500">Delete</button>
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