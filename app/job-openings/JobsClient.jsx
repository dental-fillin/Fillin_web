"use client";
import { useState, useMemo } from 'react';

/*
  JobsClient: Client component providing filtering & rendering styled job cards.
  Styling & structure adapted from app/test/page.js sample provided.
*/
export default function JobsClient({ jobs }) {
  const [selectedEmploymentType, setSelectedEmploymentType] = useState('All');

  // Normalize employment types from DB to Title Case used in UI buttons
  const normalizedJobs = useMemo(() => {
    return (jobs || []).map(j => ({
      ...j,
      employment_type_display: j.employment_type
        ? j.employment_type.charAt(0).toUpperCase() + j.employment_type.slice(1)
        : 'Other'
    }));
  }, [jobs]);

  const employmentTypes = useMemo(() => {
    const set = new Set(['All']);
    normalizedJobs.forEach(j => {
      if (j.employment_type_display) set.add(j.employment_type_display);
    });
    return Array.from(set);
  }, [normalizedJobs]);

  const filteredJobs = selectedEmploymentType === 'All'
    ? normalizedJobs
    : normalizedJobs.filter(j => j.employment_type_display === selectedEmploymentType);

  return (
    <>
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
                      ${type === employmentTypes[employmentTypes.length - 1] ? 'rounded-r-lg' : ''} 
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
      <section className="py-12 flex-1">
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
              {filteredJobs.map(job => {
                // Parse requirements & skills if stored as multiline strings
                const requirementsList = Array.isArray(job.requirements)
                  ? job.requirements
                  : (job.requirements || '').split(/\n|•|- /).map(s => s.trim()).filter(Boolean).slice(0,5);
                const skillsList = Array.isArray(job.nice_to_have)
                  ? job.nice_to_have
                  : (job.nice_to_have || '').split(/\n|•|- /).map(s => s.trim()).filter(Boolean).slice(0,5);

                return (
                  <div key={job.job_id} className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-[#2C2E9F] flex flex-col h-full hover:shadow-lg transition-shadow">
                    {/* Job Header */}
                    <div className="p-5 border-b border-gray-200 bg-[#2C2E9F]/10">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.job_title}</h3>
                      <p className="text-sm text-gray-500 mb-3">{job.company_name}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.location && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {job.location}
                          </span>
                        )}
                        {job.employment_type_display && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {job.employment_type_display}
                          </span>
                        )}
                        {job.duration && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            {job.duration}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Job Content */}
                    <div className="p-5 flex-grow">
                      {job.role_summary && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-900 mb-1">Role Summary</h4>
                          <p className="text-sm text-gray-700">{job.role_summary}</p>
                        </div>
                      )}

                      {requirementsList.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-900 mb-1">Requirements</h4>
                          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                            {requirementsList.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {skillsList.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-1">Skills & Qualifications</h4>
                          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                            {skillsList.map((skill, idx) => (
                              <li key={idx}>{skill}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Job Footer */}
                    <div className="bg-gray-50 p-5 border-t border-gray-200 mt-auto">
                      <div className="flex justify-between items-center">
                        {job.salary_range && (
                          <p className="text-sm font-medium text-gray-700">{job.salary_range}</p>
                        )}
                        {job.contact_email && (
                          <a
                            href={`mailto:${job.contact_email}?subject=Application for ${encodeURIComponent(job.job_title)}`}
                            className="bg-[#2C2E9F] text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-[#1a1c6b] transition-colors inline-block"
                          >
                            Apply
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
