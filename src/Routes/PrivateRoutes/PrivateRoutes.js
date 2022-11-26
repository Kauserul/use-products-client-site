import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()

    if(user?.email){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;