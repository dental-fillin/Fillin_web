'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/logofin.svg"
              alt="Fillin Logo"
              width={40}
              height={40}
            />
            <h1 className="text-2xl font-bold text-[#2C2E9F]">
              Fillin
            </h1>
          </div>
  <meta name="google-site-verification" content="l3vBSSDIr4zu6-XquqUYKjRw9vuDhaCSfO9wgcw4gtw" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-[#2C2E9F] font-medium transition-colors">
              Home
            </a>
            <a href="/service" className="text-gray-700 hover:text-[#2C2E9F] font-medium transition-colors">
              Services
            </a>
            <a href="/careers" className="text-gray-700 hover:text-[#2C2E9F] font-medium transition-colors">
              Job Openings
            </a>
            <a href="/staff-training" className="text-gray-700 hover:text-[#2C2E9F] font-medium transition-colors">
              Staff Training
            </a>
            <a href="/contact" className="text-gray-700 hover:text-[#2C2E9F] font-medium transition-colors">
              Contact Us
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#2C2E9F] focus:outline-none focus:text-[#2C2E9F]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:text-[#2C2E9F] font-medium">
                Home
              </a>
              <a href="/service" className="block px-3 py-2 text-gray-700 hover:text-[#2C2E9F] font-medium">
                Services
              </a>
              <a href="/careers" className="block px-3 py-2 text-gray-700 hover:text-[#2C2E9F] font-medium">
                Job Openings
              </a>
              <a href="/staff-training" className="block px-3 py-2 text-gray-700 hover:text-[#2C2E9F] font-medium">
                Staff Training
              </a>
              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-[#2C2E9F] font-medium">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 
