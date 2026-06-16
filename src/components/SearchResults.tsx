import React from 'react';
import { Star, MapPin, Phone } from 'lucide-react';
import { Restaurant } from '../lib/siteContent';

interface SearchResultsProps {
  restaurants: Restaurant[];
  isVisible: boolean;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ restaurants, isVisible }) => {
  if (!isVisible) return null;

  return (
    <section id="search-results" className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Results Header */}
        <div className="mb-8">
          <h2 className="font-serif font-semibold text-3xl md:text-4xl text-primary tracking-tight">
            {restaurants.length} {restaurants.length === 1 ? 'restaurant' : 'restaurants'} found
          </h2>
          <p className="text-muted mt-2">Showing the best matches for your search</p>
        </div>

        {/* Results List */}
        {restaurants.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-muted">No restaurants found matching your criteria.</p>
            <p className="text-muted mt-2">Try adjusting your filters to see more results.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {restaurants.map((restaurant, index) => (
              <div
                key={`${restaurant.name}-${index}`}
                className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  {/* Image */}
                  <div className="md:col-span-4 lg:col-span-3">
                    <div className="relative aspect-[4/3] md:aspect-square overflow-hidden bg-surface">
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-8 lg:col-span-9 p-6 md:p-8 flex flex-col">
                    <div className="flex-1">
                      {/* Header Row */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-serif font-semibold text-2xl md:text-3xl text-primary mb-2">
                            {restaurant.name}
                          </h3>
                          
                          {/* Meta Info */}
                          <div className="flex flex-wrap items-center gap-2 text-sm text-muted mb-3">
                            <span className="font-medium">{restaurant.cuisine}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {restaurant.neighborhood}
                            </span>
                            <span>•</span>
                            <span>{restaurant.distance}</span>
                            <span>•</span>
                            <span className="font-medium">{restaurant.priceRange}</span>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {restaurant.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-3 py-1 bg-accent/20 text-secondary rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Rating Badge */}
                        <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full flex-shrink-0">
                          <Star className="w-5 h-5 text-secondary fill-secondary" />
                          <span className="font-semibold text-lg text-primary">{restaurant.rating}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-base text-muted leading-relaxed mb-4">
                        {restaurant.description}
                      </p>

                      {/* Phone */}
                      <div className="flex items-center gap-2 text-sm text-muted mb-6">
                        <Phone className="w-4 h-4" />
                        <a 
                          href={`tel:${restaurant.phone}`}
                          className="hover:text-secondary transition-colors"
                        >
                          {restaurant.phone}
                        </a>
                      </div>
                    </div>

                    {/* Booking Button */}
                    <div className="flex gap-3">
                      <button className="flex-1 md:flex-initial bg-secondary text-white px-8 py-3 rounded-full font-medium hover:bg-secondary-dark transition-colors duration-200">
                        Book a table
                      </button>
                      <button className="flex-1 md:flex-initial border-2 border-border text-primary px-8 py-3 rounded-full font-medium hover:border-secondary hover:text-secondary transition-colors duration-200">
                        View menu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
