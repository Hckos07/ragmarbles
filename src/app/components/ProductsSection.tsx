'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const catalogs = [
  {
    label: 'Jaguar Catalogue',
    href: 'https://drive.google.com/file/d/1spWanlRXBm4fNAbzYAjZVMIPwGoWYs7r/view?usp=sharing',
  },
  {
    label: 'Essco Catalogue',
    href: 'https://drive.google.com/file/d/13kZXIDc7Lp7hGaoOMhjBaHQy8PqXqn6N/view?usp=sharing',
  },
];

const products = [
  {
    id: 'taps',
    name: 'Taps & Faucets',
    desc: 'Chrome, brass & matte finish taps for kitchen and bathroom',
    tag: 'Best Seller',
    src: '/assets/images/jaquar-basin-mixer.jpg',
    alt: 'Jaquar basin mixer tap from the Jaquar catalogue',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-2',
    height: 'h-[320px] md:h-full',
  },
  {
    id: 'sinks',
    name: 'Sinks & Wash Basins',
    desc: 'Ceramic, stainless steel & designer wash basins',
    tag: 'Popular',
    src: '/assets/images/jaguarbasin.png',
    alt: 'Jaquar wash basin',
    colSpan: 'md:col-span-1',
    rowSpan: '',
    height: 'h-[240px]',
  },
  {
    id: 'pipes',
    name: 'Pipes & Fittings',
    desc: 'CPVC, PVC & PPR pipes for all plumbing needs',
    tag: '',
    src: '/assets/images/sintexpipe.jpg',
    alt: 'Sintex plumbing pipes and fittings',
    colSpan: 'md:col-span-1',
    rowSpan: '',
    height: 'h-[240px]',
  },
  {
    id: 'showers',
    name: 'Showers & Panels',
    desc: 'Rain showers, hand showers & complete shower systems',
    tag: 'Premium',
    src: '/assets/images/jaquar-rain-shower.jpg',
    alt: 'Jaquar rain shower from the Jaquar catalogue',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-2',
    height: 'h-[320px] md:h-full',
  },
  {
    id: 'fittings',
    name: 'Bathroom Fittings',
    desc: 'Towel rails, soap dishes, hooks & accessories',
    tag: '',
    src: '/assets/images/jaquar-bathroom-fittings.jpg',
    alt: 'Jaquar bathroom fittings in a completed bathroom from the Jaquar catalogue',
    colSpan: 'md:col-span-2',
    rowSpan: '',
    height: 'h-[240px]',
  },
  {
    id: 'sanitary',
    name: 'Sanitary Ware',
    desc: 'WC suites, cisterns & bidets from top brands',
    tag: 'New Arrivals',
    src: '/assets/images/nav_bath_img.jpg',
    alt: 'Bathroom sanitaryware display',
    colSpan: 'md:col-span-2',
    rowSpan: '',
    height: 'h-[240px]',
  },
  {
    id: 'heaters',
    name: 'Water Heaters',
    desc: 'Instant & storage geysers for all capacities',
    tag: '',
    src: '/assets/images/jaquar-water-heaters.jpg',
    alt: 'Jaquar water heaters from the Jaquar catalogue',
    colSpan: 'md:col-span-2',
    rowSpan: '',
    height: 'h-[240px]',
  },
];

export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-scale').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-24 lg:py-36 bg-background"
      aria-label="Products Showcase"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-widest">
                Our Range
              </span>
            </div>
            <h2 className="text-section-title font-black text-foreground">
              2,000+ Products
              <br />
              <span className="text-gradient">All Under One Roof</span>
            </h2>
            <div className="flex flex-wrap gap-3 mt-6">
              {catalogs.map((catalog) => (
                <a
                  key={catalog.label}
                  href={catalog.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors"
                >
                  <Icon name="ArrowDownTrayIcon" size={18} />
                  {catalog.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 auto-rows-auto">
          <div className={`${products[0].colSpan} ${products[0].rowSpan} reveal-scale`}>
            <ProductCard product={products[0]} fullHeight />
          </div>
          <div className={`${products[1].colSpan} reveal-scale`}>
            <ProductCard product={products[1]} />
          </div>
          <div className={`${products[2].colSpan} reveal-scale`}>
            <ProductCard product={products[2]} />
          </div>
          <div className={`${products[3].colSpan} ${products[3].rowSpan} reveal-scale`}>
            <ProductCard product={products[3]} fullHeight />
          </div>
          <div className={`${products[4].colSpan} reveal-scale`}>
            <ProductCard product={products[4]} />
          </div>
          <div className={`${products[5].colSpan} reveal-scale`}>
            <ProductCard product={products[5]} />
          </div>
          <div className={`${products[6].colSpan} reveal-scale`}>
            <ProductCard product={products[6]} />
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 rounded-[2rem] bg-gradient-to-r from-blue-700 to-sky-600 p-10 lg:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-500/20">
          <div>
            <p className="text-2xl font-black text-white">
              Can&apos;t find what you&apos;re looking for?
            </p>
            <p className="text-white/70 text-lg mt-1">
              We source special orders too. Just ask our team.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-blue-700 font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg whitespace-nowrap flex-shrink-0"
          >
            Send an Enquiry
          </a>
        </div>
      </div>
    </section>
  );
}

interface ProductCardProps {
  product: (typeof products)[0];
  fullHeight?: boolean;
}

function ProductCard({ product, fullHeight }: ProductCardProps) {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden border border-border/60 card-hover card-3d bg-card shadow-sm ${
        fullHeight ? 'h-full min-h-[320px]' : product.height
      }`}
    >
      <AppImage
        src={product.src}
        alt={product.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />

      {/* Tag badge */}
      {product.tag && (
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 rounded-full bg-accent text-white text-xs font-bold shadow-lg">
            {product.tag}
          </span>
        </div>
      )}

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-white font-black text-lg leading-tight">{product.name}</p>
        <p className="text-white/65 text-sm mt-1 leading-snug hidden sm:block">{product.desc}</p>
        <div className="mt-3 flex items-center gap-1.5 text-accent text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>View Range</span>
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path
              d="M2 6h8M7 3l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
