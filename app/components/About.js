export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="relative">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We provide end-to-end cleanroom support so your operations remain compliant, efficient, and contamination-free.
              </p>
            </div>

            {/* Services Grid - Clean Layout */}
            <div>
              {/* Modern Grid Layout with varied card sizes */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {/* Large featured card */}
                <div className="lg:col-span-2 bg-gradient-to-br from-[#2C2E9F] to-blue-700 rounded-2xl p-10 text-white group hover:shadow-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Cleanroom supplies &amp; contamination control</h3>
                  <p className="text-blue-100 leading-relaxed">Industry-leading solutions for contamination prevention</p>
                </div>

                {/* Small card 1 */}
                <div className="bg-blue-50 rounded-2xl p-8 group hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2C2E9F] to-blue-600 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Garments &amp; PPE</h3>
                  <p className="text-sm text-gray-600">Premium apparel solutions</p>
                </div>

                {/* Small card 2 */}
                <div className="bg-purple-50 rounded-2xl p-8 group hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2C2E9F] to-blue-600 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Equipment Servicing</h3>
                  <p className="text-sm text-gray-600">Professional maintenance</p>
                </div>

                {/* Small card 3 */}
                <div className="bg-blue-50 rounded-2xl p-8 group hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2C2E9F] to-blue-600 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Furniture &amp; Build</h3>
                  <p className="text-sm text-gray-600">Construction support</p>
                </div>

                {/* Bottom spanning card */}
                <div className="lg:col-span-5 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-10 group hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#2C2E9F] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency infection control</h3>
                        <p className="text-gray-600">H2O2 decontamination solutions for urgent needs</p>
                      </div>
                    </div>
                    <div className="md:flex-shrink-0">
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-white text-[#2C2E9F] font-semibold shadow-sm">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#2C2E9F] rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#2C2E9F] rounded-full opacity-20"></div>
          </div>
      </div>

      {/* Why Choose Us Section - Full Width Grey Background */}
      <div className="bg-gray-100 mt-16 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Industry expertise in pharmaceutical environments',
              'End-to-end solutions (not just products)',
              'Fast response for urgent contamination events',
              'Compliance-focused approach (GMP, ISO standards)',
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#2C2E9F]">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}