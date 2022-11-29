import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const { data: myOrders = [] } = useQuery({
        queryKey: ['myorder', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myorder?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })
    // console.log(myOrders)
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    {
                        myOrders.length > 0 ?
                            <thead>
                                <tr>
                                    <th>
                                        Delete
                                    </th>
                                    <th>Name</th>
                                    <th>Number</th>
                                    <th>Price</th>
                                    <th>Payment</th>
                                </tr>
                            </thead>
                            :
                            <div>
                                
                            </div>
                    }
                    <tbody>
                        {
                            myOrders.length > 0 ?
                                myOrders.map(order => <tr>
                                    <th>

                                        <button className='btn btn-sm btn-ghost bg-red-500 outline-none'>X</button>

                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={order.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{order.productName}</div>
                                                <div className="text-sm opacity-50">{order.userEmail}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {order.phone}

                                    </td>
                                    <td>{order.productPrice}</td>
                                    <th>
                                        <button className="btn btn-ghost bg-green-500 text-white btn-sm">Pay</button>
                                    </th>
                                </tr>)
                                :
                                <div>
                                    <h2 className="text-3xl">No Product Added</h2>
                                </div>
                        }
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyOrders;