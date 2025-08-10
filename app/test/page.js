"use client"

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function TestPage() {
  const [selectedEmploymentType, setSelectedEmploymentType] = useState('All');
  
  // Sample job openings data based on the schema
  const jobOpenings = [
    {
      job_id: 1,
      job_title: 'Dental Assistant',
      location: 'Sydney, Australia',
      employment_type: 'Full-time',
      duration: 'Permanent',
      company_name: 'Fillin Dental Services',
      role_summary: 'Supporting dentists in providing high-quality care to patients.',
      requirements: ['Certificate III in Dental Assisting', 'Min. 2 years experience'],
      skills: ['Patient care', 'Sterilization', 'X-ray assistance', 'Record keeping'],
      salary_range: '$65k-$80k/year',
      contact_email: 'careers@fillindentalservices.com',
    },
    {
      job_id: 2,
      job_title: 'Dental Receptionist',
      location: 'Melbourne, Australia',
      employment_type: 'Part-time',
      duration: 'Permanent',
      company_name: 'Fillin Dental Services',
      role_summary: 'Managing front desk operations and patient scheduling for a busy dental practice.',
      requirements: ['Previous reception experience', 'Customer service skills'],
      skills: ['Appointment scheduling', 'Patient management', 'Communication', 'MS Office'],
      salary_range: '$50k-$60k/year pro rata',
      contact_email: 'careers@fillindentalservices.com',
    },
    {
      job_id: 3,
      job_title: 'Dental Hygienist',
      location: 'Brisbane, Australia',
      employment_type: 'Contract',
      duration: '6 months',
      company_name: 'Fillin Dental Services',
      role_summary: 'Providing preventative dental care and education to patients.',
      requirements: ['Dental Hygienist qualification', 'AHPRA registration'],
      skills: ['Teeth cleaning', 'Oral health assessment', 'Patient education', 'Preventative care'],
      salary_range: '$40-$50/hour',
      contact_email: 'careers@fillindentalservices.com',
    }
  ];
  
  const employmentTypes = ['All', 'Full-time', 'Part-time', 'Contract'];
  
  const filteredJobs = selectedEmploymentType === 'All' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.employment_type === selectedEmploymentType);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2C2E9F] to-[#1a1c6b] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Job Openings
            </h1>
            <p className="text-xl mb-6 text-gray-100 max-w-3xl mx-auto">
              Would you like to advertise your job vacancies with us?
              We can host your job openings on our website. Contact us for more information.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-xl font-semibold text-gray-800">Available Positions</h2>
            <div className="flex items-center gap-3">
              <label className="text-gray-700 font-medium mr-2">Filter by:</label>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                {employmentTypes.map(type => (
                  <button
                    key={type}
                    type="button"
                    className={`px-4 py-2 text-sm font-medium ${selectedEmploymentType === type 
                      ? 'bg-[#2C2E9F] text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'} 
                      ${type === 'All' ? 'rounded-l-lg' : ''} 
                      ${type === 'Contract' ? 'rounded-r-lg' : ''} 
                      border border-gray-300 focus:z-10 focus:ring-2 focus:ring-[#2C2E9F] focus:text-[#2C2E9F]`}
                    onClick={() => setSelectedEmploymentType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Cards Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700">No job openings match your filter criteria.</h3>
              <button 
                onClick={() => setSelectedEmploymentType('All')} 
                className="mt-4 text-[#2C2E9F] font-medium hover:underline"
              >
                View all jobs
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map(job => (
                <div key={job.job_id} className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-[#2C2E9F] flex flex-col h-full hover:shadow-lg transition-shadow">
                  {/* Job Header */}
                  <div className="p-5 border-b border-gray-200 bg-[#2C2E9F]/10">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.job_title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{job.company_name}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {job.location}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {job.employment_type}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        {job.duration}
                      </span>
                    </div>
                  </div>
                  
                  {/* Job Content */}
                  <div className="p-5 flex-grow">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">Role Summary</h4>
                      <p className="text-sm text-gray-700">{job.role_summary}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">Requirements</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                        {job.requirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">Skills & Qualifications</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                        {job.skills.map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Job Footer */}
                  <div className="bg-gray-50 p-5 border-t border-gray-200 mt-auto">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium text-gray-700">{job.salary_range}</p>
                      <a 
                        href={`mailto:${job.contact_email}?subject=Application for ${job.job_title}`}
                        className="bg-[#2C2E9F] text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-[#1a1c6b] transition-colors inline-block"
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}