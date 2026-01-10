import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const isShopPage = pathname.includes('/shop');
    const topBarBg = isShopPage ? 'bg-[#23856D]' : 'bg-[#252B42]';

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
        { name: 'Pages', path: '/pages' },
    ];

    return (
        <header className="w-full font-montserrat sticky top-0 z-[1000] bg-white shadow-sm">
            
            {/* 1. Desktop Top Bar */}
            <div className={`hidden lg:flex ${topBarBg} text-white w-full`}>
                <div className="max-w-[1440px] mx-auto w-full px-8 py-3 flex justify-between items-center text-sm font-bold">
                    <div className="flex gap-6">
                        <div className="flex items-center gap-2"><i className="fas fa-phone-alt"></i> (225) 555-0118</div>
                        <div className="flex items-center gap-2"><i className="far fa-envelope"></i> michelle.rivera@example.com</div>
                    </div>
                    <div>Follow Us and get a chance to win 80% off</div>
                    <div className="flex gap-3 text-lg">
                        <span>Follow Us :</span>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                    </div>
                </div>
            </div>

            {/* 2. Ana Navbar Bölümü */}
            <nav className="bg-white">
                <div className="max-w-[1440px] mx-auto px-6 py-6 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold text-[#252B42]">Bandage</Link>

                    {/* Masaüstü Navigasyon (Desktop) */}
                    <div className="hidden lg:flex items-center gap-10">
                        <ul className="flex gap-6 text-[#737373] font-bold">
                            {navLinks.map((link) => (
                                <li key={link.name}><Link to={link.path} className="hover:text-[#23A6F0]">{link.name}</Link></li>
                            ))}
                        </ul>
                        <div className="flex items-center gap-6 text-[#23A6F0] font-bold">
                            {/* Login / Register - Masaüstü Yan Yana */}
                            <div className="flex items-center gap-2 text-sm cursor-pointer">
                                <i className="far fa-user"></i> <span>Login / Register</span>
                            </div>
                            <i className="fas fa-search cursor-pointer"></i>
                            <div className="flex items-center gap-1 cursor-pointer"><i className="fas fa-shopping-cart"></i> 1</div>
                            <div className="flex items-center gap-1 cursor-pointer"><i className="far fa-heart"></i> 1</div>
                        </div>
                    </div>

                    {/* MOBİL: Sadece Hamburger Görünür */}
                    <div className="lg:hidden flex items-center gap-4">
                        <button className="text-[#252B42]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars-staggered'} text-2xl`}></i>
                        </button>
                    </div>
                </div>

                {/* 3. AÇILAN MOBİL MENÜ İÇERİĞİ */}
                <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:hidden flex-col items-center bg-white pb-45 gap-8 animate-fadeIn`}>

                    {/* Linkler Dikey Hizalama */}
                    <div className="flex flex-col items-center gap-8 text-[#737373] text-3xl font-normal">
                        {navLinks.map((link) => (
                            <Link key={link.name} to={link.path} onClick={() => setIsMenuOpen(false)}>
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobil Aksiyon Alanı - Mavi İkonlar */}
                    <div className="flex flex-col items-center gap-10 text-[#23A6F0] mt-4">

                        {/* Login / Register - BURASI DÜZELTİLDİ: İkon ve Yazı Yan Yana (flex-row) */}
                        <div className="flex flex-row items-center gap-3 cursor-pointer">
                            <i className="far fa-user text-3xl"></i>
                            <span className="text-2xl font-normal">Login / Register</span>
                        </div>

                        {/* Search İkonu */}
                        <i className="fas fa-search text-3xl cursor-pointer"></i>

                        {/* Sepet - Yan Yana */}
                        <div className="flex flex-row items-center gap-3 cursor-pointer">
                            <i className="fas fa-shopping-cart text-3xl"></i>
                            <span className="text-xl">1</span>
                        </div>

                        {/* Favori - Yan Yana */}
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