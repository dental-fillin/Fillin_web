"use client";

export default function ContactDetail({ contact, onClose }) {
  if (!contact) return null;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4 text-sm">
        <Info label="Name" value={contact.name} />
        <Info label="Email" value={contact.email} />
        <Info label="Phone" value={contact.phone || '—'} />
        <Info label="Subject" value={contact.subject || '—'} />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-1">Message</h4>
        <p className="rounded-md border bg-gray-50 p-3 text-sm leading-relaxed whitespace-pre-wrap max-h-64 overflow-auto">{contact.message}</p>
      </div>
      <div className="text-xs text-gray-500">Received: {contact.created_at ? new Date(contact.created_at).toLocaleString() : '—'}</div>
      <div className="flex justify-end">
        <button onClick={onClose} className="rounded-md border px-4 py-2 text-xs font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">Close</button>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="space-y-1">
      <div className="text-[10px] uppercase tracking-wide text-gray-500 font-medium">{label}</div>
      <div className="text-gray-900 font-medium break-words">{value || '—'}</div>
    </div>
  );
}
