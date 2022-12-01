import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportedItems = () => {
    const {data : reportedProducts = []} = useQuery({
        queryKey: ['reportedproducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/reporteditems`)
            const data = await res.json()
            return data
        }
    })
    const handleDelete = id => {
        fetch(`http://localhost:5000/reporteditems/${id}`, {
            method: "DELETE"
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
                            <th>Price</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reportedProducts.map(product => <tr>
                                
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask  w-20 h-20">
                                                <img src={product.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{product.name}</div>
                                            <div className="text-sm opacity-50">{product.sellers_name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{product.resale_price}</td>
                                
                                <th>
                                    <button onClick={()=>handleDelete(product._id)} className="btn btn-ghost btn-xs bg-red-500">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                    
                    

                </table>
            </div>
        </div>
    );
};

export default ReportedItems;