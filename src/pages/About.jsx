import React from 'react';
import { Target, Eye, CheckCircle, Users, Sprout } from 'lucide-react';

function AboutPage() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Inbaat Seeds</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Company Overview */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-12 border border-gray-100">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                <span className="text-green-700 font-bold text-2xl">Inbaat Seeds Pvt Ltd</span> is Pakistan's premier distributor of imported vegetable hybrid seeds, dedicated to transforming the agricultural landscape through superior quality products and unwavering commitment to farmer success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We specialize in sourcing and distributing world-class hybrid seed varieties from renowned international producers, carefully selected for their exceptional performance in Pakistan's diverse agricultural conditions. Our extensive network ensures that farmers across the nation have access to the most advanced seed technology available globally.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through strategic partnerships with leading seed producers worldwide, we bring innovation, reliability, and excellence to Pakistani agriculture, supporting farmers in achieving higher yields, better quality produce, and sustainable farming practices.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-600 to-emerald-600"></div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative p-10 text-white">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <Target className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-lg leading-relaxed text-green-50">
                  To lead in the development and distribution of superior hybrid seeds, delivering innovative, 
                  high-performing solutions that drive agricultural productivity and sustainable growth.
                </p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-green-500 to-teal-500"></div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative p-10 text-white">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <Eye className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-lg leading-relaxed text-green-50">
                  To revolutionize the hybrid seed industry by integrating advanced technology and research, 
                  delivering innovative, high-performing solutions that empower farmers and drive sustainable agricultural growth.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-3xl p-8 lg:p-12 border-2 border-green-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Quality Excellence</h4>
                <p className="text-gray-600">Uncompromising standards in every seed we distribute</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                <Users className="w-12 h-12 text-green-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Farmer First</h4>
                <p className="text-gray-600">Your success is our primary commitment</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                <Sprout className="w-12 h-12 text-green-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Innovation</h4>
                <p className="text-gray-600">Bringing cutting-edge agricultural solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;