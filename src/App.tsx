import { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryBar from './components/CategoryBar';
import CakeCard from './components/CakeCard';
import CakeModal from './components/CakeModal';
import ContactDrawer from './components/ContactDrawer';
import { cakes, Cake } from './data/cakes';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [egglessOnly, setEgglessOnly] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCake, setSelectedCake] = useState<Cake | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const categories = useMemo(() => {
    const allCategories = Array.from(new Set(cakes.map((cake) => cake.category)));
    return ['All', ...allCategories];
  }, []);

  const filteredCakes = useMemo(() => {
    return cakes.filter((cake) => {
      const matchesSearch = cake.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesEggless = !egglessOnly || cake.eggless;
      const matchesCategory = selectedCategory === 'All' || cake.category === selectedCategory;
      return matchesSearch && matchesEggless && matchesCategory;
    });
  }, [searchTerm, egglessOnly, selectedCategory]);

  const handleViewCake = (cake: Cake) => {
    setSelectedCake(cake);
    setIsModalOpen(true);
  };

  const handlePurchaseCake = (cake: Cake) => {
    const message = encodeURIComponent(
      `Hi Pastry Mania! I would like to purchase the cake: ${cake.name}`
    );
    window.open(`https://wa.me/7025500740?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        egglessOnly={egglessOnly}
        onEgglessToggle={() => setEgglessOnly(!egglessOnly)}
      />

      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <main className="container mx-auto px-4 py-6">
        {filteredCakes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No cakes found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredCakes.map((cake) => (
              <CakeCard
                key={cake.id}
                cake={cake}
                onView={handleViewCake}
                onPurchase={handlePurchaseCake}
              />
            ))}
          </div>
        )}
      </main>

      {selectedCake && (
        <CakeModal
          cake={selectedCake}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onPurchase={handlePurchaseCake}
        />
      )}

      <ContactDrawer isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;
