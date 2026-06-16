import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/92 backdrop-blur-xl border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="text-2xl font-serif font-semibold text-primary tracking-tight"
            >
              {siteContent.header.logo}
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {siteContent.header.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-primary hover:text-secondary transition-colors duration-200 text-base"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => handleNavClick('#top-picks')}
                className="bg-secondary text-white px-6 py-3 rounded-full hover:bg-secondary-dark transition-colors duration-200 font-medium"
              >
                {siteContent.header.cta}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-primary p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-primary md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {siteContent.header.nav.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-white text-3xl font-serif tracking-tight hover:text-accent transition-colors duration-200"
                style={{
                  animation: `fadeIn 0.3s ease ${index * 0.05}s both`,
                }}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => handleNavClick('#top-picks')}
              className="bg-secondary text-white px-8 py-4 rounded-full hover:bg-secondary-dark transition-colors duration-200 font-medium text-lg mt-4"
              style={{
                animation: `fadeIn 0.3s ease ${siteContent.header.nav.length * 0.05}s both`,
              }}
            >
              {siteContent.header.cta}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
