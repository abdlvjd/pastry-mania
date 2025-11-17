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
      const matchesCategory = selectedCategory === 'All' || cake.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleViewCake = (cake: Cake) => {
    setSelectedCake(cake);
    setIsModalOpen(true);
  };

  const handlePurchaseCake = (cake: Cake, quantity: 'full' | 'half' = 'full') => {
    if (cake.category === 'Customised Cakes') {
      const message = encodeURIComponent(
        `Hi Pastry Mania! I would like to inquire about a custom cake: ${cake.name}.`
      );
      window.open(`https://wa.me/7025500740?text=${message}`, '_blank');
    } else {
      const quantityText = quantity === 'full' ? 'Full Cake' : 'Half Cake';
      const price = quantity === 'full' ? cake.price : cake.price_half;
      const message = encodeURIComponent(
        `Hi Pastry Mania! I would like to purchase:\n\nCake: ${cake.name}\nQuantity: ${quantityText}\nPrice: ₹${price}`
      );
      window.open(`https://wa.me/7025500740?text=${message}`, '_blank');
    }
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <Header onContactClick={() => setIsContactOpen(true)} />
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
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
