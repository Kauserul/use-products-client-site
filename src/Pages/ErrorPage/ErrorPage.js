import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/404 page.jpg'

const ErrorPage = () => {
    return (
        <div className='flex justify-center align-middle'>
            <div>
                <img style={{ width: '500px' }} src={logo} alt="" />
                <h2 className="text-3xl">Sorry Page not fount. <Link className='text-primary' to='/'>Go to home </Link></h2>
            </div>

        </div>
    );
};

export default ErrorPage;