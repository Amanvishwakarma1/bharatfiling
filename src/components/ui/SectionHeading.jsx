import { cn } from '../../lib/cn';

export function Eyebrow({ children, tone = 'dark', className }) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2.5 text-[13px] font-semibold tracking-[0.16em] uppercase',
        tone === 'dark' ? 'text-saffron-700' : 'text-saffron-300',
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-6 bg-current opacity-70" />
      {children}
    </p>
  );
}

export default function SectionHeading({ id, eyebrow, title, description, align = 'left', className }) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="mt-5 text-[2rem] leading-[1.1] font-bold tracking-[-0.03em] text-balance text-ink-900 sm:text-5xl sm:leading-[1.06]"
      >
        {title}
      </h2>
      {description && <p className="mt-5 text-lg leading-relaxed text-pretty text-ink-600">{description}</p>}
    </div>
  );
}
