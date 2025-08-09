'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ManageJobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/jobopenings', { cache: 'no-store' });
      if (!res.ok) {
        const e = await res.json().catch(() => ({}));
        throw new Error(e.error || `Failed to fetch job openings`);
      }
      const data = await res.json();
      setJobs(data || []);
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleDelete = async (job_id) => {
    if (!confirm('Delete this job opening?')) return;
    try {
      const res = await fetch('/api/jobopenings', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ job_id }),
      });
      if (!res.ok) {
        const e = await res.json().catch(() => ({}));
        throw new Error(e.error || 'Delete failed');
      }
      // Optimistically remove from UI
      setJobs((prev) => prev.filter((j) => j.job_id !== job_id));
    } catch (e) {
      alert(e.message);
    }
  };

  if (loading) return <div className="p-4">Loading…</div>;
  if (err) return <div className="p-4 text-red-600">Error: {err}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Manage Job Openings</h1>
        <div className="flex gap-2">
          <Link
            href="/admin/jobopenings"
            className="bg-gray-700 text-white px-3 py-2 rounded hover:bg-gray-800"
          >
            Add New Job
          </Link>
          <Link
            href="/admin"
            className="border px-3 py-2 rounded hover:bg-gray-50"
          >
            Back to Admin
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 border-b text-left">Title</th>
              <th className="px-4 py-3 border-b text-left">Company</th>
              <th className="px-4 py-3 border-b text-left">Type</th>
              <th className="px-4 py-3 border-b text-left">Location</th>
              <th className="px-4 py-3 border-b text-left">Created</th>
              <th className="px-4 py-3 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.job_id} className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b">{job.job_title || '—'}</td>
                <td className="px-4 py-3 border-b">{job.company_name || '—'}</td>
                <td className="px-4 py-3 border-b">{job.employment_type || '—'}</td>
                <td className="px-4 py-3 border-b">{job.location || '—'}</td>
                <td className="px-4 py-3 border-b">
                  {job.created_at ? new Date(job.created_at).toLocaleString() : '—'}
                </td>
                <td className="px-4 py-3 border-b">
                  <button
                    onClick={() => handleDelete(job.job_id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {jobs.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                  No job openings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
