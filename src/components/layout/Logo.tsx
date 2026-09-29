// Logo : un éclair dans une prise murale, façon badge cartoon (contour encre + ombre plate)
export default function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      {/* Ombre plate */}
      <rect x="6" y="6" width="40" height="40" rx="10" fill="#1d1a16" />
      {/* Plaque de prise */}
      <rect x="2" y="2" width="40" height="40" rx="10" fill="#e2a728" stroke="#1d1a16" strokeWidth="3" />
      <circle cx="22" cy="22" r="14" fill="#fbf5e6" stroke="#1d1a16" strokeWidth="3" />
      {/* Éclair */}
      <path
        d="M 24.5 10.5 L 15.5 24 L 21.5 24 L 19.5 33.5 L 28.5 19.5 L 22.5 19.5 Z"
        fill="#c8452d"
        stroke="#1d1a16"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
