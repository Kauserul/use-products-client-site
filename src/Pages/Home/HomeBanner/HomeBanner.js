import React from 'react';
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div className='banner flex justify-center align-center mt-5'>
            <div className='text-white banner-des'>
                <h2 className="text-4xl font-bold mb-4">Welcome to largest Classified marketplace of Bangladesh</h2>
                <p className='text-2xl text-center'>Find your favorite product from around 250,000 products!</p>
            </div>
        </div>
    );
};

export default HomeBanner;