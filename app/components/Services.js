export default function Services() {
  const services = [
    {
      id: 'temping-services',
      title: 'Temping Services',
      description: 'Fillin employs and provides temporary hygienists, oral health therapists, dental assistants, receptionists, and dentists. We currently service the NSW region.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'recruitment-services',
      title: 'Recruitment Services',
      description: 'Need help finding and employing the right dental staff for your clinic? We can help you in hiring the right candidate, while you can continue to focus on running your clinic with as little disruption as possible.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 'staff-training',
      title: 'Staff Training',
      description: 'Should you decide to hire dental support staff such as assistants, receptionists, or practice managers with little or no experience in the field, and would like them trained or upskilled, we can help you. Our training programs will help make the transition of unexperienced new staff into their new roles at your clinic much smoother, and will ensure there is little to no disruption of your current workflow.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive dental staffing and support services to help your practice thrive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
            >
              {/* Gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2C2E9F] to-blue-400" />
              
              <div className="p-10 flex flex-col h-full">
                {/* Icon with background */}
                <div className="bg-blue-50 rounded-xl p-4 w-fit mb-6 group-hover:bg-[#2C2E9F] transition-colors duration-300">
                  <div className="text-[#2C2E9F] group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{service.description}</p>
                
                {/* Subtle arrow indicator */}
                <div className="mt-6 text-[#2C2E9F] font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                  Learn more →
                </div>
              </div>
              
              {/* Subtle hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#2C2E9F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Looking for work section - highlighted separately */}
        <div className="bg-gradient-to-br from-[#2C2E9F] to-blue-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-10 py-12 md:px-16 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 rounded-lg p-3">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">Looking for work in Dentistry?</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Are you a jobseeker looking for work in the dental industry? We can help you find both permanent and casual opportunities. Get in touch to explore your options.
              </p>
            </div>
            <div className="md:flex-shrink-0">
              <a
                href="/careers"
                className="inline-flex items-center gap-2 bg-white text-[#2C2E9F] px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Explore Careers
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}