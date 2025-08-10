'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Modal from './components/Modal';
import ContactDetail from './components/ContactDetail';
import QuickJobForm from './components/QuickJobForm';

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [nextCursor, setNextCursor] = useState(null);
  const [search, setSearch] = useState('');
  const [deletingId, setDeletingId] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showQuickJob, setShowQuickJob] = useState(false);

  const loadContacts = async (cursor) => {
    try {
      if (cursor) setLoadingMore(true); else setInitialLoading(true);
      const qp = new URLSearchParams({ limit: '25' });
      if (cursor) qp.set('cursor', cursor);
      const res = await fetch(`/api/contacts?${qp.toString()}`, { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to fetch contacts');
      const payload = await res.json();
      const items = Array.isArray(payload) ? payload : payload.items || [];
      setContacts(prev => cursor ? [...prev, ...items] : items);
      setNextCursor(!Array.isArray(payload) ? payload.nextCursor : null);
    } catch (e) {
      setError(e.message || 'Failed to fetch contacts');
    } finally {
      setInitialLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => { loadContacts(); }, []); // initial load

  const handleDelete = async (id) => {
    if (!confirm('Delete this contact message?')) return;
    setDeletingId(id);
    try {
      const res = await fetch('/api/contacts', { method:'DELETE', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ id }) });
      if (!res.ok) throw new Error('Delete failed');
      setContacts(prev => prev.filter(c => c.id !== id));
    } catch (e) { alert(e.message || 'Failed to delete'); }
    finally { setDeletingId(null); }
  };

  const handleLogout = async () => {
    await fetch('/api/admin-logout', { method:'POST' });
    window.location.href = '/admin-login';
  };

  const filtered = useMemo(() => {
    if (!search.trim()) return contacts;
    const q = search.toLowerCase();
    return contacts.filter(c => [c.name, c.email, c.phone, c.subject, c.message].filter(Boolean).some(v => String(v).toLowerCase().includes(q)));
  }, [contacts, search]);
  return (
    <div className="min-h-screen bg-light-gray/70 py-8">
      <div className="mx-auto w-full max-w-7xl px-4 space-y-8">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-primary-blue">Admin Dashboard</h1>
            <p className="text-sm text-gray-600">Manage contact form submissions</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setShowQuickJob(true)}
              className="inline-flex items-center gap-1 rounded-md bg-primary-blue px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
            >
              Quick Add Job
            </button>
            <Link
              href="/admin/jobopenings"
              className="inline-flex items-center gap-1 rounded-md bg-primary-blue/90 px-4 py-2 text-sm font-medium text-white shadow hover:bg-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
            >
              Manage Job Openings
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
            >
              Logout
            </button>
          </div>
        </header>

        <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <label htmlFor="contact-search" className="sr-only">Search contacts</label>
            <input
              id="contact-search"
              type="text"
              placeholder="Search contacts…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-72 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/40"
            />
            <button
              onClick={() => loadContacts()}
              disabled={initialLoading}
              className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-blue/40 disabled:cursor-not-allowed"
            >
              {initialLoading ? 'Refreshing…' : 'Refresh'}
            </button>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>Showing {filtered.length} of {contacts.length} loaded</span>
            {nextCursor && <span className="rounded-full bg-white px-2 py-0.5 shadow-sm">More available</span>}
          </div>
        </section>

        {error && (
          <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700 shadow-sm" role="alert">
            {error}
          </div>
        )}

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-[11px] uppercase tracking-wide text-gray-600">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Name</th>
                  <th className="px-4 py-3 text-left font-semibold">Email</th>
                  <th className="px-4 py-3 text-left font-semibold">Phone</th>
                  <th className="px-4 py-3 text-left font-semibold">Subject</th>
                  <th className="px-4 py-3 text-left font-semibold">Message</th>
                  <th className="px-4 py-3 text-left font-semibold">Date</th>
                  <th className="px-4 py-3 text-left font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {initialLoading && !contacts.length && (
                  [...Array(6)].map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td className="px-4 py-3"><div className="h-4 w-24 rounded bg-gray-200" /></td>
                      <td className="px-4 py-3"><div className="h-4 w-32 rounded bg-gray-200" /></td>
                      <td className="px-4 py-3"><div className="h-4 w-20 rounded bg-gray-200" /></td>
                      <td className="px-4 py-3"><div className="h-4 w-28 rounded bg-gray-200" /></td>
                      <td className="px-4 py-3"><div className="h-4 w-40 rounded bg-gray-200" /></td>
                      <td className="px-4 py-3"><div className="h-4 w-32 rounded bg-gray-200" /></td>
                      <td className="px-4 py-3"><div className="h-4 w-10 rounded bg-gray-200" /></td>
                    </tr>
                  ))
                )}
                {!initialLoading && filtered.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-4 py-10 text-center text-gray-500">
                      {search ? 'No matches for your search.' : 'No contacts found.'}
                    </td>
                  </tr>
                )}
                {filtered.map((contact) => (
                  <tr key={contact.id} className="transition-colors hover:bg-primary-blue/5 cursor-pointer" onClick={() => setSelectedContact(contact)}>
                    <td className="px-4 py-3 font-medium text-gray-900">{contact.name || '—'}</td>
                    <td className="px-4 py-3 text-primary-blue underline-offset-2 hover:underline">{contact.email || '—'}</td>
                    <td className="px-4 py-3">{contact.phone || '—'}</td>
                    <td className="px-4 py-3">{contact.subject || '—'}</td>
                    <td className="px-4 py-3 max-w-xs align-top">
                      <div className="max-h-12 overflow-hidden break-words text-gray-700" title={contact.message || ''}>
                        {contact.message || '—'}
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap" title={contact.created_at ? new Date(contact.created_at).toLocaleString() : ''}>
                      {contact.created_at ? new Date(contact.created_at).toLocaleDateString() : '—'}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={(e) => { e.stopPropagation(); handleDelete(contact.id); }}
                        disabled={deletingId === contact.id}
                        className="text-red-600 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-600/40 rounded disabled:opacity-50"
                      >
                        {deletingId === contact.id ? 'Deleting…' : 'Delete'}
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
              onClick={() => loadContacts(nextCursor)}
              disabled={loadingMore}
              className="rounded-md bg-primary-blue px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loadingMore ? 'Loading…' : 'Load More'}
            </button>
          )}
          {!initialLoading && !loadingMore && (
            <span className="text-xs text-gray-500">{contacts.length} loaded</span>
          )}
        </div>
        <Modal open={!!selectedContact} onClose={() => setSelectedContact(null)} title="Contact Details" size="md">
          <ContactDetail contact={selectedContact} onClose={() => setSelectedContact(null)} />
        </Modal>
        <Modal open={showQuickJob} onClose={() => setShowQuickJob(false)} title="Quick Add Job" size="lg">
          <QuickJobForm onSuccess={() => { setShowQuickJob(false); }} />
        </Modal>
      </div>
    </div>
  );
}
