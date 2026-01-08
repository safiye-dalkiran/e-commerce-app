import React from 'react'
import ProductCard from '../components/ProductCard'

function FeaturedProducts() {
     const products = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
   <section className="px-6 py-20 max-w-7xl mx-auto w-full font-montserrat">
                {/* Başlık Alanı - Mobil Odaklı */}
                <div className="flex flex-col items-center text-center gap-3 mb-16">
                    <h4 className="text-[#737373] text-xl font-bold uppercase tracking-tight">Featured Products</h4>
                    <h3 className="text-2xl font-bold text-[#252B42] uppercase">BESTSELLER PRODUCTS</h3>
                    <p className="text-[#737373] text-sm max-w-[250px] md:max-w-none">
                        Problems trying to resolve the conflict between
                    </p>
                </div>

                {/* Ürün Kartları */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {products.map(p => (
                        <div key={p} className="flex justify-center">
                            <ProductCard
                                product={{
                                    name: 'Graphic Design',
                                    category: 'English Department',
                                    image: `https://picsum.photos/300/400?random=${p}`
                                }}
                            />
                        </div>
                    ))}
                </div>
            </section>
  )
}

export default FeaturedProducts