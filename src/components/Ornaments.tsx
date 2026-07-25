// Small vintage print ornaments used throughout the broadside.

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 0l2.2 7.4L22 8l-6 4.6L18.2 24 12 19.2 5.8 24 8 12.6 2 8l7.8-.6z" />
    </svg>
  );
}

export function Anchor({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="4" r="1.7" />
      <path d="M12 5.7V21" />
      <path d="M8.5 9.5h7" />
      <path d="M4 13.5c0 4 3.6 6.6 8 6.6s8-2.6 8-6.6" />
      <path d="M4 13.5l2.4 1M20 13.5l-2.4 1" />
    </svg>
  );
}

export function Diamond({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true" fill="currentColor">
      <path d="M8 0l8 8-8 8-8-8z" />
    </svg>
  );
}

// A centered ornamental divider: rule — diamond — rule
export function StarDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`rule-diamond ${className}`} aria-hidden="true">
      <Diamond className="w-2.5 h-2.5" />
    </div>
  );
}

// A little "pointing hand" — a classic playbill manicule.
export function Manicule({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M2 11h11V7c0-1.1.9-2 2-2s2 .9 2 2v-.5c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8V6c0-1 .8-1.7 1.7-1.7S26 5.1 26 6.1v1c.6-.3 1.4-.2 1.9.3.8.8.8 2 .3 3l-2.1 4.3c-1 2-3 3.3-5.3 3.3H12c-1 0-2-.4-2.7-1.1L2 13.5z" />
    </svg>
  );
}
