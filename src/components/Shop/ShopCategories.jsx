import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ShopCategories = () => {
    const categories = useSelector((state) => state.product.categories);
    const top5Categories = [...categories].sort((a, b) => b.rating - a.rating).slice(0, 5);

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
                    {top5Categories.map((cat) => {
                        const gender = cat.code.startsWith('k:') ? 'kadin' : 'erkek';
                        return (
                            <Link
                                key={cat.id}
                                to={`/shop/${gender}/${cat.title.toLowerCase()}/${cat.id}`}
                                className="relative group cursor-pointer overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[220px]"
                            >
                                <img
                                    src={cat.img}
                                    alt={cat.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Görsel Üzerindeki Yazılar */}
                                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                                    <h4 className="font-bold text-base uppercase tracking-wider mb-1">{cat.title}</h4>
                                    <p className="text-sm font-normal">Rating: {cat.rating}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ShopCategories;