import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProductCard({ product }) {
    const navigate = useNavigate();
    const categories = useSelector((state) => state.product.categories);

    const handleClick = () => {
        const category = categories.find((c) => c.id === product.category_id);
        const gender = category?.code?.startsWith('k:') ? 'kadin' : 'erkek';
        const categoryTitle = category?.title?.toLowerCase() || 'general';
        const nameSlug = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

        // Fallback or specific URL construction
        if (category) {
            navigate(`/shop/${gender}/${categoryTitle}/${product.category_id}/${nameSlug}/${product.id}`);
        } else {
            // Fallback if category info is missing for some reason
            navigate(`/shop/general/general/0/${nameSlug}/${product.id}`);
        }
    };

    return (
        <div
            className="flex flex-col items-center gap-3 p-4 group cursor-pointer transition-all hover:shadow-md bg-white h-full"
            onClick={handleClick}
        >
            <div className="w-full aspect-[3/4] overflow-hidden rounded-sm">
                <img
                    src={product.image || product.images?.[0]?.url}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rendering-crisp-edges" />
            </div>

            <h5 className="font-bold text-[#252B42] text-center mt-2">{product.name}</h5>
            <p className="text-[#737373] text-sm font-bold text-center">{product.category}</p>

            <div className="flex gap-2 font-bold mt-1">
                <span className="text-[#BDBDBD] line-through">${product.oldPrice || (product.price * 1.6).toFixed(2)}</span>
                <span className="text-[#23856D]">${product.price}</span>
            </div>

            <div className="flex gap-1.5 mt-2">
                {(product.colors && product.colors.length > 0 ? product.colors : ['#23A6F0', '#23856D', '#E77C40', '#252B42']).map((color, index) => (
                    <div
                        key={index}
                        className="w-4 h-4 rounded-full border border-gray-100 shadow-sm"
                        style={{ backgroundColor: color }}
                    ></div>
                ))}
            </div>
        </div>
    );
}