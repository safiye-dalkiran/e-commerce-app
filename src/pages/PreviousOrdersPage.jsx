import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../store/actions/clientActions';
import { ChevronDown, ChevronUp, Package, Calendar, CreditCard } from 'lucide-react';

const PreviousOrdersPage = () => {
    const dispatch = useDispatch();
    const orderList = useSelector((state) => state.client.orderList) || [];
    const [expandedOrderId, setExpandedOrderId] = useState(null);

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    const toggleOrder = (orderId) => {
        if (expandedOrderId === orderId) {
            setExpandedOrderId(null);
        } else {
            setExpandedOrderId(orderId);
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return "-";
        return new Date(dateString).toLocaleDateString('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <h2 className="text-2xl font-bold text-[#252B42] mb-6">Siparişlerim</h2>

            {orderList.length === 0 ? (
                <div className="bg-white p-12 rounded-lg border border-gray-200 text-center">
                    <Package size={64} className="mx-auto text-gray-300 mb-4" />
                    <h3 className="text-xl font-bold text-gray-700 mb-2">Henüz hiç siparişiniz yok.</h3>
                    <p className="text-gray-500">Alışverişe başlayarak ilk siparişinizi oluşturun!</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {orderList.map((order) => (
                        <div key={order.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">

                            {/* Summary Header (Clickable) */}
                            <div
                                onClick={() => toggleOrder(order.id)}
                                className="p-4 sm:p-6 cursor-pointer bg-gray-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                            >
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 flex-1">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-100 rounded-full text-[#23A6F0]">
                                            <Calendar size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-bold uppercase">Sipariş Tarihi</p>
                                            <p className="text-[#252B42] font-medium text-sm">{formatDate(order.order_date)}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase">Sipariş Özeti</p>
                                        <p className="text-[#252B42] font-medium text-sm">
                                            {order.products?.reduce((acc, p) => acc + p.count, 0) || 0} Ürün
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase">Toplam Tutar</p>
                                        <p className="text-[#23A6F0] font-bold text-lg">${order.price?.toFixed(2)}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-gray-500">
                                    <span className="text-sm font-medium">Detaylar</span>
                                    {expandedOrderId === order.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>
                            </div>

                            {/* Collapsible Content (Details) */}
                            {expandedOrderId === order.id && (
                                <div className="p-6 border-t border-gray-200 bg-white">
                                    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-bold text-sm text-[#252B42] mb-2 flex items-center gap-2">
                                                <CreditCard size={16} /> Ödeme Bilgileri
                                            </h4>
                                            <p className="text-sm text-gray-600">Kart: **** **** **** {order.card_no?.toString().slice(-4)}</p>
                                            <p className="text-sm text-gray-600">Kart Sahibi: {order.card_name}</p>
                                        </div>

                                    </div>

                                    <h4 className="font-bold text-sm text-[#252B42] mb-3">Ürünler</h4>
                                    <div className="border rounded-lg overflow-hidden">
                                        {order.products?.map((item, idx) => {
                                            const itemPrice = item.price || item.product?.price || 0;
                                            const itemImg = item.product?.images?.[0]?.url || item.images?.[0]?.url || "https://via.placeholder.com/64";
                                            const itemName = item.product?.name || item.name || item.detail || "Ürün Detayı";

                                            return (
                                                <div key={idx} className="flex items-center gap-4 p-4 border-b last:border-0 hover:bg-gray-50">
                                                    <div className="w-16 h-16 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                                                        <img
                                                            src={itemImg}
                                                            alt={itemName}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h5 className="text-[#252B42] font-semibold text-sm mb-1">{itemName}</h5>
                                                        <p className="text-xs text-gray-500">Adet: {item.count}</p>
                                                    </div>
                                                    <div className="text-[#23A6F0] font-bold text-sm">
                                                        ${(itemPrice * item.count).toFixed(2)}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PreviousOrdersPage;
