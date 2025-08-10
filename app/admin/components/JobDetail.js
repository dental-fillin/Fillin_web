"use client";

export default function JobDetail({ job, onClose }) {
  if (!job) return null;

  const sections = [
    {
      title: 'Basic Information',
      items: [
        ['Job Title', job.job_title],
        ['Employment Type', job.employment_type || '—'],
        ['Location', job.location || '—'],
        ['Duration', job.duration || '—'],
      ],
    },
    {
      title: 'Company',
      items: [
        ['Company Name', job.company_name],
        ['Company Description', job.company_description || '—'],
      ],
    },
    {
      title: 'Role Overview',
      items: [
        ['Role Summary', job.role_summary || '—'],
        ['Responsibilities', job.responsibilities || '—'],
      ],
    },
    {
      title: 'Candidate Profile',
      items: [
        ['Requirements', job.requirements || '—'],
        ['Nice To Have', job.nice_to_have || '—'],
      ],
    },
    {
      title: 'Compensation & Contact',
      items: [
        ['Benefits', job.benefits || '—'],
        ['Salary Range', job.salary_range || '—'],
        ['Contact Email', job.contact_email || '—'],
      ],
    },
    {
      title: 'Statements',
      items: [
        ['Equal Opportunity Statement', job.equal_opportunity_stmt || '—'],
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 max-h-[65vh] overflow-y-auto pr-1">
        {sections.map(sec => (
          <Section key={sec.title} title={sec.title} items={sec.items} />
        ))}
      </div>
      <div className="flex justify-between items-center text-xs text-gray-500">
        <span>Created: {job.created_at ? new Date(job.created_at).toLocaleString() : '—'}</span>
        <button onClick={onClose} className="rounded-md border px-4 py-2 text-xs font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">Close</button>
      </div>
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="border-b px-4 py-2.5 bg-indigo-50/60 flex items-center justify-between">
        <h3 className="text-xs font-semibold tracking-wide text-indigo-800 uppercase">{title}</h3>
      </div>
      <div className="divide-y divide-gray-100">
        {items.map(([label, value]) => (
          <div key={label} className="p-4 text-sm">
            <div className="text-[11px] font-medium uppercase tracking-wide text-gray-500 mb-1">{label}</div>
            <div className="whitespace-pre-wrap leading-relaxed text-gray-800">{value || '—'}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
