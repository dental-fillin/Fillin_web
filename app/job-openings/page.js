import Header from '../components/Header';
import Footer from '../components/Footer';
import { supabase } from '@/lib/supabase';
import JobsClient from './JobsClient';

// Always dynamic so fresh listings are rendered
export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Dental Job Openings & Career Opportunities | Fillin NSW',
  description: 'Browse current dental job openings in New South Wales: hygienists, assistants, reception, therapists, dentists & more. Apply directly or contact Fillin for staffing help.',
  alternates: { canonical: 'https://fillin.au/job-openings' },
  openGraph: {
    title: 'Dental Job Openings – NSW | Fillin',
    description: 'Live dental career opportunities across NSW. Permanent & temp roles updated frequently.',
    url: 'https://fillin.au/job-openings',
    type: 'website'
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

export default async function JobOpenings() {
  const jobs = await getJobs();
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Hero Section (mirrors test page styling) */}
      <section className="bg-gradient-to-r from-[#2C2E9F] to-[#1a1c6b] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Job Openings</h1>
            <p className="text-xl mb-6 text-gray-100 max-w-3xl mx-auto">
              Would you like to advertise your job vacancies with us? We can host your job openings on our website. Contact us for more information.
            </p>
          </div>
        </div>
      </section>

      <JobsClient jobs={jobs} />

      <Footer />
    </main>
  );
}