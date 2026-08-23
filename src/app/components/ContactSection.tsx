'use client';

import React, { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const PHONE_NUMBER = '+919120125913';
const WHATSAPP_NUMBER = '919120125913';
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I'm interested in your plumbing and sanitary products"
);

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const contactDetails = [
  {
    icon: 'MapPinIcon',
    label: 'Visit Our Showroom',
    value: 'A-2/47 DEVGHAT Jhalwa besides HDFC Bank, Prayagraj',
    href: undefined,
    external: false,
  },
  {
    icon: 'PhoneIcon',
    label: 'Call Us Directly',
    value: '+91 9120125913',
    href: `tel:${PHONE_NUMBER}`,
    external: false,
  },
  {
    icon: 'ChatBubbleLeftEllipsisIcon',
    label: 'WhatsApp',
    value: '9120125913',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
    external: true,
  },
  {
    icon: 'ClockIcon',
    label: 'Working Hours',
    value: 'Mon–Sat: 9:00 AM – 8:00 PM · Sunday: Closed',
    href: undefined,
    external: false,
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.reveal-up, .reveal-left, .reveal-right')
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

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      newErrors.phone = 'Enter a valid 10-digit Indian mobile number';
    }
    if (!form.message.trim()) newErrors.message = 'Please describe your requirement';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitError('');
    setLoading(true);

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || 'Unable to send your enquiry. Please try again.');
      }

      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setLoading(false);
      setSubmitError(
        error instanceof Error ? error.message : 'Unable to send your enquiry. Please try again.'
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white"
      aria-label="Contact RAG MARBLES"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-5 reveal-up">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-sm font-bold text-blue-700 uppercase tracking-widest">
              Get In Touch
            </span>
          </div>
          <h2 className="text-section-title font-black text-blue-900 reveal-up">
            Visit Us or
            <span className="text-gradient"> Send an Enquiry</span>
          </h2>
          <p className="text-section-sub text-blue-700/60 mt-5 reveal-up">
            Fill in the form and we&apos;ll call you back within 2 hours, or reach us directly by
            phone or WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left: Enquiry Form */}
          <div className="lg:col-span-3 reveal-left">
            <div className="bg-white rounded-3xl border border-blue-100 shadow-xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Icon name="PaperAirplaneIcon" size={22} className="text-white" variant="solid" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-blue-900">Send an Enquiry</h3>
                  <p className="text-sm text-blue-600/60">We respond within 2 hours</p>
                </div>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 gap-5 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon
                      name="CheckCircleIcon"
                      size={44}
                      className="text-green-500"
                      variant="solid"
                    />
                  </div>
                  <h4 className="text-2xl font-black text-blue-900">Enquiry Received!</h4>
                  <p className="text-blue-700/60 text-base max-w-xs">
                    Thank you! We&apos;ll call you back within 2 hours during working hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-6 py-3 rounded-xl bg-blue-50 text-blue-700 font-bold hover:bg-blue-100 transition-colors"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-blue-900 mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Sharma"
                      className={`w-full px-5 py-4 rounded-xl border-2 text-base text-blue-900 bg-blue-50/50 placeholder:text-blue-400/60 focus:outline-none focus:ring-0 focus:border-blue-500 transition-colors ${
                        errors.name ? 'border-red-400' : 'border-blue-100 hover:border-blue-300'
                      }`}
                      autoComplete="name"
                      maxLength={100}
                      required
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-blue-900 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9820123456"
                      className={`w-full px-5 py-4 rounded-xl border-2 text-base text-blue-900 bg-blue-50/50 placeholder:text-blue-400/60 focus:outline-none focus:ring-0 focus:border-blue-500 transition-colors ${
                        errors.phone ? 'border-red-400' : 'border-blue-100 hover:border-blue-300'
                      }`}
                      autoComplete="tel"
                      maxLength={10}
                      inputMode="numeric"
                      required
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-blue-900 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="e.g. name@example.com"
                      className={`w-full px-5 py-4 rounded-xl border-2 text-base text-blue-900 bg-blue-50/50 placeholder:text-blue-400/60 focus:outline-none focus:ring-0 focus:border-blue-500 transition-colors ${
                        errors.email ? 'border-red-400' : 'border-blue-100 hover:border-blue-300'
                      }`}
                      autoComplete="email"
                      required
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-blue-900 mb-2">
                      Your Requirement <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="e.g. I need pipes and bath fittings for my new home..."
                      className={`w-full px-5 py-4 rounded-xl border-2 text-base text-blue-900 bg-blue-50/50 placeholder:text-blue-400/60 focus:outline-none focus:ring-0 focus:border-blue-500 transition-colors resize-none ${
                        errors.message ? 'border-red-400' : 'border-blue-100 hover:border-blue-300'
                      }`}
                      maxLength={2000}
                      required
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-4 text-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Icon name="PaperAirplaneIcon" size={20} variant="solid" />
                        Submit Enquiry
                      </>
                    )}
                  </button>

                  <p className="text-sm text-blue-600/50 text-center">
                    We typically respond within 2 hours during working hours.
                  </p>
                  {submitError && (
                    <p className="text-sm text-red-600 text-center" role="alert">
                      {submitError}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Right: Contact Details */}
          <div className="lg:col-span-2 flex flex-col gap-6 reveal-right">
            <div className="bg-blue-900 rounded-3xl p-7 flex flex-col gap-5">
              <h3 className="text-lg font-black text-white">Shop Details</h3>
              <div className="flex flex-col gap-4">
                {contactDetails.map((detail) => {
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-800/60 flex items-center justify-center flex-shrink-0">
                        <Icon
                          name={detail.icon as 'MapPinIcon'}
                          size={20}
                          className="text-sky-300"
                          variant="solid"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-blue-300/60 uppercase tracking-wider">
                          {detail.label}
                        </p>
                        <p className="text-sm font-semibold text-white/85 mt-0.5 leading-snug">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  );
                  if (detail.href) {
                    return (
                      <a
                        key={detail.label}
                        href={detail.href}
                        target={detail.external ? '_blank' : undefined}
                        rel={detail.external ? 'noopener noreferrer' : undefined}
                        className="hover:opacity-80 transition-opacity"
                      >
                        {content}
                      </a>
                    );
                  }
                  return <div key={detail.label}>{content}</div>;
                })}
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold text-sm shadow-lg shadow-blue-500/30 hover:-translate-y-1 transition-all duration-200"
              >
                <Icon name="PhoneIcon" size={18} variant="solid" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-green-500 text-white font-bold text-sm shadow-lg shadow-green-500/30 hover:-translate-y-1 transition-all duration-200"
              >
                <Icon name="ChatBubbleLeftEllipsisIcon" size={18} variant="solid" />
                WhatsApp
              </a>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-3xl overflow-hidden border border-blue-100 shadow-lg h-[220px] sm:h-[280px] lg:h-[320px]">
              <iframe
                title="RAG MARBLES Location Map"
                src="https://www.google.com/maps?q=A-2%2F47%20Devghat%2C%20Jhalwa%2C%20Prayagraj&output=embed"
                className="block w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
