import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  egglessOnly: boolean;
  onEgglessToggle: () => void;
}

export default function SearchBar({
  searchTerm,
  onSearchChange,
  egglessOnly,
  onEgglessToggle,
}: SearchBarProps) {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search your item here"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all"
          />
        </div>

        <button
          onClick={onEgglessToggle}
          className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
            egglessOnly
              ? 'bg-brand-teal text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <div
            className={`w-10 h-6 rounded-full relative transition-colors ${
              egglessOnly ? 'bg-white/30' : 'bg-gray-300'
            }`}
          >
            <div
              className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                egglessOnly ? 'translate-x-5' : 'translate-x-1'
              }`}
            />
          </div>
          <span className="whitespace-nowrap">Eggless Only</span>
        </button>
      </div>
    </div>
  );
}
