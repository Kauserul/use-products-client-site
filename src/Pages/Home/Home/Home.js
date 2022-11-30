import React from 'react';

import AdvertiseProduct from '../Advertise/AdvertiseProduct';
import Categories from '../Categories/Categories';
import HomeBanner from '../HomeBanner/HomeBanner';
import OurProducts from '../OurProducts/OurProducts';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <AdvertiseProduct></AdvertiseProduct>
            <Categories></Categories>
            <OurProducts></OurProducts>
            
        </div>
    );
};

export default Home;