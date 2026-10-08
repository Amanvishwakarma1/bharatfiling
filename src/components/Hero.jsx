import { ArrowRight, Briefcase, Building, CalendarClock, User } from 'lucide-react';
import Button from './ui/Button';
import HeroVisual from './HeroVisual';

const audiences = [
  { icon: User, className: 'bg-saffron-50 text-saffron-700' },
  { icon: Briefcase, className: 'bg-white text-ink-800' },
  { icon: Building, className: 'bg-leaf-50 text-leaf-700' },
];

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-28 pb-10 sm:pt-36 sm:pb-14 lg:pt-40 lg:pb-20">
      <HeroBackdrop />

      <div className="mx-auto grid max-w-7xl items-center gap-y-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-x-6">
        <div className="min-w-0 lg:col-span-7">
          <p
            className="rise inline-flex max-w-full items-center gap-2 rounded-full border border-ink-200/80 bg-white/80 p-1 pr-3.5 text-[13px] whitespace-nowrap shadow-[0_1px_2px_rgb(15_31_56/0.05)] backdrop-blur max-[359px]:gap-1.5 max-[359px]:pr-3 max-[359px]:text-xs min-[400px]:gap-3 min-[400px]:pr-4 min-[400px]:text-sm"
            style={{ '--d': '0ms' }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-2.5 py-1.5 text-[10px] leading-none font-semibold tracking-[0.14em] text-white uppercase max-[359px]:gap-1.5 max-[359px]:px-2 max-[359px]:text-[9px] max-[359px]:tracking-[0.12em] min-[400px]:px-3 min-[400px]:text-[11px] min-[400px]:tracking-[0.16em]">
              <span className="relative flex size-1.5" aria-hidden="true">
                <span className="absolute inset-0 animate-ping-soft rounded-full bg-saffron-400" />
                <span className="relative size-1.5 rounded-full bg-saffron-400" />
              </span>
              Coming Soon
            </span>
            <span className="font-semibold tracking-[-0.01em] text-ink-800">Compliance. Simplified.</span>
          </p>

          <h1
            id="hero-title"
            className="rise mt-7 text-[2.65rem] leading-[1.03] font-bold tracking-[-0.04em] text-balance text-ink-900 sm:mt-8 sm:text-6xl lg:text-[4.1rem] xl:text-[4.6rem]"
            style={{ '--d': '120ms' }}
          >
            Something Better for{' '}
            <span className="relative inline-block font-serif text-[1.1em] leading-none font-normal tracking-[-0.01em] italic">
              Bharat
              <svg
                viewBox="0 0 220 16"
                fill="none"
                className="absolute bottom-[-0.12em] left-[2%] w-[96%] text-saffron-500"
                aria-hidden="true"
              >
                <path
                  d="M3 11.5C48 4.5 120 2.5 217 7"
                  pathLength="1"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  className="draw"
                  style={{ '--d': '900ms' }}
                />
              </svg>
            </span>{' '}
            is Coming.
          </h1>

          <p
            className="rise mt-7 max-w-xl text-lg leading-relaxed text-pretty text-ink-600 sm:text-xl sm:leading-relaxed"
            style={{ '--d': '240ms' }}
          >
            Bharat Filing is building a simpler and more transparent way to manage tax filing, business compliance and
            professional CA services — all in one place.
          </p>

          <div className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ '--d': '360ms' }}>
            <Button href="#services" size="lg">
              Explore Services
              <ArrowRight className="size-4.5 transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true" />
            </Button>
            <Button href="#launch" variant="secondary" size="lg">
              <CalendarClock className="size-4.5 text-saffron-600" aria-hidden="true" />
              Launching Soon
            </Button>
          </div>

          <div className="rise mt-10 flex items-center gap-4" style={{ '--d': '480ms' }}>
            <div className="flex -space-x-2.5" aria-hidden="true">
              {audiences.map(({ icon: Icon, className }, index) => (
                <span
                  key={index}
                  className={`grid size-10 place-items-center rounded-full ring-1 ring-ink-200 outline-3 outline-paper ${className}`}
                >
                  <Icon className="size-4.5" strokeWidth={1.75} />
                </span>
              ))}
            </div>
            <p className="max-w-68 text-sm leading-snug text-ink-600">
              Built for individuals, entrepreneurs &amp; businesses across India.
            </p>
          </div>
        </div>

        <div className="-mx-2 sm:mx-0 lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="bg-dot-grid absolute inset-0 mask-[radial-gradient(ellipse_75%_65%_at_65%_35%,black_25%,transparent_75%)]" />
      <div
        className="drift absolute -top-48 right-[-12%] size-176 rounded-full bg-[radial-gradient(closest-side,rgb(242_129_27/0.14),transparent)]"
        style={{ '--dur': '26s' }}
      />
      <div
        className="drift absolute -bottom-56 -left-48 size-152 rounded-full bg-[radial-gradient(closest-side,rgb(20_151_92/0.09),transparent)]"
        style={{ '--dur': '32s' }}
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-paper" />
    </div>
  );
}
