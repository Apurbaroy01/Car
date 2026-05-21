"use client";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  return (
    <form onSubmit={handleSubmit} className="w-full rounded-md bg-white/80 p-6 shadow-sm">
      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
          placeholder="you@example.com"
        />
      </div>

      <div className="mb-4 relative">
        <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
        <input
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
          placeholder="Enter your password"
        />
        <button type="button" onClick={() => setShow((s) => !s)} className="absolute right-2 top-9 text-sm text-slate-500">
          {show ? "Hide" : "Show"}
        </button>
      </div>

      {error && <p className="mb-3 text-sm text-red-600">{error}</p>}

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
        <a href="#" className="text-sm text-slate-600 hover:underline">
          Forgot?
        </a>
      </div>
    </form>
  );
}
