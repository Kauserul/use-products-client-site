import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import Spnner from '../Spnner/Spnner';

const AllSellers = () => {

    const {data: allSeller = [], refetch, isLoading} = useQuery({
        queryKey : ['allseller'],
        queryFn: async () =>{
            const res = await fetch(`https://second-hand-mobile-server-site.vercel.app/allseller`)
            const data = await res.json()
            return data;
        }

    })
    // console.log(allSeller)
    const handleDelete = id =>{
        fetch(`https://second-hand-mobile-server-site.vercel.app/allseller/${id}`, {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch()
                toast.success('User deleted')
            }
        })
    }
    if(isLoading){
        return <Spnner></Spnner>
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
                            allSeller.map((seller, i) => <tr key={i}>
                                <th>{i+1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td><button onClick={()=>handleDelete(seller._id)} className='btn btn-sm btn-success'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;