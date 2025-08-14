import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'Dental Staff Training & Upskilling Programs | Fillin NSW',
  description: 'Custom dental staff training for assistants, receptionists & practice managers in NSW. Practical learning, onboarding support & job placement guidance.',
  alternates: { canonical: 'https://fillin.au/staff-training' },
  openGraph: {
    title: 'Dental Staff Training – Upskill Your Team | Fillin',
    description: 'Tailored training programs for dental support staff with hands-on learning & mentoring.',
    url: 'https://fillin.au/staff-training'
  }
};

export default function StaffTraining() {

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
              Looking to train or upskill your staff? We offer customised training courses for dental assistants, 
              receptionists, and practice managers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Staff Training Solutions for Dental Practices</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Enhance the capabilities of your team with our tailored training programs designed specifically for dental assistants, receptionists, oral health therapist, and practice managers. Our customised courses ensure your staff are equipped with the skills and confidence they need to excel—allowing you to focus on running your practice without the added pressure of onboarding and training.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed"><strong>What We Offer:</strong></p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Customised training programs aligned with your practice’s needs</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Practical, hands-on learning experiences</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Improve your hygienists&#39; time-management and treatment sales skills</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Ongoing support and mentoring for continued professional growth</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center">
                 <div className="w-full" style={{ height: "280px", minHeight: "25rem" }}>
                  <Image
                    src="/train_img.jpg"
                    alt="Staff Training"
                    fill
                    style={{ objectFit: "contain" }}
                    className="rounded-xl"
                    priority
                  />
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
      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F5F5F5] rounded-xl shadow-lg p-12 text-center">
            <div className="w-20 h-20 bg-[#2C2E9F] rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you are a clinic looking for staff training or a job-seeker searching for the right training program, 
              we would be happy to help you meet your needs.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-[#2C2E9F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a1c6b] transition-colors text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 