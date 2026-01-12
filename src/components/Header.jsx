import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { pathname } = useLocation();

    const topBarBg = 'bg-[#252B42]';

    // Shop dışındaki diğer linkler
    const otherLinks = [
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
        { name: 'Pages', path: '/pages' },
    ];

    return (
        <header className="w-full font-montserrat sticky top-0 z-[1000] bg-white shadow-sm">
            
            {/* 1. Üst Bar (Desktop) */}
            <div className={`hidden lg:flex ${topBarBg} text-white w-full`}>
                <div className="max-w-[1440px] mx-auto w-full px-8 py-3 flex justify-between items-center text-sm font-bold">
                    <div className="flex gap-6">
                        <div className="flex items-center gap-2"><i className="fas fa-phone-alt"></i> (225) 555-0118</div>
                        <div className="flex items-center gap-2"><i className="far fa-envelope"></i> michelle.rivera@example.com</div>
                    </div>
                    <div>Follow Us and get a chance to win 80% off</div>
                    <div className="flex items-center gap-3">
                        <span>Follow Us :</span>
                        <div className="flex gap-3 text-lg">
                            <i className="fab fa-instagram cursor-pointer hover:text-[#23A6F0]"></i>
                            <i className="fab fa-youtube cursor-pointer hover:text-[#23A6F0]"></i>
                            <i className="fab fa-facebook cursor-pointer hover:text-[#23A6F0]"></i>
                            <i className="fab fa-twitter cursor-pointer hover:text-[#23A6F0]"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Ana Navbar */}
            <nav className="bg-white">
                <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold text-[#252B42]">Bandage</Link>

                    {/* Masaüstü Navigasyon Bölümü */}
                    <div className="hidden lg:flex items-center gap-10">
                        <ul className="flex gap-6 text-[#737373] font-bold items-center">
                            <li><Link to="/" className="hover:text-[#23A6F0] transition-colors">Home</Link></li>
                            
                            {/* SHOP DROPDOWN - Üzerine gelince açılır */}
                            <li className="relative group py-4">
                                <div className="flex items-center gap-1 cursor-pointer text-[#252B42] group-hover:text-[#23A6F0] transition-colors">
                                    Shop <i className="fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform"></i>
                                </div>
                                
                                {/* Açılır Menü (Dropdown) */}
                                <div className="absolute top-full left-0 bg-white shadow-2xl rounded-md p-8 border border-gray-100 min-w-[350px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex gap-16">
                                    {/* Kadın Kategorisi */}
                                    <div className="flex flex-col gap-4">
                                        <h4 className="text-[#252B42] font-extrabold text-lg mb-1">Kadın</h4>
                                        <Link to="/shop/kadin-bags" className="font-medium hover:text-[#23A6F0] text-[#737373]">Bags</Link>
                                        <Link to="/shop/kadin-belts" className="font-medium hover:text-[#23A6F0] text-[#737373]">Belts</Link>
                                        <Link to="/shop/kadin-cosmetics" className="font-medium hover:text-[#23A6F0] text-[#737373]">Cosmetics</Link>
                                        <Link to="/shop/kadin-hats" className="font-medium hover:text-[#23A6F0] text-[#737373]">Hats</Link>
                                    </div>
                                    {/* Erkek Kategorisi */}
                                    <div className="flex flex-col gap-4">
                                        <h4 className="text-[#252B42] font-extrabold text-lg mb-1">Erkek</h4>
                                        <Link to="/shop/erkek-bags" className="font-medium hover:text-[#23A6F0] text-[#737373]">Bags</Link>
                                        <Link to="/shop/erkek-belts" className="font-medium hover:text-[#23A6F0] text-[#737373]">Belts</Link>
                                        <Link to="/shop/erkek-cosmetics" className="font-medium hover:text-[#23A6F0] text-[#737373]">Cosmetics</Link>
                                        <Link to="/shop/erkek-hats" className="font-medium hover:text-[#23A6F0] text-[#737373]">Hats</Link>
                                    </div>
                                </div>
                            </li>

                            {otherLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="hover:text-[#23A6F0] transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>

                        {/* Masaüstü Sağ Taraf: İkonlar ve Login */}
                        <div className="flex items-center gap-6 text-[#23A6F0] font-bold">
                            <div className="flex items-center gap-2 text-sm cursor-pointer whitespace-nowrap hover:text-[#1a8cd8]">
                                <i className="far fa-user"></i> <span>Login / Register</span>
                            </div>
                            <i className="fas fa-search cursor-pointer hover:text-[#1a8cd8]"></i>
                            <div className="flex items-center gap-1 cursor-pointer hover:text-[#1a8cd8]"><i className="fas fa-shopping-cart"></i> <span>1</span></div>
                            <div className="flex items-center gap-1 cursor-pointer hover:text-[#1a8cd8]"><i className="far fa-heart"></i> <span>1</span></div>
                        </div>
                    </div>

                    {/* MOBİL: Hamburger İkonu */}
                    <div className="lg:hidden flex items-center gap-4">
                        <button className="text-[#252B42]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars-staggered'} text-2xl`}></i>
                        </button>
                    </div>
                </div>

                {/* 3. MOBİL MENÜ - Dikey ve Mavi İkonlu */}
                <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:hidden flex-col items-center bg-white pb-16 gap-8 animate-fadeIn border-t`}>
                    <div className="flex flex-col items-center gap-8 text-[#737373] text-3xl font-normal mt-10">
                        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
                        <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        <Link to="/pages" onClick={() => setIsMenuOpen(false)}>Pages</Link>
                    </div>

                    <div className="flex flex-col items-center gap-8 text-[#23A6F0] mt-4">
                        <div className="flex flex-row items-center gap-3 cursor-pointer">
                            <i className="far fa-user text-3xl"></i>
                            <span className="text-2xl font-normal">Login / Register</span>
                        </div>
                        <i className="fas fa-search text-3xl cursor-pointer"></i>
                        <div className="flex flex-row items-center gap-3 cursor-pointer">
                            <i className="fas fa-shopping-cart text-3xl"></i>
                            <span className="text-xl">1</span>
                        </div>
                        <div className="flex flex-row items-center gap-3 cursor-pointer">
                            <i className="far fa-heart text-3xl"></i>
                            <span className="text-xl">1</span>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}