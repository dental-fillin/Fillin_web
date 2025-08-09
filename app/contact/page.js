'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactSchema } from '@/lib/schema';

export default function Contact() {
  const [status, setStatus] = useState({ type: '', message: '' });

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: { name: '', email: '', phone: '', subject: '', message: '' },
    mode: 'onTouched',
  });

  const onSubmit = async (values) => {
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values), // already validated by Zod
      });

      let payload = {};
      try {
        payload = await res.json();
      } catch {}

      if (!res.ok) {
        // If your API sends back fieldErrors from Zod, surface them
        if (payload?.error?.fieldErrors) {
          Object.entries(payload.error.fieldErrors).forEach(([field, msgs]) => {
            if (Array.isArray(msgs) && msgs[0]) {
              setError(field, { type: 'server', message: msgs[0] });
            }
          });
        }
        throw new Error(payload?.error?.message || 'Submission failed');
      }

      setStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.',
      });
      reset();
    } catch (err) {
      console.error('Error submitting form:', err);
      setStatus({
        type: 'error',
        message:
          err?.message || 'There was an error submitting your message. Please try again.',
      });
    }
  };

  // helper to keep your styling clean
  const inputClass = (hasError) =>
    `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2C2E9F] focus:border-transparent bg-white text-gray-900 ${
      hasError ? 'border-red-500' : 'border-gray-300'
    }`;

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2C2E9F] to-[#1a1c6b] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Have a question or want to get in touch? Fill out the form below or use our contact
              details to reach us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-[#F5F5F5] rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Send Us a Message</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    aria-invalid={!!errors.name}
                    className={inputClass(!!errors.name)}
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    aria-invalid={!!errors.email}
                    className={inputClass(!!errors.email)}
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+614XXXXXXXX"
                  {...register('phone')}
                  aria-invalid={!!errors.phone}
                  className={inputClass(!!errors.phone)}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject')}
                  aria-invalid={!!errors.subject}
                  className={inputClass(!!errors.subject)}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="How can we help you?"
                  {...register('message')}
                  aria-invalid={!!errors.message}
                  className={inputClass(!!errors.message)}
                  required
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#2C2E9F] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1a1c6b] transition-colors ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {status.message && (
                <div
                  className={`text-center ${
                    status.type === 'success' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info & Why Choose Fillin (unchanged static content) */}
          <div className="space-y-8">
            <div className="bg-[#F5F5F5] rounded-xl p-8 shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 2a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2h8zm-4 18v-6m0 0V8m0 6h4m-4 0H8" />
                  </svg>
                  <span>+64 9 XXX XXXX</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm-8 0a8 8 0 1116 0 8 8 0 01-16 0z" />
                  </svg>
                  <span>info@dentalaid.co.nz</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div>Greater Auckland Region</div>
                    <div className="text-sm text-gray-500">From Orewa to Pukekohe</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#2C2E9F] rounded-xl p-8 shadow text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Fillin?</h3>
              <div className="space-y-4">
                {[
                  'Professional and qualified staff',
                  'Comprehensive service coverage',
                  'Reliable and trusted partner',
                  'Years of industry experience',
                ].map((text) => (
                  <div key={text} className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
