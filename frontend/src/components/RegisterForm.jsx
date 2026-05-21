"use client";
import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full rounded-md bg-white/80 p-6 shadow-sm">
      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium text-slate-700">Full name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
          placeholder="Your name"
        />
      </div>

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
          placeholder="Choose a password"
        />
        <button type="button" onClick={() => setShow((s) => !s)} className="absolute right-2 top-9 text-sm text-slate-500">
          {show ? "Hide" : "Show"}
        </button>
      </div>

      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium text-slate-700">Confirm password</label>
        <input
          type={show ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
          placeholder="Repeat your password"
        />
      </div>

      {error && <p className="mb-3 text-sm text-red-600">{error}</p>}

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create account"}
        </button>
      </div>
    </form>
  );
}
