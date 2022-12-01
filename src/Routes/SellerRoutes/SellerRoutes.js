import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useSellers from '../../Hooks/useSellers';
import Spnner from '../../Pages/Spnner/Spnner';

const SellerRoutes = ({children}) => {
    const {user} = useContext(AuthContext)
    const [isSellers, isSellersLoading] = useSellers(user?.email) 
    const location = useLocation()


    if(isSellersLoading){
        return <Spnner></Spnner>
    }

    if(user?.email && isSellers){
        return children;
    }

    

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default SellerRoutes;