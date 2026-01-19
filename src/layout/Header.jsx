import { useState } from 'react';
import { Link } from 'react-router-dom';
import TopBar from './HeaderComponents/TopBar';
import DesktopNavbar from './HeaderComponents/DesktopNavbar';
import MobileMenu from './HeaderComponents/MobileMenu';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full font-montserrat sticky top-0 z-[1000] bg-white shadow-sm">
            <TopBar />

            <nav className="bg-white">
                <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold text-[#252B42]">Bandage</Link>

                    <DesktopNavbar />

                    <div className="lg:hidden flex items-center gap-4">
                        <button className="text-[#252B42]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars-staggered'} text-2xl`}></i>
                        </button>
                    </div>
                </div>

                <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </nav>
        </header>
    );
}