import { useEffect, useState } from 'react';
import { X, MessageCircle, Check, Sparkles } from 'lucide-react';
import { Cake } from '../data/cakes';

interface CakeModalProps {
  cake: Cake;
  isOpen: boolean;
  onClose: () => void;
  onPurchase: (cake: Cake, quantity: 'full' | 'half') => void;
}

export default function CakeModal({ cake, isOpen, onClose, onPurchase }: CakeModalProps) {
  const [selectedQuantity, setSelectedQuantity] = useState<'full' | 'half'>('full');

  useEffect(() => {
    if (isOpen) {
      setSelectedQuantity('full');
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

  const selectedPrice = selectedQuantity === 'full' ? cake.price : cake.price_half;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-md" />

      {/* Modal Content */}
      <div
        className="relative bg-white w-full sm:max-w-2xl sm:mx-4 rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[95vh] overflow-hidden transform transition-all animate-in slide-in-from-bottom-4 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-white/95 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 backdrop-blur-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[95vh] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {/* Image Section */}
          <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
            <img
              src={cake.image}
              alt={cake.name}
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Eggless Badge */}
            <div className="absolute top-4 left-4">
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold shadow-xl backdrop-blur-sm flex items-center gap-2 ${cake.eggless
                  ? 'bg-emerald-500/95 text-white'
                  : 'bg-rose-500/95 text-white'
                  }`}
              >
                {cake.eggless ? (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Eggless
                  </>
                ) : (
                  'Contains Egg'
                )}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 sm:p-8">
            {/* Title and Category */}
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-brand-teal/10 text-brand-teal rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                {cake.category}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                {cake.name}
              </h2>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                {cake.description}
              </p>
            </div>

            {/* Quantity Selection */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
                Select Quantity
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Cake Option */}
                <label
                  className={`relative flex items-center gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${selectedQuantity === 'full'
                    ? 'border-brand-teal bg-brand-teal/5 shadow-lg shadow-brand-teal/20'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                >
                  <input
                    type="radio"
                    name="quantity"
                    checked={selectedQuantity === 'full'}
                    onChange={() => setSelectedQuantity('full')}
                    className="sr-only"
                  />

                  {/* Custom Radio */}
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedQuantity === 'full'
                      ? 'border-brand-teal bg-brand-teal'
                      : 'border-gray-300'
                      }`}
                  >
                    {selectedQuantity === 'full' && (
                      <Check className="w-4 h-4 text-white" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-600 mb-1">
                      Full Cake
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      ₹{cake.price}
                    </div>
                  </div>

                  {selectedQuantity === 'full' && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-teal text-white">
                        Selected
                      </span>
                    </div>
                  )}
                </label>

                {/* Half Cake Option */}
                {cake.price_half && (
                  <label
                    className={`relative flex items-center gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${selectedQuantity === 'half'
                      ? 'border-brand-teal bg-brand-teal/5 shadow-lg shadow-brand-teal/20'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                  >
                    <input
                      type="radio"
                      name="quantity"
                      checked={selectedQuantity === 'half'}
                      onChange={() => setSelectedQuantity('half')}
                      className="sr-only"
                    />

                    {/* Custom Radio */}
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedQuantity === 'half'
                        ? 'border-brand-teal bg-brand-teal'
                        : 'border-gray-300'
                        }`}
                    >
                      {selectedQuantity === 'half' && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-600 mb-1">
                        Half Cake
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        ₹{cake.price_half}
                      </div>
                    </div>

                    {selectedQuantity === 'half' && (
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-teal text-white">
                          Selected
                        </span>
                      </div>
                    )}
                  </label>
                )}
              </div>
            </div>

            {/* Price Summary */}
            <div className="mb-6 p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-medium">Total Amount</span>
                <span className="text-3xl font-bold text-brand-dark">
                  ₹{selectedPrice}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-4 px-6 rounded-xl font-semibold border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onPurchase(cake, selectedQuantity);
                  onClose();
                }}
                className="flex-1 py-4 px-6 rounded-xl font-semibold bg-gradient-to-r from-brand-teal to-brand-teal/90 hover:from-brand-teal/90 hover:to-brand-teal text-white transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Purchase on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}