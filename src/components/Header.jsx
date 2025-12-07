import React, { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-gradient-to-r from-emerald-900 via-green-800 to-emerald-900 text-white shadow-2xl sticky top-0 z-50 border-b-2 border-green-600">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <Leaf className="w-10 h-10 text-green-700" />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">Inbaat Seeds</h1>
              <p className="text-xs lg:text-sm text-green-200">Premium Hybrid Seeds</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-lg font-medium hover:text-green-300 transition-colors duration-200">Home</a>
            <a href="#about" className="text-lg font-medium hover:text-green-300 transition-colors duration-200">About</a>
            <a href="#products" className="text-lg font-medium hover:text-green-300 transition-colors duration-200">Products</a>
            <a href="#contact" className="bg-green-600 hover:bg-green-500 px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg">Contact</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-green-700 transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#home" className="block py-2 px-4 hover:bg-green-700 rounded transition">Home</a>
            <a href="#about" className="block py-2 px-4 hover:bg-green-700 rounded transition">About</a>
            <a href="#products" className="block py-2 px-4 hover:bg-green-700 rounded transition">Products</a>
            <a href="#contact" className="block py-2 px-4 hover:bg-green-700 rounded transition">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;