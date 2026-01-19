import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../store/actions/clientActions';
import { mainLinks, pagesDropdownLinks } from './navConfig';
import CartDropdown from '../../components/Cart/CartDropdown';

export default function DesktopNavbar() {
    const user = useSelector((state) => state.client.user);
    const cart = useSelector((state) => state.shoppingCart.cart);
    const totalItems = cart.reduce((total, item) => total + item.count, 0);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const cartRef = useRef(null);
    const userMenuRef = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setIsCartOpen(false);
            }
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setIsUserMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="hidden lg:flex items-center justify-between w-full pl-20">
            {/* ... Menu Links ... */}
            <ul className="flex gap-6 text-[#737373] font-bold items-center">
                {mainLinks.map((link) => {
                    if (link.hasDropdown) {
                        return (
                            <li key={link.name} className="relative group py-4">
                                {link.name === 'Pages' ? (
                                    <div className="flex items-center gap-1 cursor-pointer group-hover:text-[#23A6F0] transition-colors">
                                        {link.name} <i className="fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform"></i>
                                    </div>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className="flex items-center gap-1 cursor-pointer group-hover:text-[#23A6F0] transition-colors"
                                    >
                                        {link.name} <i className="fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform"></i>
                                    </Link>
                                )}

                                {/* SHOP Dropdown (Mega Menu) */}
                                {link.name === 'Shop' && (
                                    <div className="absolute top-full left-0 bg-white shadow-2xl rounded-md p-6 border border-gray-100 min-w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50 flex flex-row gap-40 transform origin-top-left items-start">
                                        <div className="flex flex-col gap-3">
                                            <h4 className="text-[#252B42] font-bold text-lg">Kadın</h4>
                                            {useSelector((state) => state.product.categories)
                                                .filter((cat) => cat.code.startsWith('k:'))
                                                .sort((a, b) => b.rating - a.rating)
                                                .map((item) => (
                                                    <Link
                                                        key={item.id}
                                                        to={`/shop/kadin/${item.title.toLowerCase()}/${item.id}`}
                                                        className="font-normal hover:text-[#23A6F0] text-[#737373]"
                                                    >
                                                        {item.title}
                                                    </Link>
                                                ))}
                                        </div>
                                        <div className="flex flex-col gap-3 pr-20">
                                            <h4 className="text-[#252B42] font-bold text-lg">Erkek</h4>
                                            {useSelector((state) => state.product.categories)
                                                .filter((cat) => cat.code.startsWith('e:'))
                                                .sort((a, b) => b.rating - a.rating)
                                                .map((item) => (
                                                    <Link
                                                        key={item.id}
                                                        to={`/shop/erkek/${item.title.toLowerCase()}/${item.id}`}
                                                        className="font-normal hover:text-[#23A6F0] text-[#737373]"
                                                    >
                                                        {item.title}
                                                    </Link>
                                                ))}
                                        </div>
                                    </div>
                                )}

                                {/* PAGES Dropdown (Simple Menu) */}
                                {link.name === 'Pages' && (
                                    <div className="absolute top-full left-0 bg-white shadow-xl rounded-md py-4 border border-gray-100 min-w-[150px] opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50 flex flex-col transform origin-top-left">
                                        {pagesDropdownLinks.map((pageLink) => (
                                            <Link
                                                key={pageLink.name}
                                                to={pageLink.path}
                                                className="px-6 py-2 hover:bg-gray-50 hover:text-[#23A6F0] transition-colors text-[#737373] font-normal"
                                            >
                                                {pageLink.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </li>
                        );
                    }
                    return (
                        <li key={link.name} className="py-4">
                            <Link to={link.path} className="hover:text-[#23A6F0] transition-colors">
                                {link.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            {/* Masaüstü Sağ Taraf: İkonlar ve Login */}
            <div className="flex items-center gap-6 text-[#23A6F0] font-bold">
                {user?.name ? (
                    <div className="relative" ref={userMenuRef}>
                        <div
                            className="flex items-center gap-2 cursor-pointer hover:text-[#1a8cd8]"
                            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                        >
                            <img src={user.md5} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
                            <span className="text-sm font-bold text-[#252B42]">{user.name}</span>
                            <i className={`fas fa-chevron-down text-xs transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`}></i>
                        </div>

                        {/* User Dropdown */}
                        {isUserMenuOpen && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-100 rounded-md shadow-lg z-50 overflow-hidden">
                                <Link
                                    to="/orders"
                                    className="block px-4 py-3 text-sm text-[#737373] hover:bg-gray-50 hover:text-[#23A6F0] transition-colors border-b border-gray-50"
                                    onClick={() => setIsUserMenuOpen(false)}
                                >
                                    <i className="fas fa-box-open mr-2"></i> My Orders
                                </Link>
                                <button
                                    onClick={() => {
                                        setIsUserMenuOpen(false);
                                        dispatch(logoutUser(navigate));
                                    }}
                                    className="block w-full text-left px-4 py-3 text-sm text-[#737373] hover:bg-gray-50 hover:text-red-500 transition-colors"
                                >
                                    <i className="fas fa-sign-out-alt mr-2"></i> Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex items-center gap-2 text-sm cursor-pointer whitespace-nowrap hover:text-[#1a8cd8]">
                        <i className="far fa-user"></i>
                        <Link to="/login" className="hover:underline">Login</Link>
                        <span>/</span>
                        <Link to="/signup" className="hover:underline">Register</Link>
                    </div>
                )}
                <i className="fas fa-search cursor-pointer hover:text-[#1a8cd8]"></i>

                {/* Cart Icon & Dropdown - CLICK BASED */}
                <div
                    ref={cartRef}
                    className="relative flex items-center gap-1 cursor-pointer hover:text-[#1a8cd8] py-4"
                    onClick={() => setIsCartOpen(!isCartOpen)}
                >
                    <i className="fas fa-shopping-cart"></i>
                    <span>{totalItems}</span>
                    {isCartOpen && <CartDropdown />}
                </div>

                <div className="flex items-center gap-1 cursor-pointer hover:text-[#1a8cd8]">
                    <i className="far fa-heart"></i> <span>1</span>
                </div>
            </div>
        </div>
    );
}
