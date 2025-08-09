'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/contacts');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setContacts(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch contacts');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch('/api/contacts', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) throw new Error('Delete failed');
      setContacts((prev) => prev.filter((contact) => contact.id !== id));
    } catch (err) {
      console.error(err);
      setError('Failed to delete contact');
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin-logout', { method: 'POST' });
    window.location.href = '/admin-login';
  };

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard - Contact Forms</h1>
        <div className="flex gap-2">
          {/* Manage Job Openings Button */}
          <Link
            href="/admin/jobopenings"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Manage Job Openings
          </Link>
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 border-b text-left">Name</th>
              <th className="px-6 py-3 border-b text-left">Email</th>
              <th className="px-6 py-3 border-b text-left">Phone</th>
              <th className="px-6 py-3 border-b text-left">Subject</th>
              <th className="px-6 py-3 border-b text-left">Message</th>
              <th className="px-6 py-3 border-b text-left">Date</th>
              <th className="px-6 py-3 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b">{contact.name || '—'}</td>
                <td className="px-6 py-4 border-b">{contact.email || '—'}</td>
                <td className="px-6 py-4 border-b">{contact.phone || '—'}</td>
                <td className="px-6 py-4 border-b">{contact.subject || '—'}</td>
                <td className="px-6 py-4 border-b">{contact.message || '—'}</td>
                <td className="px-6 py-4 border-b">
                  {contact.created_at
                    ? new Date(contact.created_at).toLocaleString()
                    : 'N/A'}
                </td>
                <td className="px-6 py-4 border-b">
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {contacts.length === 0 && (
              <tr>
                <td
                  className="px-6 py-6 text-center text-gray-500"
                  colSpan={7}
                >
                  No contacts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
