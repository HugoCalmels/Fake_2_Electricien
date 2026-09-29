// Logo : un éclair dans une prise murale
export default function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      {/* Plaque de prise */}
      <rect x="3" y="3" width="42" height="42" rx="8" fill="#2c4f78" stroke="#1d1a16" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="15" fill="#fbf5e6" stroke="#1d1a16" strokeWidth="2.5" />
      {/* Éclair */}
      <path
        d="M 26.5 12 L 17.5 25.5 L 23.5 25.5 L 21.5 35 L 30.5 21 L 24.5 21 Z"
        fill="#c8452d"
        stroke="#1d1a16"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
