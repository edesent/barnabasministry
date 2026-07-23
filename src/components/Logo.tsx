// Barnabas Ministry of Michigan — heraldic shield emblem.
// Navy field · gold border · revival-red cross · open Bible · descending dove.
// A clean, hand-drawn mark (not a photo), so it stays crisp at any size.

export default function Logo({
  className = "",
  title = "Barnabas Ministry of Michigan emblem",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 96 112"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bm-field" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#26406a" />
          <stop offset="1" stopColor="#101f39" />
        </linearGradient>
      </defs>
      {/* shield */}
      <path
        d="M10 6 H86 a4 4 0 0 1 4 4 V54 C90 78 72 97 48 108 C24 97 6 78 6 54 V10 a4 4 0 0 1 4-4 Z"
        fill="url(#bm-field)"
        stroke="#d9b874"
        strokeWidth="3"
      />
      <path
        d="M13 11 H83 a1 1 0 0 1 1 1 V54 C84 75 68 92 48 102 C28 92 12 75 12 54 V12 a1 1 0 0 1 1-1 Z"
        fill="none"
        stroke="#bd9648"
        strokeWidth="1"
        opacity="0.7"
      />
      {/* cross */}
      <g fill="#ba3a2e" stroke="#9e2b25" strokeWidth="0.75">
        <rect x="43" y="17" width="10" height="50" rx="1.5" />
        <rect x="31" y="30" width="34" height="10" rx="1.5" />
      </g>
      {/* open book */}
      <g>
        <path
          d="M48 72 C40 67 26 66 17 68 V88 C26 86 40 87 48 92 Z"
          fill="#faf5ea"
          stroke="#bd9648"
          strokeWidth="1.1"
        />
        <path
          d="M48 72 C56 67 70 66 79 68 V88 C70 86 56 87 48 92 Z"
          fill="#f3ead6"
          stroke="#bd9648"
          strokeWidth="1.1"
        />
        <g stroke="#c9b79a" strokeWidth="0.7" opacity="0.8">
          <path d="M22 73 C30 72 40 73 45 76" />
          <path d="M22 78 C30 77 40 78 45 81" />
          <path d="M74 73 C66 72 56 73 51 76" />
          <path d="M74 78 C66 77 56 78 51 81" />
        </g>
        <line x1="48" y1="72" x2="48" y2="92" stroke="#bd9648" strokeWidth="1.4" />
      </g>
      {/* dove (descending, wings up) */}
      <g fill="#ffffff" opacity="0.97">
        <path d="M40 63 C43 61 47 60 51 61 C54 61.5 56 63 56.5 65 C57 66.5 56 67.5 54.5 67 C52 66 49 65.5 46 66 C43 66.5 41 65.5 40 63 Z" />
        <circle cx="40.4" cy="62.6" r="1.9" />
        <path d="M46 62 C44 57 44 53 47 50 C46.5 54 47.5 58 50 61 Z" />
        <path d="M50 61 C52 57 55 55 58 55 C55 57 53 60 51.5 63 Z" />
      </g>
    </svg>
  );
}
