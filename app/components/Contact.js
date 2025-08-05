'use client';

export default function Contact() {
 

  return (
    <section id="contact" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch!</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Need more information or looking to use our services? Call or email us and we would be happy to help you.
          </p>
          <div className="flex justify-center py-5">
              <a 
                href="/contact" 
                className="bg-[#2C2E9F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1c6b] transition-colors"
              >
                Contact Us
              </a>
            </div>
        </div>
      </div>
    </section>
  );
} 