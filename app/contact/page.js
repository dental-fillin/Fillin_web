import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2C2E9F] to-[#1a1c6b] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Have a question or want to get in touch? Fill out the form below or use our contact details to reach us directly.
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
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2E9F] focus:border-transparent bg-white text-gray-900" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2E9F] focus:border-transparent bg-white text-gray-900" required />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2E9F] focus:border-transparent bg-white text-gray-900" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2E9F] focus:border-transparent bg-white text-gray-900" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2E9F] focus:border-transparent bg-white text-gray-900" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="w-full bg-[#2C2E9F] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1a1c6b] transition-colors">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[#F5F5F5] rounded-xl p-8 shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 2a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2h8zm-4 18v-6m0 0V8m0 6h4m-4 0H8" /></svg>
                  <span>09 123 4567</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm-8 0a8 8 0 1116 0 8 8 0 01-16 0z" /></svg>
                  <span>info@fillin.co.nz</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>123 Dental Street, Auckland, NZ</span>
                </div>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="bg-[#F5F5F5] rounded-xl p-8 shadow flex flex-col items-center justify-center min-h-[200px]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
              <div className="w-full h-48 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500">
                Map Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 