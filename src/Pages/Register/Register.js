import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const {userRegister, updateUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        const roleInfo = form.info.value

        console.log(name, email, password, roleInfo)
        
        userRegister(email, password)
        .then(result => {
            const user = result.user 
            console.log(user)
            const userInfo = {
                displayName : name
            }
            updateUser(userInfo)
            saveUser(name, email, roleInfo)
            form.reset()
        })
        .catch(err => console.error(err))
    }

    const saveUser = (name, email, role) =>{
        const user = {name, email, role}

        fetch(`https://second-hand-mobile-server-site.vercel.app/user`, {
            method: "POST",
            headers: {
                'content-type' : "application/json"
            },
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div>
            <div className="hero">
                <div className="hero-content ">
                    <div style={{ width: '500px' }} className="card flex-shrink-0 shadow-2xl bg-base-100">
                        <h2 className="text-3xl text-center text-primary mt-6">Sign Up</h2>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="email" className="input input-bordered" />
                            </div>
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
                            <div>
                                <h5 className="text-xl font-bold mb-2 mt-2">Choose one</h5>
                                <div name='' className='flex gap-1'>
                                    <input type="radio" value="seller" name="info"/> Seller
                                    <input type="radio" value="buyer" name="info" /> Buyer
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white">Sign Up</button>
                            </div>
                            <p className='text-dark p-4'>Already have an account? Please <Link to='/login' className='text-success'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;