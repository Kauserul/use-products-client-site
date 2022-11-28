import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useSellers from '../../Hooks/useSellers';

const SellerRoutes = ({children}) => {
    const {user} = useContext(AuthContext)
    const [isSellers, isSellersLoading] = useSellers(user?.email) 
    const location = useLocation()


    if(isSellersLoading){
        return <div>Loading...</div>
    }

    if(user?.email && isSellers){
        return children;
    }

    

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default SellerRoutes;