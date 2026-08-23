'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Image from 'next/image';

const PHONE_NUMBER = '+919120125913';
const WHATSAPP_NUMBER = '919120125913';
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I'm interested in your plumbing and sanitary products"
);

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-blue-900/10 border-b border-blue-100'
            : 'bg-white/90 backdrop-blur-md border-b border-blue-50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 group" aria-label="RAG MARBLES home">
            <div className="w-[132px] h-12 sm:w-[160px] sm:h-14 overflow-hidden flex items-center justify-center">
              <Image
                src="/assets/images/raglogo.png"
                alt="RAG MARBLES logo"
                width={640}
                height={390}
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-blue-800/70 hover:text-blue-900 hover:bg-blue-50 transition-all duration-200"
              >
                {link?.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-sm font-semibold hover:bg-blue-100 transition-all duration-200"
              aria-label="Call RAG MARBLES"
            >
              <Icon name="PhoneIcon" size={16} variant="solid" />
              <span className="hidden lg:inline">9120125913</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-500 text-white text-sm font-bold hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/30"
              aria-label="WhatsApp RAG MARBLES"
            >
              <Icon name="ChatBubbleLeftEllipsisIcon" size={16} variant="solid" />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>

            {/* Mobile call icon */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white"
              aria-label="Call RAG MARBLES"
            >
              <Icon name="PhoneIcon" size={18} variant="solid" />
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-blue-200 text-blue-800 hover:bg-blue-50 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-blue-900/30 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-80 bg-white border-l border-blue-100 md:hidden transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-blue-100">
          <div className="w-[128px] h-10 overflow-hidden flex items-center justify-center">
            <Image
              src="/assets/images/raglogo.png"
              alt="RAG MARBLES logo"
              width={640}
              height={390}
              className="w-full h-full object-contain"
            />
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 rounded-xl border border-blue-200 text-blue-800 flex items-center justify-center"
          >
            <Icon name="XMarkIcon" size={20} />
          </button>
        </div>
        <nav className="flex flex-col px-4 py-6 gap-1">
          {navLinks?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              onClick={handleNavClick}
              className="py-3.5 px-4 rounded-xl text-base font-semibold text-blue-800 hover:bg-blue-50 hover:text-blue-900 transition-colors"
            >
              {link?.label}
            </a>
          ))}
          <div className="mt-6 pt-6 border-t border-blue-100 flex flex-col gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-base shadow-lg"
              onClick={handleNavClick}
            >
              <Icon name="PhoneIcon" size={18} variant="solid" />
              Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-green-500 text-white font-bold text-base"
              onClick={handleNavClick}
            >
              <Icon name="ChatBubbleLeftEllipsisIcon" size={18} variant="solid" />
              Chat on WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
