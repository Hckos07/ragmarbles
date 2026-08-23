'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const highlights = [
  {
    icon: 'MapPinIcon',
    title: 'A-2/47 DEVGHAT Jhalwa, Prayagraj',
    desc: 'Located besides HDFC Bank, Jhalwa. Easy to find and accessible from all parts of Prayagraj.',
  },
  {
    icon: 'ClockIcon',
    title: 'Open Mon–Sat, 9 AM – 8 PM',
    desc: 'Six days a week for your convenience. Call ahead for Sunday visits.',
  },
  {
    icon: 'ShieldCheckIcon',
    title: '100% Genuine Products',
    desc: 'Every product sourced directly from manufacturers or authorized distributors. No counterfeits.',
  },
  {
    icon: 'UserGroupIcon',
    title: 'Customers & Retailers Both',
    desc: 'We serve individual homeowners as well as retailers and contractors with bulk requirements.',
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale')
              .forEach((el, i) => {
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
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-36 bg-white"
      aria-label="About RAG MARBLES"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6 reveal-up">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-sm font-bold text-blue-700 uppercase tracking-widest">
              Our Story
            </span>
          </div>
          <h2 className="text-section-title font-black text-blue-900 reveal-up">
            Prayagraj&apos;s Trusted
            <br />
            <span className="text-gradient">Plumbing &amp; Sanitary</span> Store
          </h2>
          <p className="text-section-sub text-blue-700/60 mt-6 reveal-up">
            Serving homeowners, contractors, and retailers across Prayagraj since 2020.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Left: Image */}
          <div className="relative reveal-left">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-blue-100">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_158130e3f-1782551530092.png"
                alt="Well-lit plumbing shop interior with rows of premium taps, pipes and fittings neatly displayed on shelves"
                width={720}
                height={560}
                className="w-full h-[420px] sm:h-[520px] object-cover"
              />
            </div>

            {/* Floating stat badge */}
            <div className="absolute -bottom-10 -right-4 sm:right-8 bg-gradient-to-br from-blue-600 to-sky-500 text-white rounded-2xl px-8 py-6 shadow-xl shadow-blue-500/30">
              <p className="text-6xl font-black leading-none">Est.</p>
              <p className="text-base font-semibold opacity-80 mt-2">
                2020
                <br />
                Prayagraj
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-8">
            <div className="reveal-up">
              <h3 className="text-4xl lg:text-5xl font-black text-blue-900 leading-tight">
                Your One-Stop Shop for
                <span className="text-gradient"> Plumbing &amp; Sanitary</span> Needs
              </h3>
            </div>

            <p className="text-xl text-blue-800/60 leading-relaxed reveal-up">
              RAG MARBLES was founded in 2020 with a simple mission: give Prayagraj residents access
              to genuine, high-quality plumbing and sanitary products at fair prices. We stock
              pipes, bath fittings, sanitaryware, water tanks and much more.
            </p>
            <p className="text-xl text-blue-800/60 leading-relaxed reveal-up">
              Whether you&apos;re a homeowner fixing a leaky tap, a contractor fitting out a
              building, or a retailer looking for wholesale supply — our team is here to help you
              find exactly what you need.
            </p>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {highlights.map((h, i) => (
                <div
                  key={h.title}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-blue-50 border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300 reveal-up card-hover"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={h.icon as 'MapPinIcon'}
                      size={24}
                      className="text-blue-600"
                      variant="solid"
                    />
                  </div>
                  <div>
                    <p className="text-base font-bold text-blue-900 leading-snug">{h.title}</p>
                    <p className="text-sm text-blue-700/60 mt-1 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
