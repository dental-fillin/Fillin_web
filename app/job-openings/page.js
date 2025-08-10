import Header from '../components/Header';
import Footer from '../components/Footer';
import { supabase } from '@/lib/supabase';

// Ensure this page is always rendered dynamically (jobs change frequently)
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
  const hasJobs = jobs.length > 0;

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2C2E9F] to-[#1a1c6b] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Job Openings</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Looking for work? Browse current opportunities below and take the next step in your dental career.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {hasJobs ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {jobs.map(job => (
                <div key={job.job_id} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {job.job_title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {job.company_name}{job.location ? ` • ${job.location}` : ''}
                    </p>
                  </div>
                  {job.role_summary && (
                    <p className="text-gray-700 text-sm flex-1 mb-4 line-clamp-4">
                      {job.role_summary}
                    </p>
                  )}
                  <ul className="text-xs text-gray-600 space-y-1 mb-4">
                    {job.employment_type && <li><span className="font-medium">Type:</span> {job.employment_type}</li>}
                    {job.duration && <li><span className="font-medium">Duration:</span> {job.duration}</li>}
                    {job.salary_range && <li><span className="font-medium">Salary:</span> {job.salary_range}</li>}
                  </ul>
                  <div className="mt-auto flex gap-3">
                    {job.contact_email && (
                      <a href={`mailto:${job.contact_email}`} className="text-sm bg-[#2C2E9F] text-white px-4 py-2 rounded hover:bg-[#1a1c6b] transition">
                        Apply
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">No current job listings</h2>
              <p className="text-lg text-gray-600 mb-6">We don't have active roles published right now. If you'd like to advertise or be notified of future roles, get in touch with us.</p>
              <a href="/contact" className="bg-[#2C2E9F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1c6b] transition-colors">Contact Us</a>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}