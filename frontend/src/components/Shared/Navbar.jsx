"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const user = false;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          <span className="bg-linear-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
            CarRental
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-2 md:flex">
          {["Home", "About","Car", "Posts", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-sky-600"
            >
              {item}
            </Link>
          ))}

          <div className="ml-4 flex items-center gap-3">
            {!user ? (
              <>
                <Link
                  href="/login"
                  className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-500 hover:text-sky-600"
                >
                  Sign In
                </Link>

                <Link
                  href="/register"
                  className="rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-sky-700 hover:shadow-lg"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 text-sm font-semibold text-white">
                    A
                  </div>

                  <span className="text-sm font-medium text-slate-700">
                    {user.name}
                  </span>
                </div>

                <button className="rounded-full border border-rose-200 px-4 py-2 text-sm font-medium text-rose-600 transition hover:bg-rose-50">
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="space-y-2 px-6 py-5">
            {["Home", "About", "Posts", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-sky-600"
              >
                {item}
              </Link>
            ))}

            <div className="mt-4 flex flex-col gap-3">
              {!user ? (
                <>
                  <Link
                    href="/login"
                    className="rounded-lg border border-slate-300 px-4 py-3 text-center text-sm font-medium text-slate-700 transition hover:border-sky-500 hover:text-sky-600"
                  >
                    Sign In
                  </Link>

                  <Link
                    href="/register"
                    className="rounded-lg bg-sky-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-sky-700"
                  >
                    Get Started
                  </Link>
                </>
              ) : (
                <>
                  <div className="rounded-lg bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700">
                    Signed in as <strong>{user.name}</strong>
                  </div>

                  <button className="rounded-lg border border-rose-200 px-4 py-3 text-sm font-medium text-rose-600 transition hover:bg-rose-50">
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}