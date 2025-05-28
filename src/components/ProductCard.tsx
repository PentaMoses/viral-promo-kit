
import React from 'react';
import { ExternalLink, Heart, Star } from 'lucide-react';
import PromoBadge from './PromoBadge';

interface ProductCardProps {
  title: string;
  originalPrice: string;
  discountPrice: string;
  discount: string;
  rating: number;
  platform: 'temu' | 'shopee' | 'aliexpress';
  imageUrl?: string;
  isViral?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  originalPrice,
  discountPrice,
  discount,
  rating,
  platform,
  imageUrl,
  isViral = false
}) => {
  const getPlatformColor = () => {
    switch (platform) {
      case 'temu':
        return 'bg-orange-500';
      case 'shopee':
        return 'bg-brand-orange';
      case 'aliexpress':
        return 'bg-red-500';
      default:
        return 'bg-brand-blue';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100">
      {/* Image Container */}
      <div className="relative h-48 bg-gray-100">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <span className="text-gray-400 font-inter">Imagem do produto</span>
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-2 left-2">
          <PromoBadge type="discount" text="OFF" percentage={discount} />
        </div>
        
        {isViral && (
          <div className="absolute top-2 right-2">
            <PromoBadge type="viral" text="VIRAL" />
          </div>
        )}

        {/* Platform Badge */}
        <div className={`absolute bottom-2 left-2 ${getPlatformColor()} text-white px-2 py-1 rounded-lg text-xs font-bold uppercase`}>
          {platform}
        </div>

        {/* Favorite Button */}
        <button className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-inter font-semibold text-gray-800 text-sm line-clamp-2 mb-2">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(rating) ? 'text-brand-yellow fill-brand-yellow' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({rating})</span>
        </div>

        {/* Prices */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-brand-blue">
            {discountPrice}
          </span>
          <span className="text-sm text-gray-500 line-through">
            {originalPrice}
          </span>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-gradient-to-r from-brand-blue to-brand-blue/80 text-white py-2 px-4 rounded-xl font-montserrat font-bold text-sm hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
          VER OFERTA
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
