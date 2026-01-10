import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '.././data'; // Verilerin geldiğinden emin ol
import Clients from './Clients';
import ProductCard from './ProductCard';

const ProductDetail = () => {
  const { productId } = useParams();

  // URL'deki ID ile eşleşen ürünü bul, yoksa ilk ürünü göster
  const product = products.find(p => p.id === parseInt(productId)) || products[0];

  // Alt kısımdaki Bestseller Products için 8 ürünlük liste
  const bestsellerProducts = products.slice(0, 8);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  return (
    <div className="w-full bg-[#FAFAFA] font-montserrat">
      {/* 1. Breadcrumb - Navigasyon Yolu */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6 flex items-center gap-4 text-sm font-bold">
        <Link to="/" className="text-[#252B42]">Home</Link>
        <i className="fas fa-chevron-right text-[#BDBDBD] text-xs"></i>
        <Link to="/shop" className="text-[#BDBDBD]">Shop</Link>
        <i className="fas fa-chevron-right text-[#BDBDBD] text-xs"></i>
        <span className="text-[#BDBDBD]">{product.name}</span>
      </div>

      {/* 2. Ürün Detay Ana Bölüm */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-12">
        <div className="flex flex-col md:flex-row gap-12 bg-white p-4 md:bg-transparent md:p-0 rounded-sm">
          
          {/* Sol: Ürün Görselleri */}
          <div className="flex-1">
            <div className="relative aspect-[4/5] w-full mb-4 group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover rounded-sm shadow-sm"
              />
              <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl opacity-70 hover:opacity-100">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl opacity-70 hover:opacity-100">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="flex gap-4">
              <img src={product.image} className="w-24 h-24 object-cover rounded-sm border-2 border-[#23A6F0] cursor-pointer" />
              <img src={product.image} className="w-24 h-24 object-cover rounded-sm opacity-50 hover:opacity-100 cursor-pointer" />
            </div>
          </div>

          {/* Sağ: Bilgi ve Aksiyon Alanı */}
          <div className="flex-1 flex flex-col gap-4 py-4">
            <h2 className="text-2xl text-[#252B42] font-normal tracking-wide">{product.name}</h2>
            <div className="flex items-center gap-2">
              <div className="flex text-[#F3CD03] gap-1">
                {[...Array(5)].map((_, i) => (
                    <i key={i} className={i < (product.stars || 4) ? "fas fa-star" : "far fa-star"}></i>
                ))}
              </div>
              <span className="text-[#737373] font-bold text-sm">{product.reviews || 10} Reviews</span>
            </div>
            <div className="text-2xl font-bold text-[#252B42] tracking-tight">{product.price}</div>
            <div className="flex gap-2 text-sm font-bold">
              <span className="text-[#737373]">Availability :</span>
              <span className="text-[#23A6F0]">In Stock</span>
            </div>
            <p className="text-[#858585] text-sm leading-relaxed mt-4 max-w-md">
              {product.description}
            </p>
            <hr className="border-[#BDBDBD] my-6" />
            
            {/* Renk Seçenekleri - Görseldeki Renkler */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#23A6F0] cursor-pointer ring-offset-2 hover:ring-2 ring-[#23A6F0]"></div>
              <div className="w-8 h-8 rounded-full bg-[#23856D] cursor-pointer ring-offset-2 hover:ring-2 ring-[#23856D]"></div>
              <div className="w-8 h-8 rounded-full bg-[#E77C40] cursor-pointer ring-offset-2 hover:ring-2 ring-[#E77C40]"></div>
              <div className="w-8 h-8 rounded-full bg-[#252B42] cursor-pointer ring-offset-2 hover:ring-2 ring-[#252B42]"></div>
            </div>

            {/* Aksiyon Butonları */}
            <div className="flex items-center gap-3 mt-8">
              <button className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold text-sm uppercase hover:shadow-lg transition-all active:scale-95">
                Select Options
              </button>
              <div className="flex gap-2">
                <button className="w-10 h-10 border border-[#E8E8E8] bg-white rounded-full flex items-center justify-center text-[#252B42] hover:bg-[#F3F3F3]">
                  <i className="far fa-heart"></i>
                </button>
                <button className="w-10 h-10 border border-[#E8E8E8] bg-white rounded-full flex items-center justify-center text-[#252B42] hover:bg-[#F3F3F3]">
                  <i className="fas fa-shopping-cart"></i>
                </button>
                <button className="w-10 h-10 border border-[#E8E8E8] bg-white rounded-full flex items-center justify-center text-[#252B42] hover:bg-[#F3F3F3]">
                  <i className="fas fa-eye"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Açıklama Tab Alanı */}
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto px-6 py-12 border-t border-[#ECECEC]">
            <div className="flex justify-center gap-12 text-sm font-bold text-[#737373] mb-12">
                <span className="cursor-pointer border-b-2 border-[#23A6F0] pb-2 text-[#23A6F0]">Description</span>
                <span className="cursor-pointer hover:text-[#23A6F0] pb-2">Additional Information</span>
                <span className="cursor-pointer hover:text-[#23A6F0] pb-2">Reviews (0)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
                <div className="w-full aspect-[4/5] bg-[#E8E8E8] rounded-md overflow-hidden shadow-sm">
                    <img src={product.image} alt="Detail" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-bold text-[#252B42]">the quick fox jumps over</h3>
                    <p className="text-[#737373] text-sm leading-relaxed">{product.description}</p>
                </div>
                <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-bold text-[#252B42]">the quick fox jumps over</h3>
                    <ul className="flex flex-col gap-3 text-sm font-bold text-[#737373]">
                        <li><i className="fas fa-chevron-right mr-2 text-xs"></i> the quick fox jumps over the lazy dog</li>
                        <li><i className="fas fa-chevron-right mr-2 text-xs"></i> the quick fox jumps over the lazy dog</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>

      {/* 4. Bestseller Products */}
      <section className="bg-[#FAFAFA] py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <h3 className="text-2xl font-bold text-[#252B42] mb-10 pb-6 border-b border-[#ECECEC] uppercase">Bestseller Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {bestsellerProducts.map((p) => (
                    <div key={p.id} className="bg-white">
                        <ProductCard product={p} />
                    </div>
                ))}
            </div>
        </div>
        <Clients />
      </section>
    </div>
  );
};

export default ProductDetail;