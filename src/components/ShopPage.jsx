import React from 'react';
import ShopCategories from '../components/ShopCategories';
import ShopProducts from '../components/ShopProducts';     
import Clients from '../components/Clients';              

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