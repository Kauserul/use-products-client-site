import React, { useEffect, useState } from 'react';

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false)
    const [isBuyerLoading, setIsBuyerLoading] = useState(true)
    useEffect( ()=>{
        if(email){
            fetch(`https://second-hand-mobile-server-site.vercel.app/user/buyer/${email}`)
            .then(res => res.json())
            .then(data =>{
                setIsBuyer(true)
                setIsBuyerLoading(false)
            })
        }
    }, [email])
    return [isBuyer, isBuyerLoading]
};

export default useBuyer;