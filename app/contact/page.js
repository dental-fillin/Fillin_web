import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactFormClient from './ContactFormClient';

export const metadata = {
  title: 'Contact Fillin – Dental Recruitment & Staffing NSW',
  description: 'Contact Fillin for dental recruitment, temporary staffing, training & equipment servicing across New South Wales. Phone 6am–8pm. SMS & Email 24/7.',
  alternates: { canonical: 'https://fillin.au/contact' },
  openGraph: {
    title: 'Contact Fillin – Dental Staffing Support',
    description: 'Reach our team for staffing, training and equipment servicing enquiries in NSW.',
    url: 'https://fillin.au/contact'
  }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2C2E9F] to-[#1a1c6b] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Need a temp? Looking for work in the dental field? Or just have a question? Use the
              form below or contact us directly—we’d love to hear from you
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              <strong>Opening Hours:</strong><br />
              Phone: 6:00 am – 8:00 pm &nbsp;|&nbsp; SMS / Email: 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form (Client Component) */}
          <ContactFormClient />

          {/* Contact Info & Why Choose Fillin (unchanged static content) */}
          <div className="space-y-8">
            <div className="bg-[#F5F5F5] rounded-xl p-8 shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  {/* Phone icon */}
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>041 4022278</span>
                </div>
                <div className="flex items-center text-gray-700">
                  {/* Email icon */}
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 6l-10 7L2 6" />
                  </svg>
                  <span>fillinau@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div>Fillin</div>
                    <div>Sydney, New South Wales</div>
                    <div>Australia</div>
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
