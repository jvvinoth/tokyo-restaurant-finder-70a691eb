import React, { useEffect, useRef, useState } from 'react';
import { siteContent } from '../lib/siteContent';

export const TopPicks: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="top-picks"
      ref={sectionRef}
      className="py-16 md:py-28 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-muted">
            {siteContent.topPicks.overline}
          </p>
          <h2
            className="font-serif font-semibold text-4xl md:text-5xl text-primary mt-2 tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            {siteContent.topPicks.headline}
          </h2>
          <p className="text-lg text-muted mt-4 leading-relaxed">
            {siteContent.topPicks.subtext}
          </p>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {siteContent.topPicks.restaurants.map((restaurant, index) => (
            <div
              key={restaurant.name}
              className={`bg-background rounded-2xl overflow-hidden border border-border group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 80}ms` : '0ms',
              }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-102"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {restaurant.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-accent/20 text-secondary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Restaurant Name */}
                <h3 className="font-serif font-semibold text-2xl md:text-3xl text-primary">
                  {restaurant.name}
                </h3>

                {/* Meta Info */}
                <div className="flex items-center gap-3 mt-2 text-sm text-muted">
                  <span>{restaurant.neighborhood}</span>
                  <span>•</span>
                  <span>{restaurant.cuisine}</span>
                  <span>•</span>
                  <span className="font-medium">{restaurant.priceRange}</span>
                </div>

                {/* Description */}
                <p className="text-base text-muted mt-3 leading-relaxed">
                  {restaurant.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
