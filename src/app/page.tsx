import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import ProductsSection from '@/app/components/ProductsSection';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import ContactSection from '@/app/components/ContactSection';
import FloatingWhatsApp from '@/app/components/FloatingWhatsApp';
import BrandsCarousel from '@/app/components/BrandsCarousel';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="top">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <BrandsCarousel />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
