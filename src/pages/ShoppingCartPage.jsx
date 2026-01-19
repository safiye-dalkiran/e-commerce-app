import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Trash2, Plus, Minus, CheckSquare, Square } from 'lucide-react';
import { updateItemCount, removeFromCart, toggleCartCheck } from '../store/actions/shoppingCartActions';
import { useNavigate } from 'react-router-dom';

export default function ShoppingCartPage() {
    const cart = useSelector((state) => state.shoppingCart.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const totalAmount = cart.reduce((total, item) => {
        return item.checked ? total + (item.product.price * item.count) : total;
    }, 0);

    const checkedItemsCount = cart.filter(item => item.checked).length;

    const handleIncrement = (item) => {
        dispatch(updateItemCount(item.product.id, item.count + 1));
    };

    const handleDecrement = (item) => {
        if (item.count > 1) {
            dispatch(updateItemCount(item.product.id, item.count - 1));
        } else {

        }
    };

    const handleToggleCheck = (itemId) => {
        dispatch(toggleCartCheck(itemId));
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 bg-[#FAFAFA] py-12">
                <div className="p-8 bg-white rounded-full shadow-md">
                    <i className="fas fa-shopping-basket text-6xl text-gray-300"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#252B42]">Your Cart is Empty</h2>
                <button
                    onClick={() => navigate('/shop')}
                    className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold hover:bg-[#1a8cd8] transition-colors"
                >
                    Start Shopping
                </button>
            </div>
        );
    }

    return (
        <div className="bg-[#FAFAFA] min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <h2 className="text-2xl font-bold text-[#252B42] mb-6">Sepetim ({cart.length} Ürün)</h2>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Cart Items List */}
                    <div className="flex-1 flex flex-col gap-4">
                        {cart.map((item) => (
                            <div key={item.product.id} className="bg-white p-4 rounded-md border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center gap-6">
                                {/* Checkbox */}
                                <button
                                    onClick={() => handleToggleCheck(item.product.id)}
                                    className={`flex-shrink-0 ${item.checked ? 'text-[#23A6F0]' : 'text-gray-300'} transition-colors`}
                                >
                                    {item.checked ? <CheckSquare size={24} /> : <Square size={24} />}
                                </button>

                                {/* Image */}
                                <div className="w-24 h-32 flex-shrink-0 border border-gray-100 rounded-sm overflow-hidden">
                                    <img
                                        src={item.product.image || item.product.images?.[0]?.url}
                                        alt={item.product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="flex-1 text-center sm:text-left">
                                    <h3 className="font-bold text-[#252B42] text-lg mb-1">{item.product.name}</h3>
                                    <p className="text-sm text-[#737373] line-clamp-2">{item.product.description}</p>
                                    <div className="mt-2 text-[#23856D] font-bold">
                                        ${item.product.price}
                                        {item.count > 1 && <span className="text-xs text-gray-400 ml-2">(${item.product.price} x {item.count})</span>}
                                    </div>
                                    <div className="text-xs text-[#737373] mt-2 flex items-center gap-1">
                                        <i className="fas fa-shipping-fast text-[#23A6F0]"></i>
                                        <span>En geç yarın kargoda!</span>
                                    </div>
                                </div>

                                {/* Controls */}
                                <div className="flex items-center gap-6">
                                    {/* Quantity */}
                                    <div className="flex items-center border border-gray-200 rounded-md">
                                        <button
                                            onClick={() => handleDecrement(item)}
                                            disabled={item.count <= 1}
                                            className="p-2 text-gray-500 hover:bg-gray-50 disabled:opacity-30"
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <div className="w-10 text-center font-bold text-[#252B42]">{item.count}</div>
                                        <button
                                            onClick={() => handleIncrement(item)}
                                            className="p-2 text-gray-500 hover:bg-gray-50"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>

                                    {/* Total for Item */}
                                    <div className="min-w-[80px] text-right font-bold text-[#23A6F0] text-lg">
                                        ${(item.product.price * item.count).toFixed(2)}
                                    </div>

                                    {/* Remove */}
                                    <button
                                        onClick={() => dispatch(removeFromCart(item.product.id))}
                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="w-full md:w-80 lg:w-96 flex-shrink-0">
                        {/* Top Button */}
                        <button
                            onClick={() => navigate('/order')}
                            className="w-full bg-[#23A6F0] text-white py-4 rounded-md font-bold text-lg hover:bg-[#1a8cd8] transition-colors mb-4"
                        >
                            Sepeti Onayla <i className="fas fa-chevron-right text-xs ml-2"></i>
                        </button>

                        <div className="bg-white p-6 rounded-md border border-gray-200 shadow-sm sticky top-24">
                            <h3 className="text-lg font-bold text-[#252B42] mb-4">Sipariş Özeti</h3>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-[#737373] text-sm">
                                    <span>Ürünün Toplamı</span>
                                    <span className="font-bold text-[#252B42]">${totalAmount.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-[#737373] text-sm">
                                    <span>Kargo Toplam</span>
                                    <span className="font-bold text-[#252B42]">$29.99</span>
                                </div>
                                {totalAmount >= 150 && (
                                    <div className="flex justify-between text-[#737373] text-sm">
                                        <span className="w-2/3">150 $ ve Üzeri Kargo Bedava (Satıcı Karşılar)</span>
                                        <span className="font-bold text-[#23A6F0]">- $29.99</span>
                                    </div>
                                )}
                                <div className="w-full h-[1px] bg-gray-200 my-2"></div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[#252B42] font-bold text-lg">Toplam</span>
                                    <span className="text-[#23A6F0] font-bold text-2xl">
                                        ${(totalAmount + (totalAmount >= 150 ? 0 : 29.99)).toFixed(2)}
                                    </span>
                                </div>
                            </div>

                        </div>
                        <button className="w-full border border-gray-300 text-[#252B42] bg-white py-3 my-2 rounded-md font-bold text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                            <Plus size={16} className="text-[#23A6F0]" /> İNDİRİM KODU GİR
                        </button>

                        {/* Bottom Button */}
                        <button
                            onClick={() => navigate('/order')}
                            className="w-full bg-[#23A6F0] text-white py-3 rounded-md font-bold hover:bg-[#1a8cd8] transition-colors flex items-center justify-center gap-2 mb-3"
                        >
                            Sepeti Onayla <i className="fas fa-chevron-right text-xs"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
