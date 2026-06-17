import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SearchResults } from './components/SearchResults';
import { HowItWorks } from './components/HowItWorks';
import { Neighborhoods } from './components/Neighborhoods';
import { TopPicks } from './components/TopPicks';
import { BookingCta } from './components/BookingCta';
import { Footer } from './components/Footer';
import { NeighborhoodPage } from './components/NeighborhoodPage';
import { siteContent } from './lib/siteContent';
import { Restaurant } from './lib/siteContent';

function App() {
  const [searchActive, setSearchActive] = useState(false);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]);
  const [currentPage, setCurrentPage] = useState<'home' | 'neighborhood'>('home');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('');

  // Handle hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#neighborhood/')) {
        const neighborhood = decodeURIComponent(hash.replace('#neighborhood/', ''));
        setSelectedNeighborhood(neighborhood);
        setCurrentPage('neighborhood');
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSearch = (filters: { name: string; location: string; cuisine: string }) => {
    const { name, location, cuisine } = filters;
    
    // If all filters are empty, don't show results
    if (!name && !location && !cuisine) {
      setSearchActive(false);
      return;
    }

    // Filter restaurants based on search criteria
    const results = siteContent.topPicks.restaurants.filter((restaurant) => {
      const matchesName = !name || restaurant.name.toLowerCase().includes(name.toLowerCase());
      const matchesLocation = !location || restaurant.neighborhood.toLowerCase().includes(location.toLowerCase());
      const matchesCuisine = !cuisine || restaurant.cuisine.toLowerCase().includes(cuisine.toLowerCase());
      
      return matchesName && matchesLocation && matchesCuisine;
    });

    setFilteredRestaurants(results);
    setSearchActive(true);
  };

  const handleNeighborhoodClick = (neighborhood: string) => {
    setSelectedNeighborhood(neighborhood);
    window.location.hash = `neighborhood/${encodeURIComponent(neighborhood)}`;
  };

  const handleBackToHome = () => {
    window.location.hash = '';
  };

  if (currentPage === 'neighborhood') {
    return (
      <>
        <Header />
        <NeighborhoodPage 
          neighborhood={selectedNeighborhood} 
          onBack={handleBackToHome}
        />
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection onSearch={handleSearch} />
        <SearchResults restaurants={filteredRestaurants} isVisible={searchActive} />
        <HowItWorks />
        <Neighborhoods onNeighborhoodClick={handleNeighborhoodClick} />
        <TopPicks />
        <BookingCta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
