import React from 'react';
import logo from '../../../images/h1-img-1.jpg'

const OurProducts = () => {
    return (
        <div className='mt-24 mb-9'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-14">
                    <img style={{width: "800px", height: "450px"}} src={logo} className="rounded-lg shadow-2xl" alt=''/>
                    <div className='ms-3'>
                        <h1 className="text-5xl font-bold">FURNITURE</h1>
                        <p className="py-6">Ullamcorper eget nulla facilisi etiam dignissim. Tristi que sollicitudin nibh sit amet commodo. Ut porttitor leo dim sollicitudin tempor id eu altricies mi quis hendrerit. Sed id semper risus.</p>
                        <button className="btn btn-primary">View More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProducts;