import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {userLogIn, googleLogIn} = useContext(AuthContext)

    const handleLogIn = e => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        userLogIn(email, password)
        .then(result => {
            const user = result.user 
            console.log(user)
        })
        .catch(err => console.error(err))
    }
    return (
        <div>
            <div className="hero">
                <div style={{ height: '500px', width: "400px" }} className="mt-20">
                    <div className="card flex-shrink-0 shadow-2xl bg-base-100">
                        <h2 className="text-3xl text-center text-primary mt-6">Login</h2>
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white">Login</button>
                                <button onClick={() => googleLogIn()} className="btn btn-success text-white mt-5">Google</button>
                            </div>
                            <p className='text-dark p-4'>Don't have any account? Please <Link to='/register' className='text-success'>Sign up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;