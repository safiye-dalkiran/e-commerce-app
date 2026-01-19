import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { removeFromCart } from '../../store/actions/shoppingCartActions';

export default function CartDropdown() {
    const cart = useSelector((state) => state.shoppingCart.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const totalAmount = cart.reduce((total, item) => {
        return item.checked ? total + (item.product.price * item.count) : total;
    }, 0);

    const totalItems = cart.reduce((total, item) => total + item.count, 0);

    if (cart.length === 0) {
        return (
            <div className="absolute top-full right-0 mt-4 bg-white shadow-xl rounded-md border border-gray-100 w-80 p-6 z-50 animate-fade-in origin-top-right">
                <div className="flex flex-col items-center gap-4 text-center">
                    <i className="fas fa-shopping-basket text-4xl text-gray-300"></i>
                    <p className="text-gray-500 font-bold">Your cart is empty.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="absolute top-full right-0 mt-4 bg-white shadow-xl rounded-md border border-gray-100 w-[400px] z-50 animate-fade-in origin-top-right">
            <div className="p-4 border-b border-gray-100">
                <h3 className="font-bold text-[#252B42]">My Cart ({totalItems} Items)</h3>
            </div>

            <div className="max-h-96 overflow-y-auto custom-scrollbar">
                {cart.map((item) => (
                    <div key={item.product.id} className="flex gap-4 p-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 relative group">
                        <div className="w-16 h-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-white">
                            <img
                                src={item.product.image || item.product.images?.[0]?.url}
                                alt={item.product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex-1 flex flex-col justify-between py-1">
                            <h4 className="font-bold text-[#252B42] text-sm line-clamp-2 pr-6">
                                {item.product.name}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span>Size: Standard</span>
                                <span>•</span>
                                <span>Count: {item.count}</span>
                            </div>
                            <div className="font-bold text-[#23A6F0]">
                                ${(item.product.price * item.count).toFixed(2)}
                            </div>
                        </div>

                        <button
                            onClick={() => dispatch(removeFromCart(item.product.id))}
                            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors p-1"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                ))}
            </div>

            <div className="p-4 bg-gray-50 rounded-b-md">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-[#737373] font-bold">Total</span>
                    <span className="text-xl font-bold text-[#252B42]">${totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => navigate('/cart')}
                        className="flex-1 px-4 py-3 border border-[#E8E8E8] bg-white rounded-md text-[#252B42] font-bold text-sm hover:bg-gray-100 transition-colors"
                    >
                        Go to Cart
                    </button>
                    <button
                        onClick={() => navigate('/order')}
                        className="flex-1 px-4 py-3 bg-[#23A6F0] text-white rounded-md font-bold text-sm hover:bg-[#1a8cd8] transition-colors"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}
