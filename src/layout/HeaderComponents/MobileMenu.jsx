import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/actions/clientActions';
import { mainLinks } from './navConfig';

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.client.user);
    const cart = useSelector((state) => state.shoppingCart.cart);
    const cartItemCount = cart.reduce((total, item) => total + item.count, 0);

    return (
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:hidden flex-col items-center bg-white pb-20 animate-fadeIn border-t font-montserrat`}>
            {/* Navigation Links */}
            <div className="flex flex-col items-center gap-8 text-[#737373] text-[30px] font-normal my-14">
                {mainLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="hover:text-[#252B42] transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Authentication & Icons */}
            <div className="flex flex-col items-center gap-8 text-[#23A6F0] text-[30px] font-normal">
                {/* User / Auth */}
                {user?.token ? (
                    <div className="flex flex-row items-center gap-4">
                        <img src={user.md5} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
                        <button
                            onClick={() => {
                                dispatch(logoutUser());
                                setIsMenuOpen(false);
                            }}
                            className="text-[#737373] hover:text-red-500"
                            title="Logout"
                        >
                            <i className="fas fa-sign-out-alt text-xl"></i>
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center gap-2 cursor-pointer">
                        <i className="far fa-user text-3xl"></i>
                        <Link to="/login" onClick={() => setIsMenuOpen(false)} className="hover:text-[#1a8cd8]">Login</Link>
                        <span>/</span>
                        <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="hover:text-[#1a8cd8]">Register</Link>
                    </div>
                )}

                {/* Search */}
                <i className="fas fa-search text-2xl cursor-pointer hover:text-[#1a8cd8]"></i>

                {/* Cart */}
                <div
                    onClick={() => {
                        navigate('/cart');
                        setIsMenuOpen(false);
                    }}
                    className="flex flex-row items-center gap-2 cursor-pointer hover:text-[#1a8cd8]"
                >
                    <i className="fas fa-shopping-cart text-2xl"></i>
                    <span className="text-sm font-normal">{cartItemCount}</span>
                </div>

                {/* Wishlist */}
                <div className="flex flex-row items-center gap-2 cursor-pointer hover:text-[#1a8cd8]">
                    <i className="far fa-heart text-2xl"></i>
                    <span className="text-sm font-normal">1</span>
                </div>
            </div>
        </div>
    );
}
