import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar, UtensilsCrossed } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center bg-background relative overflow-hidden pt-20"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Content - 60% */}
          <div className="lg:col-span-3">
            {/* Badge */}
            <div
              className={`inline-block transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <span className="bg-accent text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                {siteContent.hero.badge}
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`font-serif font-semibold text-6xl md:text-7xl lg:text-8xl text-primary leading-[1.05] tracking-tight mt-6 transition-all duration-500 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ letterSpacing: '-0.03em' }}
            >
              {siteContent.hero.headline}
            </h1>

            {/* Subtext */}
            <p
              className={`text-lg md:text-xl text-muted max-w-xl mt-6 leading-relaxed transition-all duration-500 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              {siteContent.hero.subtext}
            </p>

            {/* Search Bar */}
            <div
              className={`mt-10 transition-all duration-500 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <div className="bg-white border-2 border-border rounded-full p-2 shadow-lg flex flex-col sm:flex-row gap-2">
                {/* Location Input */}
                <div className="flex items-center gap-3 px-4 py-3 flex-1 min-w-0">
                  <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                  <input
                    type="text"
                    placeholder={siteContent.hero.searchPlaceholders.location}
                    className="bg-transparent outline-none text-primary placeholder:text-muted w-full"
                  />
                </div>

                <div className="hidden sm:block w-px bg-border" />

                {/* Date Input */}
                <div className="flex items-center gap-3 px-4 py-3 flex-1 min-w-0">
                  <Calendar className="w-5 h-5 text-secondary flex-shrink-0" />
                  <input
                    type="text"
                    placeholder={siteContent.hero.searchPlaceholders.date}
                    className="bg-transparent outline-none text-primary placeholder:text-muted w-full"
                  />
                </div>

                <div className="hidden sm:block w-px bg-border" />

                {/* Cuisine Input */}
                <div className="flex items-center gap-3 px-4 py-3 flex-1 min-w-0">
                  <UtensilsCrossed className="w-5 h-5 text-secondary flex-shrink-0" />
                  <input
                    type="text"
                    placeholder={siteContent.hero.searchPlaceholders.cuisine}
                    className="bg-transparent outline-none text-primary placeholder:text-muted w-full"
                  />
                </div>

                {/* CTA Button */}
                <button className="bg-secondary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-secondary-dark transition-colors duration-200 whitespace-nowrap">
                  {siteContent.hero.searchCta}
                </button>
              </div>

              {/* Trust Indicator */}
              <p className="text-sm text-muted mt-6">
                {siteContent.hero.trustIndicator}
              </p>
            </div>
          </div>

          {/* Right Image - 40% */}
          <div
            className={`lg:col-span-2 transition-all duration-500 delay-400 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src={siteContent.hero.heroImage}
                alt="Tokyo restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
