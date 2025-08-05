export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Fillin</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Established in 2016, Fillin started as a temporary staff provider, however, over the years it has grown into a company that offers a variety of services that include recruitment, temping services, staff training, and dental equipment repairs and maintenance.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We service the greater Auckland region, from Orewa in the north, down to Pukekohe in the south, and from the east coast to the west coast of Auckland. Our commitment to excellence and professional service has made us a trusted partner for dental practices across the region.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#2C2E9F] mb-2">7+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#2C2E9F] mb-2">100+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-[#F5F5F5] rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#2C2E9F] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional dental staffing solutions and support services that enable dental practices to focus on delivering quality patient care while we handle their staffing and equipment needs.
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#2C2E9F] rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#2C2E9F] rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 