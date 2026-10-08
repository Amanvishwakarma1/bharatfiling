import { cn } from '../../lib/cn';

export function LogoMark({ className }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="9" fill="#0f1f38" />
      <path
        d="M10.5 7h7.8l4.7 4.7v11.8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 9 23.5v-15A1.5 1.5 0 0 1 10.5 7Z"
        fill="#fff"
      />
      <path d="M18.3 7 23 11.7h-3.2a1.5 1.5 0 0 1-1.5-1.5Z" fill="#c5cdd9" />
      <rect x="11.6" y="15" width="7.8" height="2.2" rx="1.1" fill="#f2811b" />
      <rect x="11.6" y="19.4" width="5.2" height="2.2" rx="1.1" fill="#14975c" />
    </svg>
  );
}

export default function Logo({ className }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark className="size-8 shrink-0" />
      <span className="text-[17px] font-bold tracking-[-0.02em] whitespace-nowrap text-ink-900">Bharat Filing</span>
    </span>
  );
}
