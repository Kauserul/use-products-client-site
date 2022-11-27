import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductBooking = ({ product }) => {
    const { user } = useContext(AuthContext)
    const { name, resale_price, } = product
    
    const handleBooking = e => {
        e.preventDefault()

        const form = e.target;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const productName = form.productName.value;
        const productPrice = form.productPrice.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            userName,
            userEmail,
            productName,
            productPrice,
            phone,
            location
        }

        fetch(`http://localhost:5000/booking`, {
            method : "POST",
            headers: {
                'content-type' : "application/json"
            },
            body : JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('successfully add Product')
            }
        })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking}>
                        <h3 className="text-lg font-bold mb-5">{name}</h3>
                        <input type="text" name='userName' defaultValue={user?.displayName} disabled placeholder="Name" className="input input-bordered w-full mb-5" />
                        <input type="text" name='userEmail' defaultValue={user?.email} disabled placeholder="email" className="input input-bordered w-full mb-5" />
                        <input type="text" name='productName' defaultValue={name} disabled placeholder="item name" className="input input-bordered w-full mb-5" />
                        <input type="text" name='productPrice' defaultValue={resale_price} disabled placeholder="Price" className="input input-bordered w-full mb-5" />
                        <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full mb-5" />
                        <input type="text" name='location' placeholder="Meeting location" className="input input-bordered w-full mb-5" />
                        <input type="submit" className='btn w-full' value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductBooking;