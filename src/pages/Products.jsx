import React, { useState } from 'react';
import { Leaf, Target, Eye, Mail, Phone, MapPin, Sprout, Award, Users, TrendingUp, Menu, X, CheckCircle, Shield, Globe, Truck } from 'lucide-react';



// Products Page
function ProductsPage() {
  const products = [
    {
      name: 'Tomato Hybrids',
      description: 'Premium high-yield varieties with exceptional market appeal',
      features: [
        'Early maturity for faster market access',
        'Uniform fruit size and shape',
        'Extended shelf life',
        'Disease resistant strains',
        'Excellent color and flavor'
      ],
      color: 'from-red-500 to-rose-600'
    },
    {
      name: 'Pepper Hybrids',
      description: 'Superior quality hot and sweet pepper varieties',
      features: [
        'High heat tolerance',
        'Exceptional yield potential',
        'Vibrant color development',
        'Strong plant vigor',
        'Market-preferred characteristics'
      ],
      color: 'from-orange-500 to-amber-600'
    },
    {
      name: 'Cucumber Hybrids',
      description: 'Top-performing varieties for commercial excellence',
      features: [
        'Vigorous growth habit',
        'Multiple disease resistance',
        'Uniform fruit quality',
        'Extended harvest period',
        'Excellent storage quality'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Squash & Gourds',
      description: 'Diverse varieties optimized for local markets',
      features: [
        'Climate adaptable',
        'High productivity',
        'Superior quality produce',
        'Strong market demand',
        'Excellent transportation quality'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Eggplant Hybrids',
      description: 'Premium varieties with outstanding characteristics',
      features: [
        'Glossy fruit finish',
        'High yield capacity',
        'Disease tolerance',
        'Uniform sizing',
        'Extended growing season'
      ],
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Leafy Vegetables',
      description: 'Fast-growing varieties for continuous harvest',
      features: [
        'Rapid growth cycle',
        'Excellent leaf quality',
        'Heat resistant',
        'Multiple harvests',
        'Superior nutrition'
      ],
      color: 'from-lime-500 to-green-600'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Product Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Premium imported vegetable hybrid seeds, carefully selected and tested for optimal performance in Pakistani agricultural conditions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-green-300 hover:-translate-y-2">
                <div className={`h-3 bg-gradient-to-r ${product.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`bg-gradient-to-br ${product.color} p-3 rounded-xl shadow-lg`}>
                      <Sprout className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Key Features:</h4>
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quality Assurance Banner */}
          <div className="bg-gradient-to-r from-green-700 via-emerald-600 to-green-700 rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-12 h-12" />
                  <h3 className="text-3xl font-bold">Quality Assurance Guarantee</h3>
                </div>
                <p className="text-green-50 text-lg leading-relaxed">
                  All our hybrid seeds are imported from certified international sources and undergo rigorous quality 
                  testing to ensure optimal performance, germination rates, and yield potential specifically for 
                  Pakistani agricultural conditions.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a href="#contact" className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all duration-200 shadow-xl hover:scale-105 transform inline-block">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsPage;