import React from 'react';
import { ArrowLeft, Phone, MapPin } from 'lucide-react';
import { neighborhoodRestaurants } from '../lib/neighborhoodData';
import { siteContent } from '../lib/siteContent';

interface NeighborhoodPageProps {
  neighborhood: string;
  onBack: () => void;
}

export const NeighborhoodPage: React.FC<NeighborhoodPageProps> = ({ neighborhood, onBack }) => {
  const restaurants = neighborhoodRestaurants[neighborhood] || [];
  const neighborhoodInfo = siteContent.neighborhoods.items.find(n => n.name === neighborhood);

  const handleBooking = (restaurantName: string) => {
    alert(`Booking request for ${restaurantName}. In a real application, this would open a booking form or redirect to a booking page.`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={neighborhoodInfo?.image || 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=80'}
          alt={neighborhood}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/95 rounded-lg hover:bg-white transition-colors duration-200 shadow-lg"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-serif font-semibold text-4xl md:text-6xl text-white tracking-tight">
              {neighborhood}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mt-2">
              {neighborhoodInfo?.count || `${restaurants.length} restaurants`}
            </p>
          </div>
        </div>
      </div>

      {/* Restaurants List */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-20">
        {restaurants.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted">No restaurants found in this neighborhood.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {restaurants.map((restaurant, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="grid md:grid-cols-[300px,1fr] gap-0">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-serif font-semibold text-2xl md:text-3xl text-primary mb-2">
                            {restaurant.name}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                            <span className="font-medium text-secondary">{restaurant.cuisine}</span>
                            <span>•</span>
                            <span>{restaurant.priceRange}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <span className="text-yellow-500">★</span>
                              {restaurant.rating}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {restaurant.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-background text-xs font-medium text-muted rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-muted leading-relaxed mb-4">
                        {restaurant.description}
                      </p>

                      {/* Location & Phone */}
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-sm text-muted">
                          <MapPin className="w-4 h-4" />
                          <span>{restaurant.neighborhood} • {restaurant.distance}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted">
                          <Phone className="w-4 h-4" />
                          <a 
                            href={`tel:${restaurant.phone}`}
                            className="hover:text-secondary transition-colors"
                          >
                            {restaurant.phone}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Booking Button */}
                    <div>
                      <button
                        onClick={() => handleBooking(restaurant.name)}
                        className="w-full md:w-auto px-8 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-200 shadow-sm hover:shadow-md"
                      >
                        Book a table
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
