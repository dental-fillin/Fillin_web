"use client";
import { useEffect } from 'react';

export default function Modal({ open, onClose, title, children, size = 'lg' }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose?.(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const sizeCls = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-5xl'
  }[size] || 'max-w-4xl';

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
         <div className={`relative w-full ${sizeCls} mx-auto bg-white rounded-xl shadow-xl ring-1 ring-black/10 animate-in fade-in zoom-in duration-150`}>
           <div className="flex items-start justify-between gap-4 px-5 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <button onClick={onClose} className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <span className="sr-only">Close</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 6l8 8M6 14L14 6"/></svg>
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
