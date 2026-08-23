'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const reasons = [
  {
    icon: 'ShieldCheckIcon',
    title: 'Only Genuine Products',
    desc: 'Every item sourced directly from manufacturers or authorized distributors. Zero counterfeits, ever.',
    stat: '100%',
    statLabel: 'Genuine',
    accent: true,
  },
  {
    icon: 'ArchiveBoxIcon',
    title: 'Wide Range of Products',
    desc: 'Pipes, bath fittings, sanitaryware, water tanks and more — all under one roof in Prayagraj.',
    stat: '500+',
    statLabel: 'Products',
    accent: false,
  },
  {
    icon: 'CurrencyRupeeIcon',
    title: 'Best Prices, No Hidden Costs',
    desc: 'Competitive pricing for both retail customers and wholesale retailers. What you see is what you pay.',
    stat: '₹0',
    statLabel: 'Hidden Fees',
    accent: false,
  },
  {
    icon: 'UserGroupIcon',
    title: 'Customers & Retailers Welcome',
    desc: 'We serve individual homeowners as well as retailers and contractors with bulk requirements.',
    stat: '1000+',
    statLabel: 'Customers',
    accent: false,
  },
];

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Homeowner, Prayagraj',
    text: 'RAG MARBLES helped me renovate my entire bathroom. The staff was incredibly knowledgeable and the prices were unbeatable. Highly recommended!',
    rating: 5,
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a424e8a2-1763294679746.png',
    avatarAlt: 'Rajesh Sharma smiling man in his 40s',
  },
  {
    name: 'Priya Mehta',
    role: 'Interior Designer',
    text: 'I source all my client projects through RAG MARBLES. Their range of premium fittings is unmatched in Prayagraj and the team is always helpful.',
    rating: 5,
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_156ebd3fe-1772443500480.png',
    avatarAlt: 'Priya Mehta professional woman interior designer',
  },
  {
    name: 'Suresh Kumar',
    role: 'Building Contractor',
    text: 'For bulk orders and special requirements, RAG MARBLES always delivers. Great prices for retailers and contractors. Highly trusted.',
    rating: 5,
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_1fd9db00d-1763295329876.png',
    avatarAlt: 'Suresh building contractor professional headshot',
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up, .reveal-scale').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
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
    <section
      id="why-us"
      ref={sectionRef}
      className="py-24 lg:py-36 bg-blue-50 relative overflow-hidden"
      aria-label="Why Choose RAG MARBLES"
    >
      {/* Subtle background */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-[120px] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-sky-100/60 blur-[100px] pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6 reveal-up">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-sm font-bold text-blue-700 uppercase tracking-widest">
              Why RAG MARBLES
            </span>
          </div>
          <h2 className="text-section-title font-black text-blue-900 reveal-up">
            Why Prayagraj Families
            <br />
            <span className="text-gradient">Choose Us Every Time</span>
          </h2>
          <p className="text-section-sub text-blue-700/60 mt-6 reveal-up">
            We&apos;ve built our reputation one satisfied customer at a time. Here&apos;s what makes
            RAG MARBLES different from every other plumbing store.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`reveal-scale card-3d rounded-3xl p-8 border flex flex-col gap-6 ${
                i === 0
                  ? 'bg-gradient-to-br from-blue-600 to-sky-500 border-transparent shadow-xl shadow-blue-500/30'
                  : 'bg-white border-blue-100 shadow-md'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                  i === 0 ? 'bg-white/20' : 'bg-blue-50'
                }`}
              >
                <Icon
                  name={reason.icon as 'ShieldCheckIcon'}
                  size={32}
                  className={i === 0 ? 'text-white' : 'text-blue-600'}
                  variant="solid"
                />
              </div>

              <div>
                <p
                  className={`text-5xl font-black leading-none ${i === 0 ? 'text-white' : 'text-blue-900'}`}
                >
                  {reason.stat}
                </p>
                <p
                  className={`text-xs font-bold uppercase tracking-wider mt-1.5 ${i === 0 ? 'text-white/70' : 'text-blue-400'}`}
                >
                  {reason.statLabel}
                </p>
              </div>

              <div>
                <h3
                  className={`font-black text-xl leading-snug ${i === 0 ? 'text-white' : 'text-blue-900'}`}
                >
                  {reason.title}
                </h3>
                <p
                  className={`text-base leading-relaxed mt-2 ${i === 0 ? 'text-white/75' : 'text-blue-700/60'}`}
                >
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-6 reveal-up">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1 bg-blue-200" />
            <span className="text-sm font-bold text-blue-500 uppercase tracking-widest">
              What Our Customers Say
            </span>
            <div className="h-px flex-1 bg-blue-200" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="reveal-scale card-3d bg-white border border-blue-100 rounded-3xl p-8 flex flex-col gap-6 shadow-md"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Icon
                      key={s}
                      name="StarIcon"
                      size={18}
                      className="text-amber-400"
                      variant="solid"
                    />
                  ))}
                </div>
                <p className="text-blue-800/70 text-lg leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  {/* <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-100 flex-shrink-0">
                    <AppImage
                      src={t.avatar}
                      alt={t.avatarAlt}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div> */}
                  <div>
                    <p className="text-blue-900 font-bold text-base">{t.name}</p>
                    <p className="text-blue-500/70 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="reveal-up mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 p-10 rounded-3xl bg-gradient-to-r from-blue-600 to-sky-500 shadow-xl shadow-blue-500/20">
          <div className="text-center sm:text-left">
            <p className="text-3xl font-black text-white">Ready to transform your bathroom?</p>
            <p className="text-white/75 text-lg mt-2">
              Visit our showroom or call us for a free consultation.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-blue-700 font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg"
            >
              <Icon name="PhoneIcon" size={20} variant="solid" />
              Get Free Advice
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
