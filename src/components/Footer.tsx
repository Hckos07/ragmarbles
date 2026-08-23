import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

const PHONE_NUMBER = '+919120125913';
const WHATSAPP_NUMBER = '919120125913';
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I'm interested in your plumbing and sanitary products"
);

const footerLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

const productLinks = [
  'Pipes & Fittings',
  'Bath Fittings',
  'Sanitaryware',
  'Water Tanks',
  'Taps & Faucets',
  'Bathroom Accessories',
];

export default function Footer() {
  return (
    <footer className="bg-blue-950 border-t border-blue-900">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-lg">
                <Image
                  src="/assets/images/raglogo.png"
                  alt="RAG MARBLES logo"
                  width={640}
                  height={390}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-black text-2xl text-white tracking-tight block leading-none">
                  RAG MARBLES
                </span>
                <span className="text-sm text-blue-300 font-medium">
                  Prayagraj&apos;s Trusted Plumbing Store
                </span>
              </div>
            </div>
            <p className="text-blue-200/70 text-base leading-relaxed max-w-sm">
              Serving customers and retailers in Prayagraj since 2020. Genuine products, expert
              advice — pipes, bath fittings, sanitaryware, water tanks and more.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-3 text-blue-200/70 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-800/50 flex items-center justify-center group-hover:bg-blue-700/60 transition-colors">
                  <Icon name="PhoneIcon" size={16} className="text-blue-300" variant="solid" />
                </div>
                <span className="text-sm font-medium">+91 9120125913</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-200/70 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-800/50 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <Icon
                    name="ChatBubbleLeftEllipsisIcon"
                    size={16}
                    className="text-green-400"
                    variant="solid"
                  />
                </div>
                <span className="text-sm font-medium">WhatsApp: 9120125913</span>
              </a>
              <div className="flex items-start gap-3 text-blue-200/50">
                <div className="w-9 h-9 rounded-lg bg-blue-800/50 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPinIcon" size={16} className="text-blue-300" variant="solid" />
                </div>
                <span className="text-sm leading-relaxed">
                  A-2/47 DEVGHAT Jhalwa besides HDFC Bank, Prayagraj
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-base uppercase tracking-widest">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks?.map((link) => (
                <a
                  key={link?.label}
                  href={link?.href}
                  className="text-blue-300/70 hover:text-blue-200 text-sm font-medium transition-colors py-0.5"
                >
                  {link?.label}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-base uppercase tracking-widest">Products</h4>
            <div className="flex flex-col gap-2">
              {productLinks?.map((product) => (
                <a
                  key={product}
                  href="#products"
                  className="text-blue-300/70 hover:text-blue-200 text-sm font-medium transition-colors py-0.5"
                >
                  {product}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-300/50">
            © 2020–{new Date().getFullYear()} RAG MARBLES. All rights reserved. · Prayagraj, India
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-blue-300/40">Developed by -AP</span>
            <Link
              href="#top"
              className="text-xs text-blue-300/40 hover:text-blue-200/70 transition-colors"
            >
              Back to top
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
