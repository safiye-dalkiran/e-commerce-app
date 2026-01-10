import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
    const navigate = useNavigate();
    
    return (
        <div 
            className="flex flex-col items-center gap-3 p-4 group cursor-pointer"
            onClick={() => navigate(`/shop/${product.id || 1}`)} // Ürün ID'sine göre yönlendirir
        >
            <div className="w-full aspect-[3/4] overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
            </div>
            <h5 className="font-bold text-[#252B42] text-center">{product.name}</h5>
            <p className="text-[#737373] text-sm font-bold text-center">{product.category}</p>
            <div className="flex gap-2 font-bold">
                <span className="text-[#bdbdbd]">$16.48</span>
                <span className="text-[#23856D]">$6.48</span>
            </div>
            <div className="flex gap-1.5">
                <div className="w-4 h-4 rounded-full bg-[#23A6F0]" />
                <div className="w-4 h-4 rounded-full bg-[#23856D]" />
                <div className="w-4 h-4 rounded-full bg-[#E77C40]" />
                <div className="w-4 h-4 rounded-full bg-[#252B42]" />
            </div>
        </div>
    );
}