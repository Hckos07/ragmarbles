'use client';

import React, { useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const PHONE_NUMBER = '+919120125913';
const WHATSAPP_NUMBER = '919120125913';
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I'm interested in your plumbing and sanitary products"
);

const trustBadges = ['Genuine Products', 'Retail & Wholesale', 'Est. 2020', 'Prayagraj Based'];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50"
      aria-label="RAG MARBLES Hero"
    >
      {/* Subtle background orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 left-1/6 w-[600px] h-[600px] rounded-full bg-blue-100/60 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/6 w-[500px] h-[500px] rounded-full bg-sky-100/80 blur-[100px]" />
      </div>
      {/* Decorative circles */}
      <div
        className="absolute top-20 right-10 w-80 h-80 rounded-full border border-blue-100 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-36 right-24 w-52 h-52 rounded-full border border-blue-200/40 pointer-events-none"
        aria-hidden
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-9">
            {/* Eyebrow badge */}
            <div
              className={`inline-flex items-center gap-3 self-start px-5 py-2.5 rounded-full bg-blue-100 border border-blue-200 transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-600" />
              </span>
              <span className="text-sm font-bold text-blue-700 tracking-wide">
                Prayagraj&apos;s Trusted Plumbing &amp; Sanitary Store
              </span>
            </div>

            {/* Logo + Name */}
            <div
              className={`flex items-center gap-4 transition-all duration-700 delay-50 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {/* <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white border border-blue-100 shadow-md flex items-center justify-center">
                <Image
                  src="/assets/images/raglogo.png"
                  alt="RAG MARBLES logo"
                  width={640}
                  height={390}
                  className="w-full h-full object-contain"
                  priority
                />
              </div> */}
              <div>
                <h1 className="text-hero-xl font-black text-blue-900 leading-none">RAG MARBLES</h1>
                <div className="mt-2 w-24 h-1 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />
              </div>
            </div>

            <p
              className={`text-section-sub text-blue-800/65 max-w-xl transition-all duration-700 delay-200 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Quality pipes, bath fittings, sanitaryware, water tanks and more — serving customers
              and retailers in Prayagraj since 2020.
            </p>

            {/* Trust badges */}
            <div
              className={`flex flex-wrap gap-2.5 transition-all duration-700 delay-300 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {trustBadges?.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-sm font-semibold text-blue-700"
                >
                  <Icon
                    name="CheckCircleIcon"
                    size={14}
                    className="text-blue-500"
                    variant="solid"
                  />
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="btn-primary text-xl px-10 py-5 rounded-2xl"
              >
                <Icon name="PhoneIcon" size={24} variant="solid" />
                Call Now — Free Advice
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-green-500 text-white font-bold text-xl hover:bg-green-400 transition-all duration-200 shadow-xl shadow-green-500/30 hover:-translate-y-1"
              >
                <Icon name="ChatBubbleLeftEllipsisIcon" size={24} variant="solid" />
                WhatsApp Us
              </a>
            </div>

            {/* Quick stats */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 transition-all duration-700 delay-500 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {[
                { value: '5+', label: 'Years in Business' },
                { value: '1000+', label: 'Happy Customers' },
                { value: '500+', label: 'Products in Stock' },
                { value: 'B2B', label: 'Retail & Wholesale' },
              ]?.map((stat) => (
                <div
                  key={stat?.label}
                  className="flex flex-col gap-1.5 p-4 rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl font-black text-blue-900 leading-none">
                    {stat?.value}
                  </span>
                  <span className="text-xs text-blue-500 font-semibold leading-tight uppercase tracking-wide">
                    {stat?.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-blue-100">
              <AppImage
                src="/assets/images/shopimage.jpg"
                alt="RAG MARBLES shop in Prayagraj"
                width={800}
                height={700}
                priority
                className="w-full h-[460px] sm:h-[560px] lg:h-[640px] object-cover"
              />
              {/* Light overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />

              {/* Overlay text on image */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
                  <p className="text-blue-900 font-black text-lg leading-tight">
                    RAG MARBLES — Prayagraj
                  </p>
                  <p className="text-blue-600 font-semibold text-sm mt-0.5">
                    Pipes · Bath Fittings · Sanitaryware · Water Tanks
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge
            <div className="absolute -bottom-6 -left-4 sm:left-8 bg-gradient-to-br from-blue-600 to-sky-500 text-white rounded-2xl px-6 py-5 shadow-xl shadow-blue-500/30">
              <p className="text-4xl font-black leading-none">Est.</p>
              <p className="text-4xl font-black leading-none">2020</p>
              <p className="text-sm font-semibold opacity-80 mt-1">Prayagraj</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
