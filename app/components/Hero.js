export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-[#2C2E9F] to-[#1a1c6b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Dental Recruitment
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Established in 2016, Fillin started as a temporary staff provider, however, over the years it has grown into a company that offers a variety of services that include recruitment, temping services, staff training, and dental equipment repairs and maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#2C2E9F] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#2C2E9F] transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Professional Dental Staff</h3>
                <p className="text-gray-200">
                  We provide qualified dental professionals for your practice needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 