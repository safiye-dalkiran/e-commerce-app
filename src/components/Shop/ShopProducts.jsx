import React, { useEffect, useState } from 'react';
import { LayoutGrid, List, Loader } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts, setFilter, setSort, setOffset } from '../../store/actions/productActions';
import ProductCard from './ProductCard';

function ShopProducts() {
    const dispatch = useDispatch();
    const { categoryId } = useParams();
    const { productList, total, fetchState, filter, sort, limit, offset } = useSelector((state) => state.product);

    // Local state for form inputs
    const [localFilter, setLocalFilter] = useState(filter);
    const [localSort, setLocalSort] = useState(sort);

    const handleFilter = () => {
        dispatch(setFilter(localFilter));
        dispatch(setSort(localSort));
        dispatch(setOffset(0)); // Reset pagination on filter
    };

    // Reset pagination when category changes
    useEffect(() => {
        dispatch(setOffset(0));
    }, [categoryId, dispatch]);

    useEffect(() => {
        dispatch(fetchProducts({ category: categoryId, filter, sort, limit, offset }));
    }, [dispatch, categoryId, filter, sort, limit, offset]);

    const totalPages = Math.ceil(total / limit);
    const currentPage = Math.floor(offset / limit) + 1;

    const handlePageChange = (page) => {
        const newOffset = (page - 1) * limit;
        dispatch(setOffset(newOffset));
        window.scrollTo(0, 0);
    };

    if (fetchState === "FETCHING") {
        return (
            <div className="w-full h-96 flex items-center justify-center">
                <Loader className="animate-spin text-[#23A6F0]" size={48} />
            </div>
        );
    }

    // Generate page numbers
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <section className="py-12 bg-white font-montserrat">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Filtreleme ve Sonuç Çubuğu */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                    <p className="text-[#737373] font-bold text-sm">
                        Showing all {total} results
                    </p>

                    <div className="flex items-center gap-4">
                        <span className="text-[#737373] font-bold text-sm">Views:</span>
                        <div className="flex gap-2">
                            <button className="p-4 border border-[#ECECEC] rounded-md hover:bg-gray-50">
                                <LayoutGrid size={16} className="text-[#252B42]" />
                            </button>
                            <button className="p-4 border border-[#ECECEC] rounded-md hover:bg-gray-50">
                                <List size={16} className="text-[#737373]" />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-[#F9F9F9] border border-[#DDDDDD] text-[#737373] text-sm py-3 px-4 rounded-md outline-none w-full sm:w-[200px]"
                            value={localFilter}
                            onChange={(e) => setLocalFilter(e.target.value)}
                        />
                        <div className="flex gap-4 w-full sm:w-auto">
                            <select
                                className="bg-[#F9F9F9] border border-[#DDDDDD] text-[#737373] text-sm py-3 px-4 rounded-md outline-none cursor-pointer flex-1 sm:flex-none"
                                value={localSort}
                                onChange={(e) => setLocalSort(e.target.value)}
                            >
                                <option value="">Sort By</option>
                                <option value="price:asc">Price: Low to High</option>
                                <option value="price:desc">Price: High to Low</option>
                                <option value="rating:asc">Rating: Low to High</option>
                                <option value="rating:desc">Rating: High to Low</option>
                            </select>
                            <button
                                onClick={handleFilter}
                                className="bg-[#23A6F0] text-white py-3 px-8 rounded-md font-bold text-sm hover:bg-[#1a8cd8] transition-all flex-1 sm:flex-none"
                            >
                                Filter
                            </button>
                        </div>
                    </div>
                </div>

                {/* Ürün Izgarası - ARTIK DİNAMİK */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-20">
                    {productList.map(item => (
                        <div key={item.id} className="flex justify-center">
                            <ProductCard product={item} />
                        </div>
                    ))}
                </div>

                {/* Sayfalama (Pagination) */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-16">
                        <div className="flex border border-[#BDBDBD] rounded-md overflow-hidden bg-white shadow-sm">
                            <button
                                disabled={currentPage === 1}
                                onClick={() => handlePageChange(1)}
                                className={`px-6 py-4 font-bold border-r border-[#BDBDBD] transition-colors ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-[#23A6F0] hover:bg-[#F3F3F3]'}`}
                            >
                                First
                            </button>

                            {pageNumbers.map(number => (
                                <button
                                    key={number}
                                    onClick={() => handlePageChange(number)}
                                    className={`px-5 py-4 font-bold border-r border-[#BDBDBD] ${currentPage === number ? 'bg-[#23A6F0] text-white' : 'text-[#23A6F0] hover:bg-[#F3F3F3]'}`}
                                >
                                    {number}
                                </button>
                            ))}

                            <button
                                disabled={currentPage === totalPages}
                                onClick={() => handlePageChange(currentPage + 1)}
                                className={`px-6 py-4 font-bold transition-colors ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-[#23A6F0] hover:bg-[#F3F3F3]'}`}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ShopProducts;