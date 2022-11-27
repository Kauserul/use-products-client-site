import React from 'react';

const AddAProduct = () => {
    return (
        <form className="card-body w-1/2">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Product Name</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="text" name='price' placeholder="password" className="input input-bordered" />

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Mobile Number</span>
                </label>
                <input type="text" name='number' placeholder="password" className="input input-bordered" />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Location</span>
                </label>
                <input type="text" name='location' placeholder="password" className="input input-bordered" />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">product category</span>
                </label>
                <input type="text" name='category' placeholder="password" className="input input-bordered" />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">description</span>
                </label>
                <input type="text" name='description' placeholder="password" className="input input-bordered" />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Year of purchasey</span>
                </label>
                <input type="text" name='year' placeholder="password" className="input input-bordered" />
            </div>

            <div className="form-control mt-6">
                <button className="btn btn-primary text-white">Login</button>
                
            </div>
            
        </form>
    );
};

export default AddAProduct;