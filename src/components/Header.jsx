import { useState } from 'react';
import { Phone, Mail, Instagram, Youtube, Facebook, Twitter, Search, ShoppingCart, Heart, User, ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex flex-col w-full font-montserrat sticky top-0 z-[100] bg-white shadow-sm">
            
            <div className="hidden lg:flex bg-[#252B42] text-white px-8 py-3 justify-between items-center text-sm font-bold">
                <div className="flex gap-6">
                    <div className="flex items-center gap-2"><Phone size={16} /> (225) 555-0118</div>
                    <div className="flex items-center gap-2"><Mail size={16} /> michelle.rivera@example.com</div>
                </div>
                <div>Follow Us and get a chance to win 80% off</div>
                <div className="flex items-center gap-3">
                    <span>Follow Us :</span>
                    <div className="flex gap-2">
                        <Instagram size={16} /> <Youtube size={16} /> <Facebook size={16} /> <Twitter size={16} />
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="flex items-center justify-between px-6 py-6 lg:py-4 lg:px-8 bg-white">
                <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex gap-6 text-[#737373] font-bold items-center">
                    <li><a href="/" className="text-[#252B42]">Home</a></li>
                    <li className="group relative py-4">
                        <div className="flex items-center gap-1 cursor-pointer group-hover:text-[#23A6F0] transition-colors">
                            Shop <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                        </div>
                        <div className="absolute top-full left-0 hidden group-hover:flex bg-white shadow-xl border border-gray-100 p-8 z-[100] min-w-[350px] gap-12 rounded-sm mt-1">
                            <div className="flex flex-col gap-4">
                                <h4 className="text-[#252B42] font-bold text-lg">Kadın</h4>
                                <div className="flex flex-col gap-3 text-sm font-medium text-[#737373]">
                                    <a href="#" className="hover:text-[#23A6F0]">Bags</a>
                                    <a href="#" className="hover:text-[#23A6F0]">Belts</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Pages</li>
                </ul>

                {/* Action Icons*/}
                <div className="flex items-center gap-4 sm:gap-6 text-[#252B42] lg:text-[#23A6F0] font-bold">
                    
                    {/* Profil İkonu*/}
                    <div className="flex items-center gap-1 cursor-pointer">
                        <User size={24} className="lg:w-[18px]" /> 
                        <span className="hidden lg:inline text-sm font-bold">Login / Register</span>
                    </div>

                    <Search size={24} className="lg:w-[18px] cursor-pointer" />
                    
                    <div className="flex items-center gap-1 cursor-pointer">
                        <ShoppingCart size={24} className="lg:w-[18px]" />
                        <span className="text-xs font-normal lg:font-bold">1</span>
                    </div>

                    <div className="hidden lg:flex items-center gap-1 cursor-pointer">
                        <Heart size={18} />
                        <span>1</span>
                    </div>
                    
                    {/* Hamburger Menu (Mobile Only) */}
                    <button 
                        className="lg:hidden text-[#252B42] ml-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:hidden flex-col items-center bg-white py-20 gap-8 text-[#737373] text-3xl font-normal transition-all duration-300`}>
                <a href="/" className="hover:text-[#252B42]">Home</a>
                <a href="#" className="hover:text-[#252B42]">Product</a>
                <a href="#" className="hover:text-[#252B42]">Pricing</a>
                <a href="#" className="hover:text-[#252B42]">Contact</a>
            </div>
        </header>
    );
}