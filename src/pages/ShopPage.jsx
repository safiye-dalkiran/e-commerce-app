import React from 'react';
import ShopCategories from '../components/Shop/ShopCategories';
import ShopProducts from '../components/Shop/ShopProducts';
import Clients from '../components/Common/Clients';

const ShopPage = () => {
    return (
        <div className="w-full bg-white font-montserrat">
            <div className="flex flex-col">
                <ShopCategories />
                <ShopProducts />
                <Clients />
            </div>
        </div>
    );
};

export default ShopPage;