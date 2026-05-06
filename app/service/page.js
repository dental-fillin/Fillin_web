import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'Services – Cleanroom Solutions | Fillin',
  description: 'Comprehensive cleanroom services including supplies, garments, equipment servicing, construction support, and emergency decontamination.',
  alternates: { canonical: 'https://fillin.au/service' },
  openGraph: {
    title: 'Services – Cleanroom Solutions',
    description: 'Comprehensive cleanroom services for pharmaceutical and controlled environments.',
    url: 'https://fillin.au/service'
  }
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2C2E9F] to-[#1a1c6b] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Comprehensive solutions to support your cleanroom operations, from supplies to emergency response.
            </p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Service 1 */}
          <div id="supplies" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">1. Cleanroom Supplies &amp; Contamination Control</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We help you source and manage all essential cleanroom supplies, ensuring consistency, compliance, and reliability.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Cleanroom apparel and garments',
                  'Coveralls, gloves, masks, and PPE',
                  'Cleaning chemicals and disinfectants',
                  'Consumables and contamination control products',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2C2E9F] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-700 font-semibold">We don't just supply — we advise on the right products for your environment.</p>
            </div>
            <div className="relative rounded-lg overflow-hidden h-64">
              <Image
                src="/service1.jpg"
                alt="Cleanroom Supplies and Contamination Control"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Service 2 */}
          <div id="garments" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-lg overflow-hidden h-64">
              <Image
                src="/service2.jpg"
                alt="Garments and PPE Management"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">2. Garments &amp; PPE Management</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Proper apparel is critical to contamination control.
              </p>
              <p className="text-lg font-semibold text-gray-900 mb-4">We help you:</p>
              <ul className="space-y-3">
                {[
                  'Select the right garments for your cleanroom class',
                  'Standardise PPE across teams',
                  'Improve compliance and reduce contamination risks',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2C2E9F] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service 3 */}
          <div id="equipment" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">3. Cleanroom Equipment Servicing</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Downtime and poorly maintained equipment can compromise your cleanroom.
              </p>
              <p className="text-lg font-semibold text-gray-900 mb-4">We provide:</p>
              <ul className="space-y-3">
                {[
                  'Preventative maintenance',
                  'Equipment servicing and repair',
                  'Performance checks and optimisation',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2C2E9F] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden h-64">
              <Image
                src="/service3.jpg"
                alt="Cleanroom Equipment Servicing"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Service 4 */}
          <div id="furniture" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-lg overflow-hidden h-64">
              <Image
                src="/service4.jpg"
                alt="Cleanroom Furniture and Construction"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">4. Cleanroom Furniture &amp; Construction</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We support cleanroom setup and upgrades with practical, compliant solutions.
              </p>
              <ul className="space-y-3">
                {[
                  'Cleanroom furniture sourcing',
                  'Layout optimisation',
                  'Construction and fit-out support',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2C2E9F] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service 5 */}
          <div id="emergency" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">5. Emergency Infection Control (H2O2 Decontamination)</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                When contamination incidents occur, rapid response is critical.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We provide emergency decontamination using hydrogen peroxide (H2O2) vapour systems to safely and effectively sterilise cleanroom environments.
              </p>
              <ul className="space-y-3">
                {[
                  'Rapid deployment',
                  'Full-room decontamination',
                  'Minimal downtime',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2C2E9F] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden h-64 mt-8">
              <Image
                src="/service5.jpeg"
                alt="Emergency Infection Control H2O2 Decontamination"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
