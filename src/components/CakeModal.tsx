import { useEffect, useState } from 'react';
import { X, MessageCircle, Check } from 'lucide-react';

interface Cake {
  id: number;
  name: string;
  description: string;
  price: number;
  price_half?: number;
  image: string;
  category: string;
}

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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-md" />
      <div
        className="relative bg-white w-full sm:max-w-2xl sm:mx-4 rounded-t-[2rem] sm:rounded-3xl shadow-2xl max-h-[95vh] overflow-hidden transform transition-all animate-in slide-in-from-bottom-4 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 sm:p-2.5 bg-white/95 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 backdrop-blur-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
        </button>
        <div className="overflow-y-auto max-h-[95vh] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <div className="relative aspect-[16/9] sm:aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
            <img
              src={cake.image}
              alt={cake.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
              <div className="bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-lg border border-white/20">
                <p className="text-[10px] sm:text-xs text-gray-700 font-medium text-center leading-tight">
                  <span className="inline-block mr-1">✨</span>
                  Actual design may vary from image shown
                  <span className="inline-block ml-1">✨</span>
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:p-8">
            <div className="mb-5 sm:mb-6">
              <div className="flex items-center gap-2 flex-wrap mb-2 sm:mb-3">
                <div className="inline-block px-3 py-1 bg-brand-teal/10 text-brand-teal rounded-full text-xs font-semibold uppercase tracking-wider">
                  {cake.category}
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold border border-green-200">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  EGGLESS AVAILABLE
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                {cake.name}
              </h2>
            </div>
            <div className="mb-6 sm:mb-8">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                {cake.description}
              </p>
            </div>
            {cake.category === 'Customised Cakes' ? (
              <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl border border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base text-gray-600 font-medium">Rate depends on design</span>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3 sm:mb-4">
                    Select Quantity
                  </h3>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <label
                      className={`relative flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all duration-200 ${selectedQuantity === 'full'
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
                      <div
                        className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedQuantity === 'full'
                          ? 'border-brand-teal bg-brand-teal'
                          : 'border-gray-300'
                          }`}
                      >
                        {selectedQuantity === 'full' && (
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs sm:text-sm font-medium text-gray-600 mb-0.5 sm:mb-1">
                          Full Cake
                        </div>
                        <div className="text-xl sm:text-2xl font-bold text-gray-900">
                          ₹{cake.price}
                        </div>
                      </div>
                      {selectedQuantity === 'full' && (
                        <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2">
                          <div className="relative">
                            <div className="absolute inset-0 bg-brand-teal rounded-full blur-sm animate-pulse"></div>
                            <span className="relative inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-brand-teal to-emerald-600 text-white shadow-lg">
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3]" />
                            </span>
                          </div>
                        </div>
                      )}
                    </label>
                    {cake.price_half && (
                      <label
                        className={`relative flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all duration-200 ${selectedQuantity === 'half'
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
                        <div
                          className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedQuantity === 'half'
                            ? 'border-brand-teal bg-brand-teal'
                            : 'border-gray-300'
                            }`}
                        >
                          {selectedQuantity === 'half' && (
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="text-xs sm:text-sm font-medium text-gray-600 mb-0.5 sm:mb-1">
                            Half Cake
                          </div>
                          <div className="text-xl sm:text-2xl font-bold text-gray-900">
                            ₹{cake.price_half}
                          </div>
                        </div>
                        {selectedQuantity === 'half' && (
                          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2">
                            <div className="relative">
                              <div className="absolute inset-0 bg-brand-teal rounded-full blur-sm animate-pulse"></div>
                              <span className="relative inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-brand-teal to-emerald-600 text-white shadow-lg">
                                <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3]" />
                              </span>
                            </div>
                          </div>
                        )}
                      </label>
                    )}
                  </div>
                </div>
                <div className="mb-5 sm:mb-6 p-4 sm:p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base text-gray-600 font-medium">Total Amount</span>
                    <span className="text-2xl sm:text-3xl font-bold text-brand-dark">
                      ₹{selectedQuantity === 'full' ? cake.price : cake.price_half}
                    </span>
                  </div>
                </div>
              </>
            )}
            <div className="flex flex-row gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-3.5 sm:py-4 px-6 rounded-xl font-semibold border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95 text-sm sm:text-base"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onPurchase(cake, selectedQuantity);
                  onClose();
                }}
                className="flex-1 py-3.5 sm:py-4 px-6 rounded-xl font-semibold bg-gradient-to-r from-brand-teal to-brand-teal/90 hover:from-brand-teal/90 hover:to-brand-teal text-white transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                {cake.category === 'Customised Cakes' ? 'Contact Us' : 'Purchase'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
