import React, { useState } from 'react';
import { Leaf, Target, Eye, Mail, Phone, MapPin, Sprout, Award, Users, TrendingUp, Menu, X, CheckCircle, Shield, Globe, Truck } from 'lucide-react';



// Home Page
function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-700 bg-opacity-50 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-green-500">
              <span className="text-sm font-semibold tracking-wide">PREMIUM HYBRID SEEDS DISTRIBUTION</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering Pakistan's Agriculture with 
              <span className="block text-green-300 mt-2">Superior Hybrid Seeds</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-green-100 mb-10 leading-relaxed">
              Leading distributor of premium imported vegetable hybrid seeds, delivering innovative solutions 
              for sustainable agricultural growth across Pakistan.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#products" className="bg-white text-green-900 px-8 py-4 rounded-lg hover:bg-green-50 transition-all duration-200 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform">
                Explore Products
              </a>
              <a href="#contact" className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-500 transition-all duration-200 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform border-2 border-green-400">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why Choose Inbaat Seeds</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring world-class agricultural solutions to Pakistani farmers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Imported seeds from trusted international sources, rigorously tested for Pakistani conditions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Reliable Partner</h3>
              <p className="text-gray-600 leading-relaxed">
                Consistent supply and dependable service for farmers nationwide.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border-2 border-amber-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-amber-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">High Performance</h3>
              <p className="text-gray-600 leading-relaxed">
                Superior yield and disease resistance for maximum profitability.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Global Standards</h3>
              <p className="text-gray-600 leading-relaxed">
                International quality meeting and exceeding local agricultural needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
