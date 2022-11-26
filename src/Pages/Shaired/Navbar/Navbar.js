import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Navbar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    {/* <li>{user}</li> */}
                    <li><Link to='/login'><button className='btn text-white'>Log In</button></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;