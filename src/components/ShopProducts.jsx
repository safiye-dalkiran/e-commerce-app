import React from 'react';
import { LayoutGrid, List } from 'lucide-react'; // Lucide ikonları ekledik
import ProductCard from '../components/ProductCard';

function ShopProducts() {
    const products = Array.from({ length: 12 }, (_, i) => i + 1);

    return (
        <section className="py-12 bg-white font-montserrat">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                
                {/* Filtreleme ve Sonuç Çubuğu */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                    <p className="text-[#737373] font-bold text-sm">Showing all 12 results</p>
                    
                    <div className="flex items-center gap-4">
                        <span className="text-[#737373] font-bold text-sm">Views:</span>
                        <div className="flex gap-2">
                            <button className="p-4 border border-[#ECECEC] rounded-md hover:bg-gray-50">
                                <LayoutGrid size={16} className="text-[#252B42]" />
                            </button>
                            <button className="p-4 border border-[#ECECEC] rounded-md hover:bg-gray-50">
                                <List size={16} className="text-[#737373]" />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <select className="bg-[#F9F9F9] border border-[#DDDDDD] text-[#737373] text-sm py-3 px-4 rounded-md outline-none cursor-pointer">
                            <option>Popularity</option>
                            <option>Newest</option>
                            <option>Price: Low to High</option>
                        </select>
                        <button className="bg-[#23A6F0] text-white py-3 px-8 rounded-md font-bold text-sm hover:bg-[#1a8cd8] transition-all">
                            Filter
                        </button>
                    </div>
                </div>

                {/* Ürün Izgarası */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-20">
                    {products.map(p => (
                        <div key={p} className="flex justify-center">
                            <ProductCard
                                product={{
                                    name: 'Graphic Design',
                                    category: 'English Department',
                                    image: `https://picsum.photos/300/400?random=${p + 20}`
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Sayfalama (Pagination) - Görsele Sadık Stil */}
                <div className="flex justify-center mt-16">
                    <div className="flex border border-[#BDBDBD] rounded-md overflow-hidden bg-white shadow-sm">
                        <button className="px-6 py-4 text-[#BDBDBD] font-bold border-r border-[#BDBDBD] hover:bg-[#F3F3F3] transition-colors">First</button>
                        <button className="px-5 py-4 text-[#23A6F0] font-bold border-r border-[#BDBDBD] hover:bg-[#F3F3F3]">1</button>
                        <button className="px-5 py-4 text-white bg-[#23A6F0] font-bold border-r border-[#BDBDBD]">2</button>
                        <button className="px-5 py-4 text-[#23A6F0] font-bold border-r border-[#BDBDBD] hover:bg-[#F3F3F3]">3</button>
                        <button className="px-6 py-4 text-[#23A6F0] font-bold hover:bg-[#F3F3F3]">Next</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShopProducts;