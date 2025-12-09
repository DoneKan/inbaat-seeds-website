import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.png";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Inbaat Seeds Logo"
              className="h-14 lg:h-16 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold tracking-tight text-gray-900">
                Inbaat Seeds
              </h1>
              <p className="text-xs text-gray-500">Premium Hybrid Seeds</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a 
              href="#home" 
              className="text-lg font-medium text-gray-700 hover:text-lime-600 transition-colors duration-200"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-lg font-medium text-gray-700 hover:text-lime-600 transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="#products" 
              className="text-lg font-medium text-gray-700 hover:text-lime-600 transition-colors duration-200"
            >
              Products
            </a>
            <a 
              href="#contact" 
              className="bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-1 border-t border-gray-100 pt-4">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-4 text-gray-700 hover:bg-lime-50 hover:text-lime-700 rounded-lg transition-colors font-medium"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-4 text-gray-700 hover:bg-lime-50 hover:text-lime-700 rounded-lg transition-colors font-medium"
            >
              About
            </a>
            <a 
              href="#products" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-4 text-gray-700 hover:bg-lime-50 hover:text-lime-700 rounded-lg transition-colors font-medium"
            >
              Products
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-4 bg-lime-600 text-white hover:bg-lime-700 rounded-lg transition-colors font-semibold text-center"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;