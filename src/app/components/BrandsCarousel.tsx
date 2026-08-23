'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const brandSlots = [
  { id: 1, label: 'Birlahill Pipes', src: '/assets/images/birlahilpipeslogo.png' },
  { id: 2, label: 'Nirali', src: '/assets/images/niralilogo.jpeg' },
  { id: 3, label: 'Sintex', src: '/assets/images/sintexlogo.png' },
  { id: 4, label: 'Astral', src: '/assets/images/astralpipes.jpeg' },
  { id: 5, label: 'Essco', src: '/assets/images/esscologo.jpg' },
  { id: 6, label: 'Jaquar Group', src: '/assets/images/jaquargrouplogo.jpg' },
];

// Duplicate for seamless infinite scroll
const allSlots = [...brandSlots, ...brandSlots, ...brandSlots];

export default function BrandsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const posRef = useRef(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const CARD_WIDTH = 320; // px
  const GAP = 28; // px
  const STEP = CARD_WIDTH + GAP;
  const TOTAL_ORIGINAL = brandSlots.length * STEP;
  const SPEED = 0.6; // px per frame

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      if (!paused) {
        posRef.current += SPEED;
        if (posRef.current >= TOTAL_ORIGINAL) {
          posRef.current -= TOTAL_ORIGINAL;
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [paused, TOTAL_ORIGINAL]);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white overflow-hidden"
      aria-label="Partner Brands"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-14">
        <div
          className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-bold text-primary uppercase tracking-widest">
              Our Brand Partners
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground">
            Brands We <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            We partner with trusted names in plumbing, sanitary ware, and water solutions.
          </p>
        </div>
      </div>

      {/* Carousel Track */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6 will-change-transform"
            style={{ width: `${allSlots.length * STEP}px` }}
          >
            {allSlots.map((slot, idx) => (
              <BrandCard key={`${slot.id}-${idx}`} label={slot.label} src={slot.src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandCard({ label, src }: { label: string; src: string }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center justify-center gap-4 rounded-3xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 hover:border-primary hover:shadow-xl transition-all duration-300 group"
      style={{ width: 320, height: 190 }}
    >
      <div className="relative w-[250px] h-[112px] rounded-2xl bg-white border border-blue-100 flex items-center justify-center shadow-sm overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
        <Image
          src={src}
          alt={label}
          fill
          className="object-contain p-4"
          sizes="250px"
          priority={false}
        />
      </div>
      <p className="text-sm font-bold text-primary uppercase tracking-[0.2em]">{label}</p>
    </div>
  );
}
