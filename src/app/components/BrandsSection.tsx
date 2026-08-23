'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const brands = [
  { name: 'Jaquar', category: 'Taps & Fittings' },
  { name: 'Hindware', category: 'Sanitary Ware' },
  { name: 'Cera', category: 'Bathroom Solutions' },
  { name: 'Parryware', category: 'Sanitary Ware' },
  { name: 'Kohler', category: 'Premium Fittings' },
  { name: 'Grohe', category: 'German Engineering' },
  { name: 'Astral', category: 'Pipes & Fittings' },
  { name: 'Supreme', category: 'PVC Pipes' },
];

const bigStats = [
  {
    value: '15+',
    label: 'Years of Experience',
    icon: 'CalendarDaysIcon',
    color: 'from-blue-600 to-cyan-500',
    bg: 'from-blue-50 to-cyan-50',
  },
  {
    value: '5,000+',
    label: 'Happy Customers',
    icon: 'UserGroupIcon',
    color: 'from-violet-600 to-purple-500',
    bg: 'from-violet-50 to-purple-50',
  },
  {
    value: '2,000+',
    label: 'Products in Stock',
    icon: 'ArchiveBoxIcon',
    color: 'from-teal-600 to-emerald-500',
    bg: 'from-teal-50 to-emerald-50',
  },
  {
    value: '50+',
    label: 'Top Brands Stocked',
    icon: 'StarIcon',
    color: 'from-orange-500 to-amber-400',
    bg: 'from-orange-50 to-amber-50',
  },
];

export default function BrandsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up, .reveal-scale').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white" aria-label="Stats and Brands">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Big Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {bigStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal-scale stat-card rounded-3xl p-8 lg:p-10 bg-gradient-to-br ${stat.bg} border border-border shadow-card-lg card-hover`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 shadow-lg`}
              >
                <Icon
                  name={stat.icon as 'CalendarDaysIcon'}
                  size={32}
                  className="text-white"
                  variant="solid"
                />
              </div>
              <p className="text-6xl font-black text-foreground leading-none">{stat.value}</p>
              <p className="text-base font-semibold text-muted-foreground mt-3 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Brands Header */}
        <div className="text-center mb-14 reveal-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-widest">
              Trusted Brands
            </span>
          </div>
          <h2 className="text-section-title font-black text-foreground">
            We Stock <span className="text-gradient">50+ Top Brands</span>
          </h2>
          <p className="text-xl text-muted-foreground mt-5 max-w-xl mx-auto">
            From Indian market leaders to European premium brands — all genuine, all certified.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {brands.map((brand, i) => (
            <div
              key={brand.name}
              className="reveal-scale group flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-background border border-border hover:border-primary/40 hover:shadow-card-lg transition-all duration-300 card-hover"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                <span className="text-2xl font-black text-primary">{brand.name.charAt(0)}</span>
              </div>
              <div className="text-center">
                <p className="font-black text-foreground text-lg">{brand.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{brand.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 reveal-up">
          {[
            { icon: 'ShieldCheckIcon', text: 'ISI Certified Products' },
            { icon: 'TruckIcon', text: 'Bulk Order Delivery' },
            { icon: 'WrenchScrewdriverIcon', text: 'Expert Technical Advice' },
            { icon: 'ArrowPathIcon', text: 'Easy Returns Policy' },
            { icon: 'CurrencyRupeeIcon', text: 'Best Price Guarantee' },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-primary/8 border border-primary/15"
            >
              <Icon
                name={item.icon as 'ShieldCheckIcon'}
                size={18}
                className="text-primary"
                variant="solid"
              />
              <span className="text-sm font-bold text-foreground">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
