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
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive dental staffing and support services to help your practice thrive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-[#2C2E9F] mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
            </div>
          ))}

          {/* New Card for Jobseekers */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center hover:shadow-xl transition-shadow">
            <div className="text-[#2C2E9F] mb-6 flex justify-center">
              {/* Optional: Add a relevant icon */}
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Looking for work in Dentistry</h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-center">
              Are you a jobseeker looking for work in the Dental industry? We can help you find both permanent and casual work. Contact us for more information.
            </p>
            <div className="flex justify-center">
              <a
                href="/careers"
                className="bg-[#2C2E9F] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#1a1c6b] transition-colors"
              >
                Careers →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}