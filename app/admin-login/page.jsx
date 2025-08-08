'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr('');
    const res = await fetch('/api/admin-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      router.push('/admin');
    } else {
      const data = await res.json();
      setErr(data.error || 'Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-20 border shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <form onSubmit={onSubmit}>
        <input className="w-full border px-3 py-2 mb-4" placeholder="Username"
               value={username} onChange={e => setUsername(e.target.value)} />
        <input className="w-full border px-3 py-2 mb-4" type="password" placeholder="Password"
               value={password} onChange={e => setPassword(e.target.value)} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Login</button>
        {err && <p className="text-red-600 mt-3">{err}</p>}
      </form>
    </div>
  );
}
