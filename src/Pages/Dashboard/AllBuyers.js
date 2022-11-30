import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';

const AllBuyers = () => {

    const {data: allBuyer = [], refetch} = useQuery({
        queryKey: ['allbuyer'],
        queryFn: async () =>{
            const res = await fetch('https://second-hand-mobile-server-site.vercel.app/allbuyer')
            const data = await res.json()
            return data
        }
    })

    const handleBuyerDelete = (id) =>{
        fetch(`https://second-hand-mobile-server-site.vercel.app/allbuyer/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount){
                refetch()
                toast.success('User Deleted')
            }
        })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBuyer.map((buyer, i) =><tr key={i}>
                            <th>{i+1}</th>
                            <td>{buyer.name}</td>
                            <td>{buyer.email}</td>
                            <td><button onClick={()=>handleBuyerDelete(buyer._id)} className='btn btn-sm btn-success'>Delete</button></td>
                        </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;