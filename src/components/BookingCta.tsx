import React, { useEffect, useRef, useState } from 'react';
import { siteContent } from '../lib/siteContent';

export const BookingCta: React.FC = () => {
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

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="book-now"
      ref={sectionRef}
      className="py-16 md:py-28 bg-background"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div
          className={`bg-gradient-to-br from-secondary to-secondary-dark rounded-3xl p-12 md:p-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-white tracking-tight leading-tight">
            {siteContent.bookingCta.headline}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-2xl mx-auto leading-relaxed">
            {siteContent.bookingCta.subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <button
              onClick={() => handleNavClick('#top-picks')}
              className="bg-white text-secondary px-8 py-4 rounded-full font-medium text-lg hover:bg-background transition-all duration-200 hover:scale-105 shadow-lg"
            >
              {siteContent.bookingCta.primaryCta}
            </button>
            <button
              onClick={() => handleNavClick('#how-it-works')}
              className="bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-colors duration-200"
            >
              {siteContent.bookingCta.secondaryCta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
