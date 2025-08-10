'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import Modal from '../components/Modal';
import QuickJobForm from '../components/QuickJobForm';
import JobDetail from '../components/JobDetail';

export default function ManageJobsPage() {
  const [jobs, setJobs] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [nextCursor, setNextCursor] = useState(null);
  const [search, setSearch] = useState('');
  const [deletingId, setDeletingId] = useState(null);

  const loadJobs = async (cursor) => {
    try {
      if (cursor) setLoadingMore(true); else setInitialLoading(true);
      const qp = new URLSearchParams({ limit: '25' });
      if (cursor) qp.set('cursor', cursor);
      const res = await fetch(`/api/jobopenings?${qp.toString()}`, { cache: 'no-store' });
      if (!res.ok) {
        const e = await res.json().catch(() => ({}));
        throw new Error(e.error || 'Failed to fetch job openings');
      }
      const payload = await res.json();
      const items = Array.isArray(payload) ? payload : payload.items || [];
      setJobs((prev) => (cursor ? [...prev, ...items] : items));
      setNextCursor(!Array.isArray(payload) ? payload.nextCursor : null);
    } catch (e) {
      setError(e.message || 'Failed to load jobs');
    } finally {
      setInitialLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    loadJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async (job_id) => {
    if (!confirm('Delete this job opening?')) return;
    setDeletingId(job_id);
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
      setJobs((prev) => prev.filter((j) => j.job_id !== job_id));
    } catch (e) {
      alert(e.message || 'Failed to delete');
    } finally {
      setDeletingId(null);
    }
  };

  const filtered = useMemo(() => {
    if (!search.trim()) return jobs;
    const q = search.toLowerCase();
    return jobs.filter((j) => [j.job_title, j.company_name, j.employment_type, j.location]
      .filter(Boolean)
      .some((v) => String(v).toLowerCase().includes(q)));
  }, [jobs, search]);

  const [showQuickJob, setShowQuickJob] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="container mx-auto p-4 space-y-6">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Manage Job Openings</h1>
          <p className="text-sm text-gray-600">Create, search & remove job entries</p>
        </div>
        <div className="flex gap-2 self-start md:self-auto">
          <button
            onClick={() => setShowQuickJob(true)}
            className="inline-flex items-center gap-1 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Quick Add Job
          </button>
          <Link
            href="/admin/jobopenings"
            className="inline-flex items-center gap-1 rounded-md bg-indigo-700 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
          >
            Add New Job
          </Link>
          <Link
            href="/admin"
            className="inline-flex items-center gap-1 rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Back to Admin
          </Link>
        </div>
      </header>

      <section className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search jobs…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-72 rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            aria-label="Search jobs"
          />
          <button
            onClick={() => loadJobs()}
            disabled={initialLoading}
            className="rounded border px-3 py-2 text-sm hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {initialLoading ? 'Refreshing…' : 'Refresh'}
          </button>
        </div>
        <div className="text-xs text-gray-500">Showing {filtered.length} of {jobs.length} loaded jobs</div>
      </section>

      {error && (
        <div className="rounded border border-red-300 bg-red-50 p-3 text-sm text-red-700">{error}</div>
      )}

      <div className="overflow-auto rounded border border-gray-200 shadow-sm">
        <table className="min-w-full text-sm">
          <thead className="sticky top-0 bg-gray-100 text-xs uppercase tracking-wide text-gray-600">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Title</th>
              <th className="px-4 py-3 text-left font-semibold">Company</th>
              <th className="px-4 py-3 text-left font-semibold">Type</th>
              <th className="px-4 py-3 text-left font-semibold">Location</th>
              <th className="px-4 py-3 text-left font-semibold">Created</th>
              <th className="px-4 py-3 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {initialLoading && !jobs.length && (
              [...Array(6)].map((_, i) => (
                <tr key={i} className="animate-pulse">
                  <td className="px-4 py-3"><div className="h-4 w-40 rounded bg-gray-200" /></td>
                  <td className="px-4 py-3"><div className="h-4 w-32 rounded bg-gray-200" /></td>
                  <td className="px-4 py-3"><div className="h-4 w-20 rounded bg-gray-200" /></td>
                  <td className="px-4 py-3"><div className="h-4 w-24 rounded bg-gray-200" /></td>
                  <td className="px-4 py-3"><div className="h-4 w-28 rounded bg-gray-200" /></td>
                  <td className="px-4 py-3"><div className="h-4 w-10 rounded bg-gray-200" /></td>
                </tr>
              ))
            )}
            {!initialLoading && filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-gray-500">
                  {search ? 'No job matches your search.' : 'No job openings found.'}
                </td>
              </tr>
            )}
            {filtered.map((job) => (
              <tr key={job.job_id} className="hover:bg-indigo-50/40 cursor-pointer" onClick={() => setSelectedJob(job)}>
                <td className="px-4 py-3 font-medium text-gray-900">{job.job_title || '—'}</td>
                <td className="px-4 py-3">{job.company_name || '—'}</td>
                <td className="px-4 py-3">{job.employment_type || '—'}</td>
                <td className="px-4 py-3">{job.location || '—'}</td>
                <td className="px-4 py-3 whitespace-nowrap" title={job.created_at ? new Date(job.created_at).toLocaleString() : ''}>{job.created_at ? new Date(job.created_at).toLocaleDateString() : '—'}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDelete(job.job_id); }}
                    disabled={deletingId === job.job_id}
                    className="text-red-600 hover:text-red-800 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {deletingId === job.job_id ? 'Deleting…' : 'Delete'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-4">
        {nextCursor && (
          <button
            onClick={() => loadJobs(nextCursor)}
            disabled={loadingMore}
            className="rounded bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loadingMore ? 'Loading…' : 'Load More'}
          </button>
        )}
        {!initialLoading && !loadingMore && (
          <span className="text-xs text-gray-500">{jobs.length} loaded</span>
        )}
      </div>
      <Modal open={showQuickJob} onClose={() => setShowQuickJob(false)} title="Quick Add Job" size="lg">
        <QuickJobForm onSuccess={() => { setShowQuickJob(false); loadJobs(); }} />
      </Modal>
      <Modal open={!!selectedJob} onClose={() => setSelectedJob(null)} title={selectedJob ? selectedJob.job_title : 'Job Details'} size="xl">
        <JobDetail job={selectedJob} onClose={() => setSelectedJob(null)} />
      </Modal>
    </div>
  );
}
