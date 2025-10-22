import { useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { Cake } from '../data/cakes';

interface CakeModalProps {
  cake: Cake;
  isOpen: boolean;
  onClose: () => void;
  onPurchase: (cake: Cake) => void;
}

export default function CakeModal({ cake, isOpen, onClose, onPurchase }: CakeModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleEscape);

      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div
        className="relative bg-white w-full sm:max-w-lg sm:mx-4 rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-brand-dark" />
        </button>

        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <img
            src={cake.image}
            alt={cake.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold shadow-md ${
                cake.eggless
                  ? 'bg-brand-teal text-white'
                  : 'bg-brand-pink/95 text-white'
              }`}
            >
              {cake.eggless ? '🌱 Eggless' : 'Contains Egg'}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-brand-dark mb-1">
              {cake.name}
            </h2>
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              {cake.category}
            </p>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">{cake.description}</p>
          </div>

          <div className="mb-6">
            <div className="inline-block">
              <div className="text-xs text-gray-500 mb-1">Price</div>
              <div className="text-3xl font-bold text-brand-dark">
                ₹{cake.price}
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 px-6 rounded-xl font-semibold border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition-all"
            >
              Close
            </button>
            <button
              onClick={() => {
                onPurchase(cake);
                onClose();
              }}
              className="flex-1 py-3 px-6 rounded-xl font-semibold bg-brand-teal hover:bg-brand-teal/90 text-white transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
