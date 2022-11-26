import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ProductBooking = ({product}) => {
    const {user} = useContext(AuthContext)
    const {name,resale_price,} = product
    console.log(product)
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-5">{name}</h3>
                    <input type="text" placeholder="Name" className="input input-bordered w-full mb-5" />
                    <input type="text" defaultValue={user.email} disabled placeholder="email" className="input input-bordered w-full mb-5" />
                    <input type="text" defaultValue={name} disabled placeholder="item name" className="input input-bordered w-full mb-5" />
                    <input type="text" defaultValue={resale_price} disabled placeholder="Price" className="input input-bordered w-full mb-5" />
                    <input type="text" placeholder="Phone" className="input input-bordered w-full mb-5" />
                    <input type="text" placeholder="Meeting location" className="input input-bordered w-full mb-5" />
                    <input type="submit" className='btn w-full' value="Submit" />
                </div>
            </div>
        </div>
    );
};

export default ProductBooking;