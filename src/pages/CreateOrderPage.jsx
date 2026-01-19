import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAddresses, deleteAddress, fetchCards, deleteCard, createOrder } from '../store/actions/clientActions';
import { clearCart } from '../store/actions/shoppingCartActions';
import AddressForm from '../components/Order/AddressForm';
import PaymentForm from '../components/Order/PaymentForm';
import { Plus, Edit2, Trash2, CheckCircle } from 'lucide-react';
import { toast } from 'react-toastify';

const CreateOrderPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addressList = useSelector((state) => state.client.addressList);
    const cardList = useSelector((state) => state.client.cardList);
    const cart = useSelector((state) => state.shoppingCart.cart);

    // Tab State: 1 = Address, 2 = Payment
    const [activeTab, setActiveTab] = useState(1);

    // Selected States
    const [selectedAddressId, setSelectedAddressId] = useState(null);
    const [selectedCardId, setSelectedCardId] = useState(null);
    const [termsAccepted, setTermsAccepted] = useState(false);

    // Form Visibility States
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [editingAddress, setEditingAddress] = useState(null);
    const [showCardForm, setShowCardForm] = useState(false);
    const [editingCard, setEditingCard] = useState(null);

    // Initial Fetch & Auto-select Logic
    useEffect(() => {
        dispatch(fetchAddresses());
        dispatch(fetchCards());
    }, [dispatch]);

    useEffect(() => {
        // Auto-select first address if available and none selected
        if (addressList.length > 0 && !selectedAddressId) {
            setSelectedAddressId(addressList[0].id);
        }
    }, [addressList, selectedAddressId]);

    // Totals Calculation
    const checkedItems = cart.filter(item => item.checked);
    const productsTotal = checkedItems.reduce((total, item) => total + (item.product.price * item.count), 0);
    const shippingCost = productsTotal > 0 ? 29.99 : 0;
    const isFreeShipping = productsTotal >= 150;
    const finalShippingCost = isFreeShipping ? 0 : shippingCost;
    const grandTotal = productsTotal + finalShippingCost;


    const handleAddAddress = () => {
        setEditingAddress(null);
        setShowAddressForm(true);
    };

    const handleEditAddress = (address) => {
        setEditingAddress(address);
        setShowAddressForm(true);
    };

    const handleDeleteAddress = (id) => {
        // Confirm dialog removed for debugging
        dispatch(deleteAddress(id));
    };

    const handleDeleteCard = (id) => {
        if (confirm("Are you sure you want to delete this card?")) {
            dispatch(deleteCard(id));
        }
    };

    const handleTabChange = (tab) => {
        if (tab === 2 && !selectedAddressId) {
            toast.warning("Lütfen önce bir teslimat adresi seçiniz.");
            return;
        }
        setActiveTab(tab);
    };

    const handleSaveAndContinue = () => {
        if (activeTab === 1) {
            if (!selectedAddressId) {
                toast.warning("Lütfen bir teslimat adresi seçiniz.");
                return;
            }
            setActiveTab(2);
        } else if (activeTab === 2) {
            if (!selectedCardId) {
                toast.warning("Lütfen bir ödeme kartı seçiniz.");
                return;
            }

            if (!termsAccepted) {
                toast.warning("Lütfen Ön Bilgilendirme Koşulları'nı ve Satış Sözleşmesi'ni onaylayınız.");
                return;
            }

            const selectedCard = cardList.find(c => c.id === selectedCardId);
            if (!selectedCard) {
                toast.error("Seçilen kart bulunamadı.");
                return;
            }

            const payload = {
                address_id: selectedAddressId,
                order_date: new Date().toISOString(),
                card_no: selectedCard.card_no,
                card_name: selectedCard.name_on_card,
                card_expire_month: selectedCard.expire_month,
                card_expire_year: selectedCard.expire_year,
                card_ccv: 321,
                price: grandTotal,
                products: cart.map(item => ({
                    product_id: item.product.id,
                    count: item.count,
                    detail: item.product.description || ""
                }))
            };

            dispatch(createOrder(payload))
                .then(() => {
                    toast.success("Siparişiniz başarıyla alındı! Tebrikler!");
                    dispatch(clearCart());
                    setTimeout(() => {
                        navigate('/');
                    }, 2000);
                })
                .catch((err) => {
                    toast.error(err.response?.data?.message || "Sipariş oluşturulurken bir hata oluştu.");
                });
        }
    };


    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">

            {/* Steps / Tabs */}
            <div className="flex justify-between md:justify-start gap-8 mb-8 border-b pb-4">
                <div onClick={() => handleTabChange(1)} className={`cursor-pointer ${activeTab === 1 ? 'border-b-4 border-[#23A6F0]' : ''} pb-2`}>
                    <h2 className={`text-xl font-bold ${activeTab === 1 ? 'text-[#23A6F0]' : 'text-gray-400'}`}>Adres Bilgileri</h2>
                    <p className="text-xs text-gray-500">Ev / Teslimat Adresi</p>
                </div>
                <div onClick={() => handleTabChange(2)} className={`cursor-pointer ${activeTab === 2 ? 'border-b-4 border-[#23A6F0]' : ''} pb-2 ${!selectedAddressId ? 'opacity-50' : ''}`}>
                    <h2 className={`text-xl font-bold ${activeTab === 2 ? 'text-[#23A6F0]' : 'text-gray-400'}`}>Ödeme Seçenekleri</h2>
                    <p className="text-xs text-gray-500">Kart ile Güvenli Ödeme</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Left Column: Content */}
                <div className="md:col-span-2">
                    {/* Address Step Content */}
                    {activeTab === 1 && (
                        <>
                            {/* Information Alert */}
                            <div className="bg-orange-50 border border-orange-200 text-orange-800 px-4 py-3 rounded relative mb-6 flex items-start gap-3">
                                <i className="fas fa-info-circle mt-1"></i>
                                <p className="text-sm">Kurumsal faturalı alışveriş yapmak için "Faturamı Aynı Adrese Gönder" tikini kaldırın ve Fatura adresi olarak kayıtlı Kurumsal Fatura adresinizi seçin.</p>
                            </div>

                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-bold text-[#252B42]">Teslimat Adresi</h3>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="same-billing" defaultChecked className="w-4 h-4 accent-[#23A6F0]" />
                                    <label htmlFor="same-billing" className="text-sm text-[#252B42]">Faturamı Aynı Adrese Gönder</label>
                                </div>
                            </div>

                            {/* Show Form OR Address List */}
                            {showAddressForm ? (
                                <AddressForm setShowForm={setShowAddressForm} editAddress={editingAddress} />
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* New Address Button Card */}
                                    <div
                                        onClick={handleAddAddress}
                                        className="border border-dashed border-gray-300 bg-gray-50 hover:bg-white hover:border-[#23A6F0] rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-all min-h-[150px]"
                                    >
                                        <Plus size={40} className="text-[#23A6F0] mb-2" />
                                        <span className="font-bold text-[#252B42]">Yeni Adres Ekle</span>
                                    </div>

                                    {/* Existing Addresses */}
                                    {addressList.map((address) => (
                                        <div
                                            key={address.id}
                                            onClick={() => setSelectedAddressId(address.id)}
                                            className={`border rounded-lg p-4 relative cursor-pointer hover:shadow-md transition-all min-h-[150px] flex flex-col justify-between ${selectedAddressId === address.id ? 'border-[#23A6F0] bg-white ring-1 ring-[#23A6F0]' : 'border-gray-200 bg-white'}`}
                                        >
                                            {/* Header: Radio, Title, Edit */}
                                            <div className="flex justify-between items-center mb-3">
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${selectedAddressId === address.id ? 'border-[#23A6F0]' : 'border-gray-400'}`}>
                                                        {selectedAddressId === address.id && <div className="w-2 h-2 rounded-full bg-[#23A6F0]"></div>}
                                                    </div>
                                                    <span className="font-bold text-[#252B42]">{address.title}</span>
                                                </div>
                                                <button onClick={(e) => { e.stopPropagation(); handleEditAddress(address); }} className="text-xs text-[#252B42] underline hover:text-[#23A6F0] font-medium">Düzenle</button>
                                            </div>

                                            {/* Body: Address Info */}
                                            <div className="flex-grow text-sm text-[#252B42] mb-3">
                                                <div className="flex justify-between items-center mb-1">
                                                    <div className="flex items-center gap-2">
                                                        <i className="fas fa-user text-gray-400 text-xs"></i>
                                                        <span className="font-semibold">{address.name} {address.surname}</span>
                                                    </div>
                                                    <span className="text-xs text-gray-500">{address.phone}</span>
                                                </div>
                                                <div className="">
                                                    <p className="line-clamp-2">{address.address}</p>
                                                    <p className="mt-1 text-xs text-gray-500 font-semibold">{address.district} / {address.city}</p>
                                                </div>
                                            </div>

                                            <div className="flex justify-end border-t border-gray-100 pt-2">
                                                <button onClick={(e) => { e.stopPropagation(); handleDeleteAddress(address.id); }} className="text-gray-400 hover:text-red-500 transition-colors" title="Sil">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}

                    {/* Payment Step Content */}
                    {activeTab === 2 && (
                        <div className="border border-gray-200 rounded-lg p-6 bg-white">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-6 h-6 rounded-full border-2 border-[#23A6F0] flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-[#23A6F0]"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-[#252B42]">Kart ile Öde</h3>
                                    <p className="text-sm text-gray-500">Kart ile ödemeyi seçtiniz. Banka veya Kredi Kartı kullanarak ödemenizi güvenle yapabilirsiniz.</p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Left Side: Card List / Form */}
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-4">
                                        <h4 className="font-bold text-[#252B42]">Kart Bilgileri</h4>
                                        {showCardForm ? (
                                            <button onClick={() => setShowCardForm(false)} className="text-sm text-[#252B42] underline hover:text-[#23A6F0]">Kayıtlı Kartlarım</button>
                                        ) : (
                                            <button onClick={() => { setEditingCard(null); setShowCardForm(true); }} className="text-sm text-[#252B42] underline hover:text-[#23A6F0]">Başka bir Kart ile Ödeme Yap</button>
                                        )}
                                    </div>

                                    {showCardForm ? (
                                        <PaymentForm setShowForm={setShowCardForm} editCard={editingCard} />
                                    ) : (
                                        <div className="space-y-4">
                                            {cardList.map((card) => (
                                                <div
                                                    key={card.id}
                                                    onClick={() => setSelectedCardId(card.id)}
                                                    className={`border rounded-lg p-4 cursor-pointer relative ${selectedCardId === card.id ? 'border-[#23A6F0] bg-blue-50' : 'border-gray-200'}`}
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <div className="flex items-center gap-3">
                                                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedCardId === card.id ? 'border-[#23A6F0]' : 'border-gray-400'}`}>
                                                                {selectedCardId === card.id && <div className="w-2 h-2 rounded-full bg-[#23A6F0]"></div>}
                                                            </div>
                                                            <div>
                                                                <h5 className="font-bold text-[#23A6F0] text-sm">{card.name_on_card}</h5> {/* Using Name as Title placeholder since existing API doesn't have Title */}
                                                                <p className="text-sm text-gray-600 tracking-wider">**** **** **** {card.card_no.slice(-4)}</p>
                                                                <p className="text-xs text-gray-400">{card.expire_month}/{card.expire_year}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <button onClick={(e) => { e.stopPropagation(); setEditingCard(card); setShowCardForm(true); }} className="text-gray-400 hover:text-[#23A6F0]">
                                                                <Edit2 size={16} />
                                                            </button>
                                                            <button onClick={(e) => { e.stopPropagation(); handleDeleteCard(card.id); }} className="text-gray-400 hover:text-red-500">
                                                                <Trash2 size={16} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {selectedCardId === card.id && <div className="absolute right-4 top-1/2 -translate-y-1/2 lg:block hidden">
                                                        {/* Optional generic card icon here */}
                                                    </div>}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Right Side: Installment Options (Mock) */}
                                <div className="flex-1 bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <h4 className="font-bold text-[#252B42] mb-2">Taksit Seçenekleri</h4>
                                    <p className="text-xs text-gray-500 mb-4">Kartınıza uygun taksit seçeneğini seçiniz</p>

                                    <div className="bg-white border border-gray-200 rounded overflow-hidden">
                                        <div className="flex bg-gray-100 p-2 text-xs font-bold text-gray-600 border-b">
                                            <div className="w-1/2">Taksit Sayısı</div>
                                            <div className="w-1/2">Aylık Ödeme</div>
                                        </div>
                                        <div className="flex p-3 items-center border-b last:border-0 hover:bg-blue-50 cursor-pointer">
                                            <div className="w-1/2 flex items-center gap-2">
                                                <div className="w-4 h-4 rounded-full border border-[#23A6F0] flex items-center justify-center">
                                                    <div className="w-2 h-2 rounded-full bg-[#23A6F0]"></div>
                                                </div>
                                                <span className="text-sm font-bold text-[#252B42]">Tek Çekim</span>
                                            </div>
                                            <div className="w-1/2 font-bold text-[#23A6F0]">${grandTotal.toFixed(2)}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Column: Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm sticky top-6">
                        <h4 className="text-lg font-bold text-[#252B42] mb-4">Sipariş Özeti</h4>

                        <div className="flex justify-between text-[#737373] text-sm mb-2">
                            <span>Ürünün Toplamı</span>
                            <span className="font-bold text-[#252B42]">${productsTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-[#737373] text-sm mb-2">
                            <span>Kargo Toplam</span>
                            <span className="font-bold text-[#252B42]">${shippingCost.toFixed(2)}</span>
                        </div>
                        {isFreeShipping && (
                            <div className="flex justify-between text-[#737373] text-sm mb-2">
                                <span className="text-[#23A6F0] w-2/3">150 $ ve Üzeri Kargo Bedava (Satıcı Karşılar)</span>
                                <span className="font-bold text-[#23A6F0]">- ${shippingCost.toFixed(2)}</span>
                            </div>
                        )}
                        <div className="border-t border-gray-200 my-4"></div>
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-[#252B42] font-bold">Toplam</span>
                            <span className="text-[#23A6F0] font-bold text-xl">${grandTotal.toFixed(2)}</span>
                        </div>

                        <button
                            onClick={handleSaveAndContinue}
                            className="w-full bg-[#23A6F0] text-white py-3 rounded-md font-bold hover:bg-[#1a8cd8] transition-colors flex items-center justify-center gap-2"
                        >
                            {activeTab === 1 ? 'Kaydet ve Devam Et' : 'Siparişi Tamamla'}
                            <i className={`fas fa-chevron-right text-xs ${activeTab === 2 ? 'hidden' : ''}`}></i>
                        </button>

                        <div className="mt-4 bg-gray-50 p-3 rounded text-xs text-gray-500 text-center">
                            <input
                                type="checkbox"
                                className="mr-2 cursor-pointer"
                                id="terms"
                                checked={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.checked)}
                            />
                            <label htmlFor="terms" className="cursor-pointer">
                                Ön Bilgilendirme Koşulları'nı ve Mesafeli Satış Sözleşmesi'ni okudum, onaylıyorum.
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateOrderPage;
