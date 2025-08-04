import Header from '../components/Header';
import Footer from '../components/Footer';

export default function JobOpenings() {
  const currentJobs = [
    {
      id: 1,
      title: 'Dental Hygienist',
      location: 'Auckland Central',
      type: 'Full-time',
      salary: '$65,000 - $75,000',
      description: 'We are seeking an experienced Dental Hygienist to join our busy practice in Auckland Central.',
      postedDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'Dental Assistant',
      location: 'North Shore',
      type: 'Part-time',
      salary: '$45,000 - $55,000',
      description: 'Join our growing practice on the North Shore as a Dental Assistant.',
      postedDate: '2024-01-10'
    },
    {
      id: 3,
      title: 'Dental Receptionist',
      location: 'Auckland CBD',
      type: 'Full-time',
      salary: '$50,000 - $60,000',
      description: 'We are looking for a professional and friendly Dental Receptionist.',
      postedDate: '2024-01-08'
    }
  ];

  const hasCurrentJobs = currentJobs.length > 0;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-NZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2C2E9F] to-[#1a1c6b] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Job Openings
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Looking for work? Check out the available job openings below and find your next career opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {hasCurrentJobs ? (
            <>
              {/* Current Job Listings */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Current Openings
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {currentJobs.map((job) => (
                    <div key={job.id} className="bg-[#F5F5F5] rounded-xl p-8 hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        <span className="bg-[#2C2E9F] text-white px-3 py-1 rounded-full text-sm font-medium">
                          {job.type}
                        </span>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>Posted: {formatDate(job.postedDate)}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {job.description}
                      </p>

                      <button className="w-full bg-[#2C2E9F] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1a1c6b] transition-colors">
                        Apply Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* No Jobs Available */}
              <div className="text-center py-16">
                <div className="max-w-2xl mx-auto">
                  <div className="w-24 h-24 bg-[#F5F5F5] rounded-full mx-auto mb-8 flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#2C2E9F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2-2H8a2 2 0 00-2 2v2m8 0v2a2 2 0 01-2 2H8a2 2 0 01-2-2V6m8 0v2a2 2 0 00-2 2v8a2 2 0 002 2h4a2 2 0 002-2V8a2 2 0 00-2-2" />
                    </svg>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Sorry! No current jobs listed
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    To advertise your job opening with us, kindly get in touch for more information on how to proceed.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-[#2C2E9F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1c6b] transition-colors">
                      Contact Us
                    </button>
                    <button className="border-2 border-[#2C2E9F] text-[#2C2E9F] px-8 py-3 rounded-lg font-semibold hover:bg-[#2C2E9F] hover:text-white transition-colors">
                      Submit Job Opening
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Job Categories */}
          <div className="py-16 bg-[#F5F5F5] rounded-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Job Categories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We regularly post opportunities in these dental industry roles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Dental Hygienist', icon: '🦷', count: '3 positions' },
                { title: 'Dental Assistant', icon: '🦷', count: '5 positions' },
                { title: 'Dental Receptionist', icon: '🦷', count: '2 positions' },
                { title: 'Dentist', icon: '🦷', count: '1 position' }
              ].map((category, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-[#2C2E9F] font-medium">{category.count}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Submit Your Application</h2>
              <p className="text-gray-600">
                Ready to take the next step in your dental career? Submit your application and we'll help you find the perfect opportunity.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2E9F] focus:border-transparent bg-white text-gray-900"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2E9F] focus:border-transparent bg-white text-gray-900"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2E9F] focus:border-transparent bg-white text-gray-900"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2E9F] focus:border-transparent bg-white text-gray-900"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                  Position of Interest
                </label>
                <select
                  id="position"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2E9F] focus:border-transparent bg-white text-gray-900"
                >
                  <option value="">Select a position</option>
                  <option value="dental-hygienist">Dental Hygienist</option>
                  <option value="dental-assistant">Dental Assistant</option>
                  <option value="dental-receptionist">Dental Receptionist</option>
                  <option value="dentist">Dentist</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2E9F] focus:border-transparent bg-white text-gray-900"
                  placeholder="Tell us about your experience, skills, and why you're interested in this position..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2C2E9F] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1a1c6b] transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 