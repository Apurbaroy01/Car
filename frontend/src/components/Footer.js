export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-black py-8">
      <div className="mx-auto max-w-6xl px-6 text-sm text-slate-600 dark:text-slate-400">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-sm">© {new Date().getFullYear()} Car — All rights reserved.</p>
            <p className="text-xs text-slate-500 dark:text-slate-500">Built with care · Simple, elegant UI</p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <nav className="flex gap-4">
              <a href="#privacy" className="transition hover:text-slate-900 dark:hover:text-white">Privacy</a>
              <a href="#terms" className="transition hover:text-slate-900 dark:hover:text-white">Terms</a>
              <a href="#contact" className="transition hover:text-slate-900 dark:hover:text-white">Contact</a>
            </nav>

            <div className="flex gap-3">
              <a href="https://github.com" aria-label="GitHub" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.96 3.29 9.15 7.86 10.63.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.38-3.88-1.38-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.21 1.78 1.21 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 2.91-.39c.99.01 1.99.13 2.91.39 2.22-1.5 3.2-1.19 3.2-1.19.63 1.58.23 2.75.11 3.04.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.67.42.36.8 1.07.8 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56 4.55-1.48 7.83-5.67 7.83-10.63C23.25 5.48 18.27.5 12 .5z" />
                </svg>
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.36 8.57 8.57 0 0 1-2.71 1.04 4.26 4.26 0 0 0-7.28 3.88A12.09 12.09 0 0 1 3.15 4.9a4.26 4.26 0 0 0 1.32 5.69 4.2 4.2 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.18c-.45.12-.93.18-1.42.07a4.27 4.27 0 0 0 3.98 2.96A8.55 8.55 0 0 1 2 19.54a12.07 12.07 0 0 0 6.54 1.92c7.86 0 12.16-6.51 12.16-12.16 0-.19 0-.39-.01-.58A8.68 8.68 0 0 0 22.46 6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
