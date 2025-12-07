import React, { useState } from 'react';
import { Leaf, Target, Eye, Mail, Phone, MapPin, Sprout, Award, Users, TrendingUp, Menu, X, CheckCircle, Shield, Globe, Truck } from 'lucide-react';

// Contact Page
function ContactPage() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Partner with us for premium hybrid seed solutions. We're here to support your agricultural success.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-100">
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Email Us</h3>
              <a href="mailto:Inbaat.seeds@gmail.com" className="text-green-600 hover:text-green-700 transition font-medium text-center block break-all">
                Inbaat.seeds@gmail.com
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-100">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Call Us</h3>
              <a href="tel:+923017903888" className="text-blue-600 hover:text-blue-700 transition font-medium text-center block">
                +92 301 7903888
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-100">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Location</h3>
              <p className="text-purple-600 font-medium text-center">Pakistan</p>
              <p className="text-gray-600 text-sm text-center mt-2">Serving farmers nationwide</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-800 via-emerald-700 to-green-800 rounded-3xl p-10 lg:p-16 text-white shadow-2xl text-center">
            <Truck className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Enhance Your Agricultural Productivity?</h3>
            <p className="text-xl text-green-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Contact us today to learn more about our premium hybrid seed solutions. Our team is ready to help you 
              select the best varieties for your farming needs and answer any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:Inbaat.seeds@gmail.com" className="bg-white text-green-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all duration-200 shadow-xl hover:scale-105 transform inline-flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
              <a href="tel:+923017903888" className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-500 transition-all duration-200 shadow-xl hover:scale-105 transform border-2 border-green-400 inline-flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Business Hours & Info */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium">Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span className="text-red-600">Closed</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Contact Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Expert guidance on seed selection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Bulk order inquiries and pricing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Distribution partnership opportunities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Technical support and advice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
