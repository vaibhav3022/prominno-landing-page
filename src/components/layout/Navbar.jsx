import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../constants/data';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0D1B2A]/90 backdrop-blur-md shadow-lg shadow-[#000000]/20 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-[#F8FAFC] tracking-tight">
              Prominno<span className="text-[#F59E0B]">.</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden sm:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-[#94A3B8] hover:text-[#F59E0B] transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" size="sm">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#F8FAFC] hover:text-[#F59E0B] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`sm:hidden absolute top-full left-0 right-0 bg-[#112236] border-b border-[#1E3A5F] shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-3 py-3 text-base font-medium text-[#F8FAFC] hover:text-[#F59E0B] hover:bg-[#1E3A5F]/50 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="px-3 pt-4">
            <Button variant="primary" className="w-full">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
