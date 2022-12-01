import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddAProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imgHostKey = process.env.REACT_APP_imgbb_key
    // console.log(imgHostKey)

    const handleAddProduct = data => {
        const photo = data.photo[0]
        const formData = new FormData()
        formData.append('image', photo)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {
                    const product = {
                        name : data.name,
                        location : data.location,
                        resale_price : data.resaleprice,
                        original_price: data.originalprice,
                        img: imgData.data.url,
                        used: data.purchase,
                        category: data.category
                    }
                    fetch(`http://localhost:5000/addproduct`, {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                    .then(res => res.json())
                    .then(data =>{
                        if(data.acknowledged){
                            toast.success('Product added')
                            
                        }
                    })
                }
            })
    }
    return (
        <div className='w-3/5 p-6'>
            <h2 className="text-3xl text-center mb-3">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className='flex gap-10'>
                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Product Name</span></label>
                            <input type="text" {...register("name", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Original Price</span></label>
                            <input type="text" {...register("originalprice", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Resale Price</span></label>
                            <input type="text" {...register("resaleprice", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Condition Type</span></label>
                            <select {...register('condition')} className="select select-bordered w-full max-w-xs">
                                <option>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Mobile Number</span></label>
                            <input type="text" {...register("number", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                    </div>
                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Location </span></label>
                            <input type="text" {...register("location", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">product category</span></label>
                            <select {...register('category')} className="select select-bordered w-full max-w-xs">
                                <option>Bed Room</option>
                                <option>Kitchen Room</option>
                                <option>Dinning Room</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Description</span></label>
                            <input type="text" {...register("des", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text"> Year of Purchase</span></label>
                            <input type="text" {...register("purchase", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Product Photo</span></label>
                            <input type="file" {...register("photo", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                </div>
                <input className='btn btn-accent w-full mt-4 text-white' value="Add A Product" type="submit" />

            </form>
        </div>
    );
};

export default AddAProduct;