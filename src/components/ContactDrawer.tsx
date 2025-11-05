import { useEffect } from 'react';
import { X, Phone, Mail, Instagram, MapPin } from 'lucide-react';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
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
        className="relative bg-white w-full sm:max-w-md sm:mx-4 rounded-t-3xl sm:rounded-3xl shadow-2xl p-6 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-all"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-brand-dark" />
        </button>

        <h2 className="text-2xl font-bold text-brand-dark mb-6">Contact Us</h2>

        <div className="space-y-4">
          <a
            href="tel:7025500740"
            className="flex items-center gap-4 p-4 bg-brand-pink/10 hover:bg-brand-pink/20 rounded-xl transition-all"
          >
            <div className="p-3 bg-brand-pink rounded-full">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase">Phone</div>
              <div className="font-semibold text-brand-dark">7025500740</div>
            </div>
          </a>

          <a
            href="mailto:pastrymaniaimmadhihalli@gmail.com"
            className="flex items-center gap-4 p-4 bg-brand-teal/10 hover:bg-brand-teal/20 rounded-xl transition-all"
          >
            <div className="p-3 bg-brand-teal rounded-full">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-gray-500 uppercase">Email</div>
              <div className="font-semibold text-brand-dark truncate">
                pastrymaniaimmadhihalli@gmail.com
              </div>
            </div>
          </a>

          <a
            href="https://www.instagram.com/pastry_mania_?igsh=cnBiMWgwaWttbGg="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-pink-50 hover:bg-pink-100 rounded-xl transition-all"
          >
            <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full">
              <Instagram className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase">Instagram</div>
              <div className="font-semibold text-brand-dark">@pastry_mania_</div>
            </div>
          </a>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="p-3 bg-brand-dark rounded-full">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-500 uppercase mb-1">Address</div>
              <div className="text-sm text-gray-700 leading-relaxed">
                #1, Harikesav Nilaya<br />
                Immadihalli, Whitefield Main Road<br />
                Opposite Milk Dairy<br />
                Bengaluru, Karnataka - 560066
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
