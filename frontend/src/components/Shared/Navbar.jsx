"use client";
import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const user = false; // Replace with actual user state from context or props

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          CarRental
        </Link>

        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/" className="px-3 py-2 rounded-md transition hover:bg-slate-100 hover:text-slate-900">
            Home
          </Link>
          <Link href="#about" className="px-3 py-2 rounded-md transition hover:bg-slate-100 hover:text-slate-900">
            About
          </Link>
          <Link href="#services" className="px-3 py-2 rounded-md transition hover:bg-slate-100 hover:text-slate-900">
            Services
          </Link>
          <Link href="#contact" className="px-3 py-2 rounded-md transition hover:bg-slate-100 hover:text-slate-900">
            Contact
          </Link>
          <div className="ml-2 flex items-center gap-3">
            {!user ? (
              <>
                <Link href="/login" className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">
                  Sign in
                </Link>
                <Link href="/register" className="hidden rounded-md bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700 sm:inline-block">
                  Sign up
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-700">Hi, {user.name}</span>
                <button onClick={() => auth.logout()} className="rounded-md px-3 py-2 text-sm text-rose-600 hover:bg-rose-50">Logout</button>
              </div>
            )}
          </div>
        </nav>

        <div className="sm:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="sm:hidden border-t border-slate-200/80 bg-white/95">
          <div className="px-6 py-4 flex flex-col gap-2">
            <Link href="/" onClick={() => setOpen(false)} className="py-2 rounded-md text-slate-800 hover:bg-slate-100">
              Home
            </Link>
            <Link href="#about" onClick={() => setOpen(false)} className="py-2 rounded-md text-slate-800 hover:bg-slate-100">
              About
            </Link>
            <Link href="#services" onClick={() => setOpen(false)} className="py-2 rounded-md text-slate-800 hover:bg-slate-100">
              Services
            </Link>
            <Link href="#contact" onClick={() => setOpen(false)} className="py-2 rounded-md text-slate-800 hover:bg-slate-100">
              Contact
            </Link>
            {!user ? (
              <>
                <Link href="/login" onClick={() => setOpen(false)} className="py-2 rounded-md text-slate-800 hover:bg-slate-100">
                  Sign in
                </Link>
                <Link href="/register" onClick={() => setOpen(false)} className="py-2 rounded-md bg-sky-600 px-3 text-white hover:bg-sky-700">
                  Sign up
                </Link>
              </>
            ) : (
              <>
                <div className="py-2 text-slate-800">Signed in as <strong>{user.name}</strong></div>
                <button onClick={() => { setOpen(false); }} className="py-2 rounded-md text-rose-600 hover:bg-rose-50">Logout</button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
