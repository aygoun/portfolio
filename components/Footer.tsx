export function Footer() {
  return (
    <footer className="border-t border-slate-200/60">
      <div className="container-default flex flex-col items-center justify-between gap-3 py-6 text-sm text-slate-600 md:flex-row">
        <p>© {new Date().getFullYear()} Armand Blin</p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/aygoun"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-slate-200/80 px-2.5 py-1.5 hover:bg-slate-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017a10.01 10.01 0 006.838 9.504c.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.467-1.11-1.467-.908-.62.069-.607.069-.607 1.004.071 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.563 9.563 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.027 2.748-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.481A10.01 10.01 0 0022 12.017C22 6.484 17.523 2 12 2z" />
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/armandblin/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-slate-200/80 px-2.5 py-1.5 hover:bg-slate-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.24 8.5h4.52V24H.24V8.5zM8.339 8.5H12.7v2.108h.061c.607-1.151 2.092-2.366 4.304-2.366 4.602 0 5.455 3.03 5.455 6.971V24h-4.52v-6.62c0-1.58-.028-3.616-2.205-3.616-2.206 0-2.542 1.722-2.542 3.505V24H8.339V8.5z" />
            </svg>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
