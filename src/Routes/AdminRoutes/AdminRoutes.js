import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';

const AdminRoutes = ({children}) => {
    const {user} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email) 
    const location = useLocation()

    if(isAdminLoading){
        return <div>Loading...</div>
    }

    if(user?.email && isAdmin){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoutes;