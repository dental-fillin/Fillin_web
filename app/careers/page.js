import Header from '../components/Header';
import Footer from '../components/Footer';
import { supabase } from '@/lib/supabase';
import DentalJobsClient from './DentalJobsClient';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Dental Careers & Growth Pathways | Fillin NSW',
  description: 'Advance your dental career in New South Wales. Explore professional development, supportive culture, benefits and current openings through Fillin.',
  alternates: { canonical: 'https://fillin.au/dental-careers' },
  openGraph: {
    title: 'Dental Careers – Professional Growth | Fillin',
    description: 'Career development, training and job opportunities for dental professionals across NSW.',
    url: 'https://fillin.au/dental-careers'
  }
};

async function getJobs() {
  const { data, error } = await supabase
    .from('job_openings')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) {
    console.error('Job openings fetch error:', error.message);
    return [];
  }
  return data || [];
}

export default async function DentalCareers() {
  const jobs = await getJobs();
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'Dental Hygienist',
      text: 'Working with Fillin has been amazing. The team is supportive and the opportunities for growth are endless.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'Dental Assistant',
      text: 'Great work environment and excellent training programs. I\'ve learned so much in my time here.',
      rating: 5
    },
    {
      name: 'Emma Wilson',
      position: 'Dental Receptionist',
      text: 'Flexible hours and supportive management. Perfect for balancing work and family life.',
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
              Dental Careers
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Join our team of dental professionals and make a difference in people's oral health.
              We offer exciting career opportunities across New South Wales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#current-openings"
                className="bg-white text-[#2C2E9F] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Fillin?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a supportive environment where dental professionals can thrive and grow their careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2C2E9F] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Development</h3>
              <p className="text-gray-600">
                Continuous learning opportunities and career advancement pathways for all team members.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#2C2E9F] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Supportive Team</h3>
              <p className="text-gray-600">
                Work with experienced professionals in a collaborative and supportive environment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#2C2E9F] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Competitive Benefits</h3>
              <p className="text-gray-600">
                Attractive salary packages, flexible hours, and comprehensive benefits for all employees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section id="current-openings" className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Current Openings</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Explore active roles and apply directly. We update listings frequently—check back often if you don't see a match today.
            </p>
          </div>
          
          {jobs.length > 0 ? (
            <DentalJobsClient jobs={jobs} />
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-700 mb-4">No current job openings available</h3>
              <p className="text-gray-600 mb-6">Please check back later for new opportunities or contact us directly.</p>
              <a href="/contact" className="inline-block bg-[#2C2E9F] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#1a1c6b] transition-colors shadow">
                Contact Us
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Team Says</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our current team members about their experience working with Fillin.
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

      {/* Application Form */}
     

      <Footer />
    </main>
  );
}