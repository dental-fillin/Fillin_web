'use client';

import { useState } from 'react';
import { JobOpeningSchema } from '@/lib/schema';
import Link from 'next/link';

export default function JobOpeningForm() {
  const [formData, setFormData] = useState({
    job_title: '',
    location: '',
    employment_type: '',
    duration: '',
    company_name: '',
    company_description: '',
    role_summary: '',
    responsibilities: '',
    requirements: '',
    nice_to_have: '',
    benefits: '',
    salary_range: '',
    contact_email: '',
    equal_opportunity_stmt: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    setIsSubmitting(true);

    const parsed = JobOpeningSchema.safeParse(formData);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors(fieldErrors);
      setStatus({ type: 'error', message: 'Please fix the highlighted fields.' });
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/jobopenings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Something went wrong');
      }

      setStatus({ type: 'success', message: 'Job opening saved successfully.' });
      setFormData({
        job_title: '',
        location: '',
        employment_type: '',
        duration: '',
        company_name: '',
        company_description: '',
        role_summary: '',
        responsibilities: '',
        requirements: '',
        nice_to_have: '',
        benefits: '',
        salary_range: '',
        contact_email: '',
        equal_opportunity_stmt: '',
      });
      setErrors({});
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fe = (name) =>
    Array.isArray(errors?.[name]) ? errors[name][0] : undefined;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-2xl mx-auto p-4 border rounded"
    >
      {/* Manage Jobs Button */}
      <div className="flex justify-end">
        <Link
          href="/admin/managejobs"
          className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800"
        >
          Manage Current Jobs
        </Link>
      </div>

      <h2 className="text-xl font-bold">Add Job Opening</h2>

      {Object.keys(formData).map((field) => {
        const isTextarea = [
          'company_description',
          'role_summary',
          'responsibilities',
          'requirements',
          'nice_to_have',
          'benefits',
          'equal_opportunity_stmt',
        ].includes(field);

        return (
          <div key={field} className="flex flex-col">
            <label className="font-semibold capitalize">
              {field.replace(/_/g, ' ')}
            </label>

            {isTextarea ? (
              <textarea
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className={`border p-2 rounded ${
                  fe(field) ? 'border-red-500' : ''
                }`}
                rows={3}
              />
            ) : (
              <input
                type={field === 'contact_email' ? 'email' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className={`border p-2 rounded ${
                  fe(field) ? 'border-red-500' : ''
                }`}
              />
            )}

            {fe(field) && (
              <span className="text-sm text-red-600 mt-1">{fe(field)}</span>
            )}
          </div>
        );
      })}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>

      {status.message && (
        <p
          className={`mt-2 ${
            status.type === 'error' ? 'text-red-600' : 'text-green-600'
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
