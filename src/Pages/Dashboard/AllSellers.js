import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {

    const {data: allSeller = []} = useQuery({
        queryKey : ['allseller'],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/allseller`)
            const data = await res.json()
            return data;
        }
    })
    // console.log(allSeller)
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
                            allSeller.map((seller, i) => <tr>
                                <th>{i+1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td><button>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;