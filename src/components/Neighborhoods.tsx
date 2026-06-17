import React, { useEffect, useRef, useState } from 'react';
import { siteContent } from '../lib/siteContent';

interface NeighborhoodsProps {
  onNeighborhoodClick?: (neighborhood: string) => void;
}

export const Neighborhoods: React.FC<NeighborhoodsProps> = ({ onNeighborhoodClick }) => {
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

  const handleClick = (neighborhoodName: string) => {
    if (onNeighborhoodClick) {
      onNeighborhoodClick(neighborhoodName);
      window.scrollTo(0, 0);
    }
  };

  return (
    <section
      id="neighborhoods"
      ref={sectionRef}
      className="py-16 md:py-28 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-muted">
            {siteContent.neighborhoods.overline}
          </p>
          <h2
            className="font-serif font-semibold text-4xl md:text-5xl text-primary mt-2 tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            {siteContent.neighborhoods.headline}
          </h2>
          <p className="text-lg text-muted mt-4 leading-relaxed">
            {siteContent.neighborhoods.subtext}
          </p>
        </div>

        {/* Neighborhoods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {siteContent.neighborhoods.items.map((neighborhood, index) => (
            <div
              key={neighborhood.name}
              onClick={() => handleClick(neighborhood.name)}
              className={`group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 80}ms` : '0ms',
              }}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif font-semibold text-2xl text-white">
                  {neighborhood.name}
                </h3>
                <p className="text-sm text-white/90 mt-1">
                  {neighborhood.count}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#neighborhoods"
            className="text-secondary hover:underline font-medium inline-block transition-colors duration-200"
          >
            {siteContent.neighborhoods.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};
