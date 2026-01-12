import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
    const navigate = useNavigate();

    return (
        <div
            className="flex flex-col items-center gap-3 p-4 group cursor-pointer transition-all hover:shadow-md bg-white h-full"
            onClick={() => navigate(`/shop/${product.id}`)}
        >
            <div className="w-full aspect-[3/4] overflow-hidden rounded-sm">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rendering-crisp-edges" />
            </div>

            <h5 className="font-bold text-[#252B42] text-center mt-2">{product.name}</h5>
            <p className="text-[#737373] text-sm font-bold text-center">{product.category}</p>

            <div className="flex gap-2 font-bold mt-1">
                <span className="text-[#BDBDBD] line-through">${product.oldPrice}</span>
                <span className="text-[#23856D]">${product.price}</span>
            </div>

            <div className="flex gap-1.5 mt-2">
                {product.colors && product.colors.map((color, index) => (
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