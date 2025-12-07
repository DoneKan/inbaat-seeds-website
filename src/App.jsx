import React, { useState } from 'react';
import { Leaf, Target, Eye, Mail, Phone, MapPin, Sprout, Award, Users, TrendingUp, Menu, X, CheckCircle, Shield, Globe, Truck } from 'lucide-react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import ProductsPage from "./pages/Products"
import ContactPage from "./pages/Contact"





export default function InbaatSeedsWebsite() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HomePage />
      <AboutPage />
      <ProductsPage />
      <ContactPage />
      <Footer />
    </div>
  );
}