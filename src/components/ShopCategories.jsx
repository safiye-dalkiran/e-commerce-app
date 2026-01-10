import React from 'react';

const categories = [
    { id: 1, name: 'CLOTHS', items: '5 Items', img: 'https://picsum.photos/400/500?random=11' },
    { id: 2, name: 'CLOTHS', items: '5 Items', img: 'https://picsum.photos/400/500?random=12' },
    { id: 3, name: 'CLOTHS', items: '5 Items', img: 'https://picsum.photos/400/500?random=13' },
    { id: 4, name: 'CLOTHS', items: '5 Items', img: 'https://picsum.photos/400/500?random=14' },
    { id: 5, name: 'CLOTHS', items: '5 Items', img: 'https://picsum.photos/400/500?random=15' },
];

const ShopCategories = () => {
    return (
        <section className="bg-[#FAFAFA] py-8 w-full font-montserrat">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                
                {/* Başlık ve Breadcrumb Alanı */}
                <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4 mb-8">
                    <h2 className="text-2xl font-bold text-[#252B42]">Shop</h2>
                    <div className="flex items-center gap-2 text-sm font-bold">
                        <span className="text-[#252B42]">Home</span>
                        <span className="text-[#BDBDBD] font-normal text-xl">›</span>
                        <span className="text-[#BDBDBD]">Shop</span>
                    </div>
                </div>

                {/* 5'li Kategori Kartları */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {categories.map((cat) => (
                        <div key={cat.id} className="relative group cursor-pointer overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[220px]">
                            <img 
                                src={cat.img} 
                                alt={cat.name} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Görsel Üzerindeki Yazılar */}
                            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                                <h4 className="font-bold text-base uppercase tracking-wider mb-1">{cat.name}</h4>
                                <p className="text-sm font-normal">{cat.items}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShopCategories;