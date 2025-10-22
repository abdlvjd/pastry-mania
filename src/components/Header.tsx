import { Phone, Mail, Instagram, Menu } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/logo.jpg"
            alt="Pastry Mania Logo"
            className="h-12 w-auto object-contain"
          />
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:7025500740"
            className="p-2 hover:bg-brand-pink/10 rounded-full transition-colors"
            aria-label="Call us"
          >
            <Phone className="w-5 h-5 text-brand-dark" />
          </a>

          <a
            href="mailto:pastrymaniaimmadhihalli@gmail.com"
            className="p-2 hover:bg-brand-pink/10 rounded-full transition-colors"
            aria-label="Email us"
          >
            <Mail className="w-5 h-5 text-brand-dark" />
          </a>

          <a
            href="https://www.instagram.com/pastry_mania_?igsh=cnBiMWgwaWttbGg="
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-brand-pink/10 rounded-full transition-colors"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-5 h-5 text-brand-dark" />
          </a>

          <button
            onClick={onContactClick}
            className="p-2 hover:bg-brand-pink/10 rounded-full transition-colors lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-brand-dark" />
          </button>
        </div>
      </div>
    </header>
  );
}
