"use client";
import { useState } from 'react';
import { JobOpeningSchema } from '@/lib/schema';

export default function QuickJobForm({ onSuccess }) {
  const [data, setData] = useState({ job_title: '', company_name: '', employment_type: '', location: '', contact_email: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const change = (e) => { const { name, value } = e.target; setData(d => ({ ...d, [name]: value })); if (errors[name]) setErrors(p => { const n={...p}; delete n[name]; return n; }); };

  const submit = async (e) => {
    e.preventDefault(); setStatus(''); setLoading(true);
    const partial = { ...data };
    const parsed = JobOpeningSchema.pick({ job_title:true, company_name:true, employment_type:true, location:true, contact_email:true }).safeParse(partial);
    if (!parsed.success) {
      setErrors(parsed.error.flatten().fieldErrors); setStatus('error'); setLoading(false); return;
    }
    try {
      const res = await fetch('/api/jobopenings', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(parsed.data) });
      if (!res.ok) throw new Error('Failed');
      setStatus('success'); setData({ job_title:'', company_name:'', employment_type:'', location:'', contact_email:'' }); setErrors({}); onSuccess?.();
    } catch (e) { setStatus('error'); }
    finally { setLoading(false); }
  };

  const fe = f => Array.isArray(errors[f]) ? errors[f][0] : undefined;
  const input = (name, label, type='text', placeholder='') => (
    <div className="space-y-1">
      <label htmlFor={name} className="text-xs font-medium text-gray-600">{label}</label>
  <input id={name} name={name} type={type} value={data[name]} onChange={change} placeholder={placeholder} className={`w-full rounded-md border px-3 py-2 text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${fe(name)?'border-red-500':'border-gray-300'}`} />
      {fe(name) && <p className="text-xs text-red-600">{fe(name)}</p>}
    </div>
  );

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {input('job_title','Job Title')}
        {input('company_name','Company Name')}
        {input('employment_type','Employment Type','text','Full-time / Part-time / Contract')}
        {input('location','Location')}
        {input('contact_email','Contact Email','email')}
      </div>
      <div className="flex items-center justify-end gap-2 pt-2">
        <button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50">
          {loading && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"/>}
          {loading ? 'Saving…' : 'Save Job'}
        </button>
      </div>
      {status === 'success' && <p className="text-sm text-green-600">Job created.</p>}
      {status === 'error' && !Object.keys(errors).length && <p className="text-sm text-red-600">Failed to save job.</p>}
    </form>
  );
}
