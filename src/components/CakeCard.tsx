import { Eye, MessageCircle } from 'lucide-react';
import { Cake } from '../data/cakes';

interface CakeCardProps {
  cake: Cake;
  onView: (cake: Cake) => void;
  onPurchase: (cake: Cake) => void;
}

export default function CakeCard({ cake, onView, onPurchase }: CakeCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={cake.image}
          alt={cake.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              cake.eggless
                ? 'bg-brand-teal text-white'
                : 'bg-brand-pink/90 text-white'
            }`}
          >
            {cake.eggless ? '🌱 Eggless' : 'Contains Egg'}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-bold text-brand-dark line-clamp-1">
            {cake.name}
          </h3>
          <p className="text-xs text-gray-500 uppercase tracking-wide">
            {cake.category}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-brand-dark">
            ₹{cake.price}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onView(cake)}
              className="p-2 bg-gray-100 hover:bg-brand-pink hover:text-white rounded-lg transition-all duration-200"
              aria-label={`View ${cake.name}`}
            >
              <Eye className="w-5 h-5" />
            </button>

            <button
              onClick={() => onPurchase(cake)}
              className="p-2 bg-brand-teal hover:bg-brand-teal/90 text-white rounded-lg transition-all duration-200"
              aria-label={`Purchase ${cake.name}`}
            >
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
