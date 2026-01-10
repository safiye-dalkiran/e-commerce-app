import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-white font-montserrat">
            {/* 1. Üst Kısım: Bandage Logosu ve Sosyal Medya */}
            <div className="bg-[#FAFAFA]">
                {/* max-w-[1440px] ile Header ve ShopCategories ile aynı hizaya getiriyoruz */}
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>
                    {/* Font Awesome Marka İkonları */}
                    <div className="flex gap-5 mt-4 md:mt-0 text-[#23A6F0]">
                        <i className="fab fa-facebook text-2xl cursor-pointer hover:text-[#252B42] transition-colors"></i>
                        <i className="fab fa-instagram text-2xl cursor-pointer hover:text-[#252B42] transition-colors"></i>
                        <i className="fab fa-twitter text-2xl cursor-pointer hover:text-[#252B42] transition-colors"></i>
                    </div>
                </div>
            </div>

            {/* 2. Orta Kısım: Linkler ve Bülten */}
            <div className="bg-white">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {['Company Info', 'Legal', 'Features', 'Resources'].map((title) => (
                            <div key={title} className="flex flex-col gap-5">
                                <h5 className="font-bold text-[#252B42] text-base">{title}</h5>
                                <nav className="flex flex-col gap-3 text-[#737373] font-bold text-sm">
                                    <a href="#" className="hover:text-[#23A6F0]">About Us</a>
                                    <a href="#" className="hover:text-[#23A6F0]">Carrier</a>
                                    <a href="#" className="hover:text-[#23A6F0]">We are hiring</a>
                                    <a href="#" className="hover:text-[#23A6F0]">Blog</a>
                                </nav>
                            </div>
                        ))}

                        {/* Bülten (Newsletter) Bölümü */}
                        <div className="flex flex-col gap-5 lg:col-span-2 w-full">
                            <h5 className="font-bold text-[#252B42] text-base">Get In Touch</h5>
                            <div className="flex flex-row w-full h-14 overflow-hidden rounded-md border border-[#E6E6E6]">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="bg-[#F9F9F9] px-4 flex-1 outline-none text-[#737373] text-sm min-w-0"
                                />
                                <button className="bg-[#23A6F0] text-white px-6 text-sm font-normal hover:bg-[#1a8cd8] transition-all whitespace-nowrap">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-[#737373] text-xs font-normal">Lore impum dolor amit</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Alt Kısım: Copyright */}
            <div className="bg-[#FAFAFA]">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6">
                    <p className="text-[#737373] font-bold text-sm text-center lg:text-left leading-relaxed">
                        Made With Love By Finland All Right Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;