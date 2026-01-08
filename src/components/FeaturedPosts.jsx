import React from 'react'
import { AlarmClock, ChartArea } from 'lucide-react' // Figma'daki ikonlara en yakın olanlar
import PostImg1 from '../images/image8.jpg'
import PostImg2 from '../images/image9.jpg'
import PostImg3 from '../images/image10.jpg'

// Veriyi bileşen dışına alarak temiz bir başlangıç yapıyoruz
const postsData = [
    { id: 1, img: PostImg1 },
    { id: 2, img: PostImg2 },
    { id: 3, img: PostImg3 }
];

function FeaturedPosts() {
    return (
        <section className="py-24 bg-white font-montserrat">
            <div className="max-w-7xl mx-auto px-20 lg:px-12">
                
                {/* Başlık Grubu */}
                <div className="text-center flex flex-col items-center gap-4 mb-20">
                    <h6 className="text-[#23A6F0] font-bold text-sm tracking-wide">Practice Advice</h6>
                    <h2 className="text-[#252B42] text-6xl font-bold tracking-tight">Featured Posts</h2>
                    <p className="text-[#737373] max-w-md text-lg">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>

                {/* Post Kartları: lg:grid-cols-3 ile tam 3 kart yan yana */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postsData.map((p) => (
                        <div key={p.id} className="flex flex-col bg-white shadow-sm border border-[#eee] overflow-hidden">
                            
                            {/* Resim ve Kırmızı Etiket */}
                            <div className="relative h-[300px] w-full">
                                <img src={p.img} alt="Blog" className="w-full h-full object-cover" />
                                <span className="absolute top-5 left-5 bg-[#E74040] text-white px-3 py-1 rounded-sm text-xs font-bold uppercase">
                                    NEW
                                </span>
                            </div>

                            {/* İçerik */}
                            <div className="p-6 flex flex-col gap-4">
                                <div className="flex gap-4 text-xs text-[#737373]">
                                    <span className="text-[#8EC2F2]">Google</span>
                                    <span>Trending</span>
                                    <span>New</span>
                                </div>
                                <h4 className="text-xl text-[#252B42] font-semibold leading-snug">
                                    Loudest à la Madison #1 (L'integral)
                                </h4>
                                <p className="text-[#737373] text-sm leading-relaxed">
                                    We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                                </p>
                                
                                {/* Meta Bilgiler: İkonlar burada değişti */}
                                <div className="flex justify-between items-center py-4 text-xs font-bold text-[#737373]">
                                    <div className="flex items-center gap-2">
                                        {/* Figma'daki mavi saat ikonu */}
                                        <AlarmClock className="text-[#23A6F0]" size={16} /> 
                                        <span className="font-normal text-[#737373]">22 April 2021</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {/* Figma'daki yeşil grafik/yorum ikonu */}
                                        <ChartArea className="text-[#23856D]" size={16} />
                                        <span className="font-normal text-[#737373]">10 comments</span>
                                    </div>
                                </div>

                                <button className="flex items-center gap-2 text-[#737373] font-bold text-sm hover:text-[#23A6F0] transition-colors mt-2 w-fit">
                                    Learn More <span className="text-[#23A6F0] text-xl font-normal">›</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedPosts;