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

 
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2C2E9F] to-[#1a1c6b] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Work with Fillin
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Jobs Openings</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Would you like to advertise your job vacancies with us? We can host your job openings on our website. Contact us for more information.
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
      <Footer />
    </main>
  );
}