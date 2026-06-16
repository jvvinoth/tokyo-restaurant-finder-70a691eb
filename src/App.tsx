import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HowItWorks } from './components/HowItWorks';
import { Neighborhoods } from './components/Neighborhoods';
import { TopPicks } from './components/TopPicks';
import { BookingCta } from './components/BookingCta';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
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
