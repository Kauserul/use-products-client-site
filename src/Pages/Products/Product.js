import React from 'react';

const Product = ({ product, setProduct }) => {
    const { img, name, location, original_price, post, resale_price, used, sellers_name } = product
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img style={{ height: "300px" }} src={img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">Name : {name}</h2>
                    {
                        <p><span className='font-bold'>Seller Name</span> : {sellers_name}</p>
                    }
                    <p><span className='font-bold'>Location</span> : {location}</p>
                    <p><span className='font-bold'>Resale Price</span> : $ {resale_price}</p>
                    <p><span className='font-bold'>Original Price</span> : $ {original_price}</p>
                    <p><span className='font-bold'>Used</span> : {used}</p>
                    <p><span className='font-bold'>Posted</span> : {post}</p>
                    <div className="card-actions justify-end">
                        <label onClick={() => setProduct(product)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;