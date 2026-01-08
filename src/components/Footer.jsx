import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full px-6 bg-white font-montserrat">

            <div className="bg-[#FAFAFA]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>
                    <div className="flex gap-4 mt-4 md:mt-0 text-[#23A6F0]">
                        <Facebook size={24} className="cursor-pointer hover:text-[#252B42] transition-colors" />
                        <Instagram size={24} className="cursor-pointer hover:text-[#252B42] transition-colors" />
                        <Twitter size={24} className="cursor-pointer hover:text-[#252B42] transition-colors" />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
               
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

                    {['Company Info', 'Legal', 'Features', 'Resources'].map((title) => (
                        <div key={title} className="flex flex-col gap-4">
                            <h5 className="font-bold text-[#252B42] text-base">{title}</h5>
                            <nav className="flex flex-col gap-3 text-[#737373] font-bold text-sm">
                                <a href="#" className="hover:text-[#23A6F0]">About Us</a>
                                <a href="#" className="hover:text-[#23A6F0]">Carrier</a>
                                <a href="#" className="hover:text-[#23A6F0]">We are hiring</a>
                                <a href="#" className="hover:text-[#23A6F0]">Blog</a>
                            </nav>
                        </div>
                    ))}

                    <div className="flex flex-col gap-4 lg:col-span-2 w-full">
                        <h5 className="font-bold text-[#252B42] text-base">Get In Touch</h5>
                        <div className="flex flex-row w-full h-auto sm:h-14 overflow-hidden rounded-md border border-[#E6E6E6]">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="bg-[#F9F9F9] px-4 py-4 sm:py-0 flex-1 outline-none text-[#737373] text-sm min-w-0"
                            />
                            <button className="bg-[#23A6F0] text-white px-6 py-4 sm:py-0 text-sm font-normal hover:bg-[#1a8cd8] transition-all whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-[#737373] text-xs tracking-tight">Lore impum dolor amit</p>
                    </div>

                </div>
            </div>
           <div className="bg-[#FAFAFA]">
                <div className="max-w-7xl mx-auto px-6 py-10 lg:py-6">
                    {/* flex-col mobilde alt alta, lg:flex-row masaüstünde yan yana sağlar */}
                    <p className="text-[#737373] font-bold text-sm text-center lg:text-left flex flex-col lg:flex-row gap-1 leading-relaxed">
                        <span>Made With Love By</span>
                        <span>Finland All Right Reserved</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;