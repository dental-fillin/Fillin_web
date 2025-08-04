import Header from '../components/Header';
import Footer from '../components/Footer';

export default function StaffTraining() {
  const trainingPrograms = [
    {
      id: 1,
      title: 'Dental Assistant Training',
      duration: '4-6 weeks',
      level: 'Beginner to Intermediate',
      description: 'Comprehensive training program for dental assistants covering all aspects of dental practice support.',
      topics: [
        'Dental terminology and anatomy',
        'Infection control and sterilization',
        'Chairside assisting techniques',
        'Dental equipment operation',
        'Patient care and communication',
        'Practice management software'
      ],
      benefits: [
        'Hands-on practical training',
        'Industry-recognized certification',
        'Job placement assistance',
        'Ongoing support and mentoring'
      ]
    },
    {
      id: 2,
      title: 'Dental Receptionist Training',
      duration: '3-4 weeks',
      level: 'Beginner',
      description: 'Specialized training for dental receptionists to manage front desk operations effectively.',
      topics: [
        'Patient scheduling and management',
        'Dental software systems',
        'Insurance and billing procedures',
        'Customer service excellence',
        'Practice communication protocols',
        'Administrative best practices'
      ],
      benefits: [
        'Real-world practice scenarios',
        'Software training included',
        'Communication skills development',
        'Career pathway guidance'
      ]
    },
    {
      id: 3,
      title: 'Practice Manager Training',
      duration: '6-8 weeks',
      level: 'Intermediate to Advanced',
      description: 'Advanced training program for practice managers to oversee dental practice operations.',
      topics: [
        'Practice management systems',
        'Staff supervision and leadership',
        'Financial management and reporting',
        'Marketing and patient retention',
        'Compliance and regulations',
        'Strategic planning and growth'
      ],
      benefits: [
        'Leadership development',
        'Business management skills',
        'Industry networking opportunities',
        'Mentorship from experienced managers'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Lisa Thompson',
      position: 'Dental Assistant',
      text: 'The training program at Fillin was excellent. I learned everything I needed to know and got a job within weeks of completing the course.',
      rating: 5
    },
    {
      name: 'David Park',
      position: 'Dental Receptionist',
      text: 'The hands-on training and real practice scenarios made all the difference. I felt confident and prepared for my new role.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      position: 'Practice Manager',
      text: 'The practice manager training opened up so many opportunities for me. The instructors were experienced and supportive.',
      rating: 5
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2C2E9F] to-[#1a1c6b] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Staff Training
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Looking to train or upskill your staff? We offer customised training courses for assistants, 
              receptionists, and practice managers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#2C2E9F] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Training Programs
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#2C2E9F] transition-colors">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Train Your Staff</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Looking to train or upskill your staff? We offer customised training courses for assistants, 
                receptionists, and practice managers. This ensures that your new employees have the skills and 
                training to succeed in their roles, and relieves you of the pressure of training them yourself 
                while running a busy dental practice.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Customized training programs for your practice</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Hands-on practical training</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Industry-recognized certifications</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Ongoing support and mentoring</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#F5F5F5] rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#2C2E9F] rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Development</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our training programs are designed to develop skilled professionals who can contribute 
                    effectively to your dental practice's success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-[#F5F5F5] rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#2C2E9F] rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Career Opportunities</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Want to join the dental industry but lack the experience and knowledge required? 
                    We can train you and provide you with experience that enables you to secure a job 
                    in the dental industry.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Find a Career in the Dental Field</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Want to join the dental industry but lack the experience and knowledge required? We can train 
                you and provide you with experience that enables you to secure a job in the dental industry.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">No prior experience required</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Comprehensive training programs</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Job placement assistance</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Industry connections and networking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training programs designed to develop skilled dental professionals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program) => (
              <div key={program.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                  <span className="bg-[#2C2E9F] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {program.level}
                  </span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Duration: {program.duration}</span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Topics Covered:</h4>
                  <ul className="space-y-2">
                    {program.topics.map((topic, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-4 h-4 text-[#2C2E9F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Program Benefits:</h4>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-4 h-4 text-[#2C2E9F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-[#2C2E9F] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1a1c6b] transition-colors">
                  Enquire Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Graduates Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our training program graduates about their experience and career success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#F5F5F5] rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-[#2C2E9F]">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch!</h2>
              <p className="text-gray-600">
                Whether you are a clinic looking for staff or a job-seeker searching for the right position, 
                call or email us and we would be happy to help you meet your needs.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2E9F] focus:border-transparent bg-white text-gray-900"
                    required
                  />
                </div>
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
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2E9F] focus:border-transparent bg-white text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="trainingType" className="block text-sm font-medium text-gray-700 mb-2">
                  Training Interest
                </label>
                <select
                  id="trainingType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2E9F] focus:border-transparent bg-white text-gray-900"
                >
                  <option value="">Select training program</option>
                  <option value="dental-assistant">Dental Assistant Training</option>
                  <option value="dental-receptionist">Dental Receptionist Training</option>
                  <option value="practice-manager">Practice Manager Training</option>
                  <option value="custom">Custom Training Program</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2E9F] focus:border-transparent bg-white text-gray-900"
                  placeholder="Tell us about your training needs and requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2C2E9F] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1a1c6b] transition-colors"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 