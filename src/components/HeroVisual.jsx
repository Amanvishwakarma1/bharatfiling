import { Check, Clock3, FileText, IndianRupee, ReceiptIndianRupee, ShieldCheck } from 'lucide-react';

const checklist = [
  { label: 'Form 16 & salary details', done: true },
  { label: 'Deductions & investments', done: true },
  { label: 'Expert CA review', done: false },
];

/**
 * Decorative product-style composition: documents + compliance + digital finance.
 * Everything inside is sized in `em`, and the root font-size is a share of the
 * container width, so the whole piece scales as one unit at every breakpoint.
 */
export default function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[36rem] select-none [container-type:inline-size]">
      <div className="absolute inset-0 text-[2.5cqw] leading-normal">
        <Orbits />
        <div className="absolute inset-[16%] rounded-full bg-[radial-gradient(closest-side,rgb(255_255_255/0.95),transparent)]" />

        {/* Document stack */}
        <div className="pop absolute top-[22%] left-[20%] w-[24em]" style={{ '--d': '250ms' }}>
          <div className="absolute inset-0 translate-x-[0.9em] translate-y-[1.1em] rotate-[5deg] rounded-[1.4em] border border-ink-200/70 bg-white/70" />
          <div className="absolute inset-0 -translate-x-[0.5em] translate-y-[0.6em] -rotate-[2.5deg] rounded-[1.4em] border border-ink-200/80 bg-white/85" />

          <div className="relative rounded-[1.4em] border border-ink-200/80 bg-white p-[1.4em] shadow-[0_2.2em_4em_-1.6em_rgb(15_31_56/0.28),0_0.3em_0.8em_-0.2em_rgb(15_31_56/0.06)]">
            <div className="flex items-center gap-[0.8em]">
              <span className="grid size-[2.6em] shrink-0 place-items-center rounded-[0.75em] bg-ink-900 text-white">
                <FileText className="size-[1.25em]" strokeWidth={1.75} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[1.05em] leading-tight font-semibold tracking-[-0.01em] text-ink-900">
                  Income Tax Return
                </span>
                <span className="mt-[0.25em] block text-[0.78em] text-ink-500">FY 2026–27 · Individual</span>
              </span>
              <span className="rounded-full bg-saffron-50 px-[0.75em] py-[0.3em] text-[0.72em] font-semibold whitespace-nowrap text-saffron-700 ring-1 ring-saffron-200/80">
                In review
              </span>
            </div>

            <div className="my-[1.2em] h-px bg-ink-100" />

            <ul className="space-y-[0.85em]">
              {checklist.map(({ label, done }) => (
                <li key={label} className="flex items-center gap-[0.7em]">
                  <span
                    className={
                      done
                        ? 'grid size-[1.7em] shrink-0 place-items-center rounded-full bg-leaf-50 text-leaf-600 ring-1 ring-leaf-200'
                        : 'grid size-[1.7em] shrink-0 place-items-center rounded-full bg-saffron-50 text-saffron-600 ring-1 ring-saffron-200'
                    }
                  >
                    {done ? (
                      <Check className="size-[0.95em]" strokeWidth={3} />
                    ) : (
                      <Clock3 className="size-[0.95em]" strokeWidth={2.5} />
                    )}
                  </span>
                  <span className="flex-1 truncate text-[0.86em] font-medium text-ink-700">{label}</span>
                  <span className={done ? 'h-[0.45em] w-[2.6em] rounded-full bg-ink-100' : 'h-[0.45em] w-[2.6em] rounded-full bg-saffron-100'} />
                </li>
              ))}
            </ul>

            <div className="mt-[1.3em] rounded-[0.9em] bg-ink-50 p-[0.95em] ring-1 ring-ink-100">
              <div className="flex items-center justify-between text-[0.78em] font-medium">
                <span className="text-ink-600">Filing progress</span>
                <span className="font-semibold text-ink-900">75%</span>
              </div>
              <div className="mt-[0.6em] h-[0.45em] overflow-hidden rounded-full bg-ink-200/70">
                <div className="grow-x h-full w-3/4 rounded-full bg-leaf-500" style={{ '--d': '900ms' }} />
              </div>
            </div>
          </div>
        </div>

        {/* GST — top left */}
        <div className="float-chip absolute top-[11%] left-[1%]" style={{ '--d': '550ms', '--fd': '7s' }}>
          <div className="flex items-center gap-[0.7em] rounded-[1.1em] border border-ink-200/80 bg-white/95 p-[0.75em] pr-[1.2em] shadow-[var(--shadow-float)]">
            <span className="grid size-[2.4em] place-items-center rounded-[0.75em] bg-saffron-50 text-saffron-600 ring-1 ring-saffron-100">
              <ReceiptIndianRupee className="size-[1.2em]" strokeWidth={1.75} />
            </span>
            <span>
              <span className="block text-[0.86em] leading-tight font-semibold text-ink-900">GST Return</span>
              <span className="mt-[0.2em] block text-[0.72em] text-ink-500">GSTR-3B · Due in 6 days</span>
            </span>
          </div>
        </div>

        {/* Rupee coin — top right */}
        <div className="float-chip absolute top-[8%] right-[14%]" style={{ '--d': '700ms', '--fd': '8.5s' }}>
          <span className="grid size-[3.2em] place-items-center rounded-full border border-ink-200/80 bg-white text-ink-900 shadow-[var(--shadow-float)]">
            <span className="grid size-[2.3em] place-items-center rounded-full bg-ink-900 text-white">
              <IndianRupee className="size-[1.15em]" strokeWidth={2.25} />
            </span>
          </span>
        </div>

        {/* Security — right */}
        <div className="float-chip absolute top-[36%] right-[1%]" style={{ '--d': '850ms', '--fd': '6.5s' }}>
          <div className="flex items-center gap-[0.55em] rounded-full bg-ink-900 py-[0.55em] pr-[1em] pl-[0.6em] text-white shadow-[0_1.2em_2.4em_-1em_rgb(15_31_56/0.6)]">
            <span className="grid size-[1.7em] place-items-center rounded-full bg-white/10">
              <ShieldCheck className="size-[1em] text-leaf-400" strokeWidth={2.25} />
            </span>
            <span className="text-[0.78em] font-semibold whitespace-nowrap">Secure &amp; private</span>
          </div>
        </div>

        {/* Compliance health — bottom right */}
        <div className="float-chip absolute right-[4%] bottom-[9%]" style={{ '--d': '1000ms', '--fd': '7.5s' }}>
          <div className="flex items-center gap-[0.8em] rounded-[1.1em] border border-ink-200/80 bg-white/95 p-[0.8em] pr-[1.3em] shadow-[var(--shadow-float)]">
            <span className="relative grid size-[3.1em] place-items-center">
              <svg viewBox="0 0 36 36" className="absolute inset-0 size-full -rotate-90">
                <circle cx="18" cy="18" r="15.5" fill="none" className="stroke-ink-100" strokeWidth="3.5" />
                <circle
                  cx="18"
                  cy="18"
                  r="15.5"
                  fill="none"
                  className="ring-fill stroke-leaf-500"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  pathLength="100"
                  strokeDasharray="92 100"
                  style={{ '--d': '1300ms' }}
                />
              </svg>
              <span className="text-[0.8em] font-bold text-ink-900">92</span>
            </span>
            <span>
              <span className="block text-[0.72em] text-ink-500">Compliance health</span>
              <span className="mt-[0.15em] flex items-center gap-[0.35em] text-[0.9em] font-semibold text-ink-900">
                <span className="size-[0.5em] rounded-full bg-leaf-500" />
                On track
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Orbits() {
  return (
    <svg viewBox="0 0 400 400" fill="none" className="absolute inset-0 size-full overflow-visible">
      <circle cx="200" cy="200" r="197" className="stroke-ink-900/[0.09]" strokeDasharray="1 7" strokeLinecap="round" />
      <circle cx="200" cy="200" r="152" className="stroke-ink-900/[0.07]" />
      <circle cx="200" cy="200" r="104" className="stroke-ink-900/[0.05]" />

      <g className="orbit" style={{ '--dur': '70s' }}>
        <circle cx="200" cy="48" r="9" className="fill-saffron-500/15" />
        <circle cx="200" cy="48" r="4" className="fill-saffron-500" />
      </g>
      <g className="orbit orbit-reverse" style={{ '--dur': '95s' }}>
        <circle cx="3" cy="200" r="8" className="fill-leaf-500/15" />
        <circle cx="3" cy="200" r="3.5" className="fill-leaf-500" />
      </g>
      <g className="orbit" style={{ '--dur': '55s' }}>
        <circle cx="200" cy="304" r="3" className="fill-ink-900/40" />
      </g>
    </svg>
  );
}
