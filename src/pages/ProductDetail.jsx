import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../store/actions/productActions';
import { addToCart } from '../store/actions/shoppingCartActions';
import { Loader, ChevronLeft, ChevronRight, Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import FeaturedProducts from '../components/Shop/FeaturedProducts';
import Clients from '../components/Common/Clients';

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { activeProduct, fetchState } = useSelector((state) => state.product);

    useEffect(() => {
        if (productId) {
            dispatch(fetchProduct(productId));
        }
    }, [dispatch, productId]);

    const handleGoBack = () => {
        navigate(-1);
    };

    if (fetchState === "FETCHING") {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <Loader className="animate-spin text-[#23A6F0]" size={48} />
            </div>
        );
    }

    if (fetchState === "FAILED" || !activeProduct) {
        return (
            <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
                <p className="text-xl font-bold text-red-500">Failed to load product details.</p>
                <button
                    onClick={handleGoBack}
                    className="flex items-center gap-2 text-[#23A6F0] font-bold"
                >
                    <ChevronLeft size={20} />
                    Go Back
                </button>
            </div>
        );
    }

    // Stars rendering helper
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Star
                    key={i}
                    size={20}
                    className={i <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}
                />
            );
        }
        return stars;
    };

    return (
        <div className="bg-[#FAFAFA] min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Navigation / Breadcrumb Area */}
                <div className="py-4">
                    <button
                        onClick={handleGoBack}
                        className="flex items-center gap-2 text-[#737373] hover:text-[#23A6F0] font-bold transition-colors mb-6"
                    >
                        <ChevronLeft size={20} />
                        Back
                    </button>
                </div>

                {/* Product Content */}
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 lg:gap-12">

                    {/* Image Section */}
                    <div className="flex-1">
                        <div className="w-full aspect-[4/5] lg:aspect-square rounded-md overflow-hidden bg-gray-50 relative">
                            <img
                                src={activeProduct.images?.[0]?.url || activeProduct.image}
                                alt={activeProduct.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Thumbnail Images */}
                        {activeProduct.images?.length > 1 && (
                            <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
                                {activeProduct.images.map((img, idx) => (
                                    <div key={idx} className="w-24 h-24 flex-shrink-0 cursor-pointer border border-gray-200 rounded-md overflow-hidden">
                                        <img src={img.url} alt={`thumb-${idx}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Details Section */}
                    <div className="flex-1 flex flex-col gap-6">
                        <h1 className="text-3xl font-bold text-[#252B42]">{activeProduct.name}</h1>

                        <div className="flex items-center gap-2">
                            <div className="flex">{renderStars(Math.round(activeProduct.rating))}</div>
                            <span className="text-[#737373] font-bold text-sm ml-2">{activeProduct.rating} Reviews</span>
                        </div>

                        <div className="text-3xl font-bold text-[#252B42]">${activeProduct.price}</div>

                        <div className="flex gap-2 text-sm font-bold">
                            <span className="text-[#737373]">Availability :</span>
                            <span className={activeProduct.stock > 0 ? "text-[#23A6F0]" : "text-red-500"}>
                                {activeProduct.stock > 0 ? "In Stock" : "Out of Stock"}
                            </span>
                        </div>

                        <p className="text-[#858585] text-sm leading-6 border-b border-gray-200 pb-6">
                            {activeProduct.description}
                        </p>

                        <div className="flex gap-2 pt-2">
                            {/* Colors (Mock or Real) */}
                            {['#23A6F0', '#2DC071', '#E77C40', '#252B42'].map((color, i) => (
                                <div key={i} className="w-8 h-8 rounded-full cursor-pointer" style={{ backgroundColor: color }}></div>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 mt-6">
                            <button
                                onClick={() => dispatch(addToCart(activeProduct))}
                                className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold text-sm hover:bg-[#1a8cd8] transition-colors"
                            >
                                Add to Cart
                            </button>
                            <button className="p-3 border border-[#E8E8E8] rounded-full hover:bg-gray-50 video-btn">
                                <Heart size={20} className="text-[#252B42]" />
                            </button>
                            <button className="p-3 border border-[#E8E8E8] rounded-full hover:bg-gray-50 video-btn">
                                <ShoppingCart size={20} className="text-[#252B42]" />
                            </button>
                            <button className="p-3 border border-[#E8E8E8] rounded-full hover:bg-gray-50 video-btn">
                                <Eye size={20} className="text-[#252B42]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs Section - (Main wrapper continues) */}
            <div className="bg-white py-12 border-t border-[#ECECEC]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex justify-center items-center gap-8 mb-8 border-b border-[#ECECEC] pb-8">
                        <button className="text-[#737373] font-bold hover:text-[#23A6F0] transition-colors relative after:content-[''] after:absolute after:bottom-[-33px] after:left-0 after:w-full after:h-0 text-sm">Description</button>
                        <button className="text-[#737373] font-bold hover:text-[#23A6F0] transition-colors text-sm">Additional Information</button>
                        <button className="text-[#737373] font-bold hover:text-[#23A6F0] transition-colors text-sm">Reviews <span className="text-[#23856D]">(0)</span></button>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Tab Image */}
                        <div className="flex-1">
                            <div className="w-full h-[372px] bg-[#FDF3F5] rounded-md overflow-hidden shadow-sm relative">
                                <img
                                    src={activeProduct.images?.[0]?.url || activeProduct.image}
                                    alt={activeProduct.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Tab Content - Text */}
                        <div className="flex-1 flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-[#252B42]">{activeProduct.name}</h3>
                            <p className="text-[#737373] text-sm leading-6">
                                {activeProduct.description || "Met minim mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."}
                            </p>
                            <p className="text-[#737373] text-sm leading-6 border-l-4 border-[#23A6F0] pl-4">
                                Met minim mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                            </p>
                            <p className="text-[#737373] text-sm leading-6">
                                Met minim mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                            </p>
                        </div>

                        {/* Tab Content - List */}
                        <div className="flex-1 flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-[#252B42]">the quick fox jumps over</h3>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-4">
                                    <ChevronRight size={20} className="text-[#737373]" />
                                    <p className="text-[#737373] font-bold text-sm">the quick fox jumps over the lazy dog</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <ChevronRight size={20} className="text-[#737373]" />
                                    <p className="text-[#737373] font-bold text-sm">the quick fox jumps over the lazy dog</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <ChevronRight size={20} className="text-[#737373]" />
                                    <p className="text-[#737373] font-bold text-sm">the quick fox jumps over the lazy dog</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <ChevronRight size={20} className="text-[#737373]" />
                                    <p className="text-[#737373] font-bold text-sm">the quick fox jumps over the lazy dog</p>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-[#252B42] mt-4">the quick fox jumps over</h3>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-4">
                                    <ChevronRight size={20} className="text-[#737373]" />
                                    <p className="text-[#737373] font-bold text-sm">the quick fox jumps over the lazy dog</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <ChevronRight size={20} className="text-[#737373]" />
                                    <p className="text-[#737373] font-bold text-sm">the quick fox jumps over the lazy dog</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <ChevronRight size={20} className="text-[#737373]" />
                                    <p className="text-[#737373] font-bold text-sm">the quick fox jumps over the lazy dog</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bestseller Section */}
            <div className="bg-[#FAFAFA] py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h3 className="text-2xl font-bold text-[#252B42] uppercase mb-8">BESTSELLER PRODUCTS</h3>
                    <div className="border-t border-[#ECECEC] mb-8"></div>
                    <FeaturedProducts noTitle={true} />
                </div>
            </div>

            {/* Clients Section */}
            <Clients />
        </div >
    );
};

export default ProductDetail;