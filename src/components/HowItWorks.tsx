import React, { useEffect, useRef, useState } from 'react';
import { Search, BookOpen, CalendarCheck, LucideIcon } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap: Record<string, LucideIcon> = {
  Search,
  BookOpen,
  CalendarCheck,
};

export const HowItWorks: React.FC = () => {
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
      id="how-it-works"
      ref={sectionRef}
      className="py-16 md:py-28 bg-surface"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-wide text-muted">
            {siteContent.howItWorks.overline}
          </p>
          <h2
            className="font-serif font-semibold text-4xl md:text-5xl text-primary mt-2 tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            {siteContent.howItWorks.headline}
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {siteContent.howItWorks.steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <div
                key={step.number}
                className={`bg-background p-8 rounded-2xl border border-border transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                {/* Number Badge */}
                <div className="text-6xl font-serif font-semibold text-accent">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mt-4">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-primary mt-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-base text-muted mt-3 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
