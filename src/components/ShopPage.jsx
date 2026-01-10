import React from 'react';
import ShopCategories from '../components/ShopCategories'; // Az önce yaptığımız kategori kartları
import ShopProducts from '../components/ShopProducts';     // ProductCard içeren liste
import Clients from '../components/Clients';               // Gri logo bandı (Henüz yapmadıysak aşağıda ekledim)

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