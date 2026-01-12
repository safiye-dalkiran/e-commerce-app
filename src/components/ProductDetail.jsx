import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data';
import Clients from '../components/Clients';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
    const { productId } = useParams();
    const product = data.productSection.find(p => p.id === parseInt(productId)) || data.productSection[0];
    const bestsellerProducts = data.productSection;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [productId]);

    return (
        <div className="w-full bg-[#FAFAFA] font-montserrat">
            {/* 1. Breadcrumb */}
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6 flex items-center gap-4 text-sm font-bold text-[#252B42]">
                <Link to="/">Home</Link>
                <i className="fas fa-chevron-right text-[#BDBDBD] text-xs"></i>
                <Link to="/shop" className="text-[#BDBDBD]">Shop</Link>
                <i className="fas fa-chevron-right text-[#BDBDBD] text-xs"></i>
                <span className="text-[#BDBDBD]">{product.name}</span>
            </div>

            {/* 2. Üst Ürün Bölümü */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-12">
                <div className="flex flex-col md:flex-row gap-12 bg-white p-4 md:bg-transparent md:p-0 rounded-sm">
                    <div className="flex-1">
                        <div className="relative aspect-[4/5] w-full mb-4 group">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-sm shadow-sm" />
                            {/* Figma Okları */}
                            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl opacity-70 hover:opacity-100">
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl opacity-70 hover:opacity-100">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                        <div className="flex gap-4">
                            {product.thumbnails && product.thumbnails.map((img, index) => (
                                <img key={index} src={img} className="w-24 h-24 object-cover border-2 border-transparent hover:border-[#23A6F0] cursor-pointer" alt="thumb" />
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-4 py-4">
                        <h2 className="text-2xl text-[#252B42] font-normal">{product.name}</h2>
                        <div className="flex items-center gap-2">
                            <div className="flex text-[#F3CD03] gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className={i < (product.stars || 4) ? "fas fa-star" : "far fa-star"}></i>
                                ))}
                            </div>
                            <span className="text-[#737373] font-bold text-sm">{product.reviews} Reviews</span>
                        </div>
                        <div className="text-2xl font-bold text-[#252B42]">${product.price}</div>
                        <div className="flex gap-2 text-sm font-bold">
                            <span className="text-[#737373]">Availability :</span>
                            <span className="text-[#23A6F0]">{product.availability}</span>
                        </div>
                        <p className="text-[#858585] text-sm leading-relaxed mt-4 max-w-md">{product.description}</p>
                        <hr className="border-[#BDBDBD] my-6" />
                        <div className="flex gap-3">
                            {product.colors && product.colors.map((color, index) => (
                                <div key={index} className="w-8 h-8 rounded-full cursor-pointer hover:ring-2 ring-offset-2" style={{ backgroundColor: color }}></div>
                            ))}
                        </div>
                        <div className="flex items-center gap-3 mt-8">
                            <button className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold text-sm uppercase">Select Options</button>
                            <div className="flex gap-2 text-[#252B42]">
                                <button className="w-10 h-10 border border-[#E8E8E8] bg-white rounded-full flex items-center justify-center hover:bg-gray-100"><i className="far fa-heart"></i></button>
                                <button className="w-10 h-10 border border-[#E8E8E8] bg-white rounded-full flex items-center justify-center hover:bg-gray-100"><i className="fas fa-shopping-cart"></i></button>
                                <button className="w-10 h-10 border border-[#E8E8E8] bg-white rounded-full flex items-center justify-center hover:bg-gray-100"><i className="fas fa-eye"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FIGMA ORTA BÖLÜM (Tabs & Content) */}
            <section className="bg-white">
                <div className="max-w-[1440px] mx-auto">
                    {/* Tab Linkleri */}
                    <div className="flex justify-center gap-8 py-6 text-sm font-bold text-[#737373] border-b border-[#ECECEC]">
                        <span className="cursor-pointer border-b-2 border-transparent hover:border-[#23A6F0] pb-4">Description</span>
                        <span className="cursor-pointer border-b-2 border-transparent hover:border-[#23A6F0] pb-4">Additional Information</span>
                        <span className="cursor-pointer border-b-2 border-transparent hover:border-[#23A6F0] pb-4">Reviews (0)</span>
                    </div>

                    {/* İçerik Alanı */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-6 lg:px-12 py-12">
                        {/* Görsel Sütunu */}
                        <div className="w-full h-[400px] bg-[#C4C4C4] rounded-md overflow-hidden shadow-lg">
                            <img src={product.image} alt="content" className="w-full h-full object-cover" />
                        </div>

                        {/* Metin Sütunu */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold text-[#252B42]">the quick fox jumps over</h3>
                            <p className="text-[#737373] text-sm leading-relaxed">
                                Met minim mollie non desert Alamo est sit cliquey dolor do met sent. 
                                RELIT official consequent door ENIM RELIT Mollie. Excitation venial 
                                consequent sent nostrum met.
                            </p>
                            <p className="text-[#737373] text-sm border-l-4 border-[#23856D] pl-4">
                                "Excitation venial consequent sent nostrum met."
                            </p>
                        </div>

                        {/* Liste Sütunu */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold text-[#252B42]">the quick fox jumps over</h3>
                            <div className="flex flex-col gap-3">
                                {product.specifications?.map((spec, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-sm font-bold text-[#737373]">
                                        <i className="fas fa-chevron-right text-xs text-[#BDBDBD]"></i>
                                        <span>{spec}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Bestseller ve Logo Bandı */}
            <section className="bg-[#FAFAFA] py-20">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <h3 className="text-2xl font-bold text-[#252B42] mb-10 pb-6 border-b border-[#ECECEC] uppercase">Bestseller Products</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {bestsellerProducts.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>
                <div className="py-12">
                   <Clients />
                </div>
            </section>
        </div>
    );
};

export default ProductDetail;