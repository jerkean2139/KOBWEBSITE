interface IconProps {
  className?: string;
  size?: number;
}

export function DIYIcon({ className = "", size = 64 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="8" y="24" width="48" height="20" rx="4" className="fill-current opacity-20" />
      <rect x="12" y="20" width="40" height="8" rx="2" className="fill-current opacity-30" />
      <circle cx="18" cy="44" r="6" className="fill-current opacity-40" />
      <circle cx="46" cy="44" r="6" className="fill-current opacity-40" />
      <circle cx="18" cy="44" r="3" className="fill-current opacity-60" />
      <circle cx="46" cy="44" r="3" className="fill-current opacity-60" />
      <rect x="14" y="22" width="8" height="6" rx="1" className="fill-current opacity-50" />
      <circle cx="20" cy="30" r="5" className="fill-primary" />
      <circle cx="20" cy="28" r="2" className="fill-primary" />
      <rect x="18" y="30" width="4" height="6" rx="1" className="fill-primary" />
      <circle cx="44" cy="32" r="3" className="fill-current opacity-30" />
      <circle cx="44" cy="31" r="1.5" className="fill-current opacity-30" />
      <text x="20" y="18" fontSize="8" fontWeight="bold" className="fill-primary" textAnchor="middle">YOU</text>
    </svg>
  );
}

export function DWYIcon({ className = "", size = 64 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="8" y="24" width="48" height="20" rx="4" className="fill-current opacity-20" />
      <rect x="12" y="20" width="40" height="8" rx="2" className="fill-current opacity-30" />
      <circle cx="18" cy="44" r="6" className="fill-current opacity-40" />
      <circle cx="46" cy="44" r="6" className="fill-current opacity-40" />
      <circle cx="18" cy="44" r="3" className="fill-current opacity-60" />
      <circle cx="46" cy="44" r="3" className="fill-current opacity-60" />
      <rect x="14" y="22" width="8" height="6" rx="1" className="fill-current opacity-50" />
      <circle cx="20" cy="30" r="5" className="fill-primary" />
      <circle cx="20" cy="28" r="2" className="fill-primary" />
      <rect x="18" y="30" width="4" height="6" rx="1" className="fill-primary" />
      <circle cx="36" cy="30" r="5" className="fill-[#FFD700]" />
      <circle cx="36" cy="28" r="2" className="fill-[#FFD700]" />
      <rect x="34" y="30" width="4" height="6" rx="1" className="fill-[#FFD700]" />
      <text x="20" y="18" fontSize="6" fontWeight="bold" className="fill-primary" textAnchor="middle">YOU</text>
      <text x="36" y="18" fontSize="6" fontWeight="bold" className="fill-[#FFD700]" textAnchor="middle">US</text>
    </svg>
  );
}

export function DFYIcon({ className = "", size = 64 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="8" y="24" width="48" height="20" rx="4" className="fill-current opacity-20" />
      <rect x="12" y="20" width="40" height="8" rx="2" className="fill-current opacity-30" />
      <circle cx="18" cy="44" r="6" className="fill-current opacity-40" />
      <circle cx="46" cy="44" r="6" className="fill-current opacity-40" />
      <circle cx="18" cy="44" r="3" className="fill-current opacity-60" />
      <circle cx="46" cy="44" r="3" className="fill-current opacity-60" />
      <rect x="14" y="22" width="8" height="6" rx="1" className="fill-current opacity-50" />
      <circle cx="20" cy="30" r="5" className="fill-[#FFD700]" />
      <circle cx="20" cy="28" r="2" className="fill-[#FFD700]" />
      <rect x="18" y="30" width="4" height="6" rx="1" className="fill-[#FFD700]" />
      <circle cx="36" cy="30" r="5" className="fill-primary" />
      <circle cx="36" cy="28" r="2" className="fill-primary" />
      <rect x="34" y="30" width="4" height="6" rx="1" className="fill-primary" />
      <text x="20" y="18" fontSize="6" fontWeight="bold" className="fill-[#FFD700]" textAnchor="middle">US</text>
      <text x="36" y="18" fontSize="6" fontWeight="bold" className="fill-primary" textAnchor="middle">YOU</text>
    </svg>
  );
}
