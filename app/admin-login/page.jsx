"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setErr("Username and password are required");
      return;
    }
    setErr("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (res.ok) {
        router.push("/admin");
      } else {
        const data = await res.json().catch(() => ({}));
        setErr(data.error || "Login failed");
      }
    } catch (e) {
      setErr("Network error – please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-slate-50">
      <div className="mx-auto w-full max-w-md px-6 py-12 md:py-20">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 shadow-lg ring-4 ring-indigo-100">
            <svg
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12c2.21 0 4-1.79 4-4m0 0a4 4 0 10-8 0m8 0v2a8 8 0 11-16 0v-2a2 2 0 012-2h1"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Admin Access
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Secure area – authorised personnel only.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200/70 bg-white/80 backdrop-blur shadow-xl shadow-indigo-100/40">
          <form onSubmit={onSubmit} className="space-y-6 p-8">
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="text-xs font-medium text-indigo-600 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 rounded px-2 py-1"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 pr-12 text-sm shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2h-3.34a4 4 0 01-7.32 0H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {err && (
              <div
                className="rounded-md border border-red-300 bg-red-50 px-4 py-2 text-sm text-red-700"
                role="alert"
              >
                {err}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              )}
              {loading ? "Signing In…" : "Sign In"}
            </button>
            <p className="text-center text-[11px] text-gray-500">
              Repeated failed attempts are monitored.
            </p>
          </form>
        </div>
        <p className="mt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Fillin – Admin Portal
        </p>
      </div>
    </main>
  );
}
