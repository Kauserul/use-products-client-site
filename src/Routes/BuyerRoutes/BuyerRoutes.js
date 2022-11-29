import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useBuyer from '../../Hooks/useBuyer';

const BuyerRoutes = ({children}) => {
    const {user} = useContext(AuthContext)
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email)
    const location = useLocation()

    if(isBuyerLoading){
        return <div>Loading...</div>
    }

    if(user?.email && isBuyer){
        return children
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default BuyerRoutes;