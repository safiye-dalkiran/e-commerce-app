export default function ProductCard({ product }) {
    return (
        <div className="flex flex-col items-center gap-3 p-4 group cursor-pointer">
            <div className="w-full aspect-[3/4] overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
            </div>
            <h5 className="font-bold text-text-main text-center">{product.name}</h5>
            <p className="text-text-muted text-sm font-bold text-center">{product.category}</p>
            <div className="flex gap-2 font-bold">
                <span className="text-[#bdbdbd]">$16.48</span>
                <span className="text-secondary">$6.48</span>
            </div>
            <div className="flex gap-1.5">
                <div className="w-4 h-4 rounded-full bg-primary" />
                <div className="w-4 h-4 rounded-full bg-secondary" />
                <div className="w-4 h-4 rounded-full bg-[#E77C40]" />
                <div className="w-4 h-4 rounded-full bg-[#252B42]" />
            </div>
        </div>
    );
}