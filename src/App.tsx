import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SearchResults } from './components/SearchResults';
import { HowItWorks } from './components/HowItWorks';
import { Neighborhoods } from './components/Neighborhoods';
import { TopPicks } from './components/TopPicks';
import { BookingCta } from './components/BookingCta';
import { Footer } from './components/Footer';
import { siteContent } from './lib/siteContent';
import { Restaurant } from './lib/siteContent';

function App() {
  const [searchActive, setSearchActive] = useState(false);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]);

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

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection onSearch={handleSearch} />
        <SearchResults restaurants={filteredRestaurants} isVisible={searchActive} />
        <HowItWorks />
        <Neighborhoods />
        <TopPicks />
        <BookingCta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
