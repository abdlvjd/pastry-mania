import { LayoutGrid } from 'lucide-react';

interface CategoryBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryBar({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryBarProps) {
  return (
    <div className="bg-white border-b sticky top-[73px] z-40 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          <LayoutGrid className="w-5 h-5 text-brand-dark flex-shrink-0" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-brand-pink text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
