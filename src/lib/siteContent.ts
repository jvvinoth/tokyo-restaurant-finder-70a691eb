export const siteContent = {
  meta: {
    title: "Tokyo Restaurant Finder - Skip the overwhelm. Book the right table.",
    description: "From hidden izakayas in Shinjuku to omakase counters in Ginza — we've vetted Tokyo's dining scene so you can reserve with confidence, not guesswork. 580+ restaurants across Tokyo.",
  },
  
  header: {
    logo: "Tokyo Restaurant Finder",
    nav: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Neighborhoods", href: "#neighborhoods" },
      { label: "Top picks", href: "#top-picks" },
    ],
    cta: "Find a table →",
  },
  
  hero: {
    badge: "580+ vetted restaurants across Tokyo",
    headline: "Skip the overwhelm. Book the right table.",
    subtext: "From hidden izakayas in Shinjuku to omakase counters in Ginza — we've vetted Tokyo's dining scene so you can reserve with confidence, not guesswork.",
    searchPlaceholders: {
      location: "Any neighborhood",
      date: "Today",
      cuisine: "All cuisines",
    },
    searchCta: "Search restaurants →",
    trustIndicator: "★★★★★ Trusted by 12,000+ diners • Featured in Time Out Tokyo",
    heroImage: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=80",
  },
  
  howItWorks: {
    overline: "Simple Process",
    headline: "Three steps to your perfect Tokyo meal",
    steps: [
      {
        number: "01",
        title: "Search your way",
        description: "Filter by neighborhood, cuisine, or date. See real-time availability for today or weeks ahead.",
        icon: "Search",
      },
      {
        number: "02",
        title: "Browse real menus",
        description: "Photos, English descriptions, price ranges, and insider notes before you commit.",
        icon: "BookOpen",
      },
      {
        number: "03",
        title: "Book in 60 seconds",
        description: "Simple form or instant Calendly link. Confirmation in your inbox. No surprises.",
        icon: "CalendarCheck",
      },
    ],
  },
  
  neighborhoods: {
    overline: "Explore Tokyo",
    headline: "Find your neighborhood",
    subtext: "Each district has its own dining personality — from Ginza's refined elegance to Shibuya's creative chaos.",
    ctaText: "View all 12 neighborhoods →",
    items: [
      {
        name: "Shibuya",
        count: "142 restaurants",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1600&q=80",
      },
      {
        name: "Shinjuku",
        count: "168 restaurants",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=80",
      },
      {
        name: "Ginza",
        count: "94 restaurants",
        image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1600&q=80",
      },
      {
        name: "Roppongi",
        count: "78 restaurants",
        image: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=1600&q=80",
      },
      {
        name: "Asakusa",
        count: "56 restaurants",
        image: "https://images.unsplash.com/photo-1548441657-9145e19c4a23?auto=format&fit=crop&w=1600&q=80",
      },
      {
        name: "Harajuku",
        count: "63 restaurants",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  },
  
  topPicks: {
    overline: "Curated Selection",
    headline: "Top picks this week",
    subtext: "Restaurants our team is booking right now — from 12-seat sushi counters to hidden yakitori spots.",
    restaurants: [
      {
        name: "Sushi Saito",
        neighborhood: "Roppongi",
        cuisine: "Sushi",
        priceRange: "¥¥¥¥",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=1600&q=80",
        tags: ["Omakase", "Michelin ★★★"],
        description: "Intimate 7-seat counter with exceptional nigiri and seasonal kaiseki.",
      },
      {
        name: "Torishiki",
        neighborhood: "Meguro",
        cuisine: "Yakitori",
        priceRange: "¥¥¥",
        image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?auto=format&fit=crop&w=1600&q=80",
        tags: ["Counter seating", "Reservation only"],
        description: "Tokyo's most coveted yakitori spot. Book weeks ahead.",
      },
      {
        name: "Tempura Kondo",
        neighborhood: "Ginza",
        cuisine: "Tempura",
        priceRange: "¥¥¥¥",
        image: "https://images.unsplash.com/photo-1542528180-1c2803fa042b?auto=format&fit=crop&w=1600&q=80",
        tags: ["Michelin ★★", "Seasonal"],
        description: "Legendary sweet potato tempura and impeccable technique.",
      },
      {
        name: "Nakiryu",
        neighborhood: "Minami-Otsuka",
        cuisine: "Ramen",
        priceRange: "¥",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1600&q=80",
        tags: ["Michelin ★", "Tantanmen"],
        description: "Michelin-starred ramen at under ¥1,000. Worth the queue.",
      },
      {
        name: "Ishikawa",
        neighborhood: "Kagurazaka",
        cuisine: "Kaiseki",
        priceRange: "¥¥¥¥",
        image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?auto=format&fit=crop&w=1600&q=80",
        tags: ["Michelin ★★★", "Private rooms"],
        description: "Modern kaiseki in a refined machiya setting.",
      },
      {
        name: "Kozue",
        neighborhood: "Shinjuku",
        cuisine: "Japanese",
        priceRange: "¥¥¥¥",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1600&q=80",
        tags: ["Park Hyatt", "Tokyo views"],
        description: "Contemporary Japanese cuisine 40 floors up with skyline views.",
      },
      {
        name: "Tenmatsu",
        neighborhood: "Omotesando",
        cuisine: "Tempura",
        priceRange: "¥¥",
        image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=1600&q=80",
        tags: ["Casual", "English menu"],
        description: "Approachable tempura sets in a relaxed neighborhood setting.",
      },
      {
        name: "Yoroniku",
        neighborhood: "Minami-Aoyama",
        cuisine: "Yakiniku",
        priceRange: "¥¥¥",
        image: "https://images.unsplash.com/photo-1588347818036-8e4e4b0b1ac9?auto=format&fit=crop&w=1600&q=80",
        tags: ["Premium beef", "Modern"],
        description: "Top-tier wagyu and impeccable service in a sleek space.",
      },
    ],
  },
  
  bookingCta: {
    headline: "Ready to stop scrolling and start eating?",
    subtext: "Join 12,000+ diners who've ditched the guesswork. Browse vetted restaurants, read real menus, and book your table in 60 seconds.",
    primaryCta: "Explore restaurants →",
    secondaryCta: "How it works",
  },
  
  footer: {
    logo: "Tokyo Restaurant Finder",
    tagline: "Your trusted guide to Tokyo's dining scene",
    sections: [
      {
        title: "Explore",
        links: [
          { label: "All neighborhoods", href: "#neighborhoods" },
          { label: "Top picks", href: "#top-picks" },
          { label: "New openings", href: "#" },
          { label: "Michelin guide", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "How it works", href: "#how-it-works" },
          { label: "Booking guide", href: "#" },
          { label: "Dining etiquette", href: "#" },
          { label: "Japanese phrases", href: "#" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About us", href: "#" },
          { label: "Contact", href: "#contact" },
          { label: "Partner with us", href: "#" },
          { label: "Press", href: "#" },
        ],
      },
    ],
    social: [
      { platform: "Instagram", href: "#", icon: "Instagram" },
      { platform: "Twitter", href: "#", icon: "Twitter" },
      { platform: "Facebook", href: "#", icon: "Facebook" },
    ],
    copyright: "© 2024 Tokyo Restaurant Finder. All rights reserved.",
  },
} as const;

export type SiteContent = typeof siteContent;
