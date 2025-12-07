import React, { useState } from 'react';
import { Leaf, Target, Eye, Mail, Phone, MapPin, Sprout, Award, Users, TrendingUp, Menu, X, CheckCircle, Shield, Globe, Truck } from 'lucide-react';




// Footer Component
function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-green-950 to-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Leaf className="w-8 h-8 text-green-500" />
              <span className="text-xl font-bold">Inbaat Seeds Pvt Ltd</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Pakistan's trusted distributor of premium imported vegetable hybrid seeds. 
              Empowering farmers with superior quality seeds for enhanced agricultural productivity.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-green-400 transition">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-green-400 transition">About Us</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-green-400 transition">Products</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-green-400 transition">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:Inbaat.seeds@gmail.com" className="hover:text-green-400 transition break-all">
                  Inbaat.seeds@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href="tel:+923017903888" className="hover:text-green-400 transition">
                  +92 301 7903888
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Inbaat Seeds Pvt Ltd. All rights reserved. | Empowering Pakistani Agriculture
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
