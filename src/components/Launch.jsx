import { ArrowRight, Mail } from 'lucide-react';
import { site } from '../config/site';
import { cn } from '../lib/cn';
import Button from './ui/Button';
import Reveal from './ui/Reveal';
import { Eyebrow } from './ui/SectionHeading';

const milestones = [
  {
    title: 'Platform development',
    status: 'In progress',
    description: 'Building secure, guided workflows for filing, registrations and expert reviews.',
    current: true,
  },
  {
    title: 'Final testing',
    status: 'Up next',
    description: 'Reviewing every workflow for accuracy, security and ease of use before release.',
  },
  {
    title: 'Public launch',
    status: 'Coming soon',
    description: 'Bharat Filing opens to individuals, entrepreneurs and businesses across India.',
  },
];

export default function Launch() {
  return (
    <section id="launch" aria-labelledby="launch-title" className="px-3 py-20 sm:px-5 sm:py-28">
      <Reveal className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink-950 px-6 py-16 text-white sm:rounded-[2.5rem] sm:px-12 sm:py-20 lg:px-16 lg:py-24">
        <LaunchBackdrop />

        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Eyebrow tone="light">Launch update</Eyebrow>
            <h2
              id="launch-title"
              className="mt-6 text-[2.5rem] leading-[1.04] font-bold tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.25rem]"
            >
              We&apos;re getting ready to{' '}
              <span className="font-serif text-[1.08em] font-normal tracking-[-0.01em] text-saffron-300 italic">launch.</span>
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-pretty text-white/70">
              Our team is building a reliable platform for India&apos;s growing businesses and individuals — bringing
              expert tax knowledge and thoughtful technology together. We&apos;re taking the time to get every detail
              right before we open the doors.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={`mailto:${site.email}`} variant="light" size="lg">
                <Mail className="size-4.5" aria-hidden="true" />
                Contact Us
              </Button>
              <Button href="#services" variant="outlineLight" size="lg">
                Explore Services
                <ArrowRight className="size-4.5 text-white/70 transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white/[0.04] p-6 ring-1 ring-white/10 sm:p-8">
              <p className="text-sm font-semibold tracking-[0.14em] text-white/60 uppercase">Road to launch</p>
              <ol className="mt-7">
                {milestones.map((milestone, index) => (
                  <Milestone key={milestone.title} {...milestone} last={index === milestones.length - 1} step={index + 1} />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Milestone({ title, status, description, current, last, step }) {
  return (
    <li className={cn('relative flex gap-5', !last && 'pb-9')}>
      {!last && <span aria-hidden="true" className="absolute top-10 bottom-1 left-[17px] w-px bg-white/12" />}
      <span
        aria-hidden="true"
        className={cn(
          'relative grid size-9 shrink-0 place-items-center rounded-full text-sm font-semibold',
          current ? 'bg-saffron-400 text-ink-950' : 'text-white/60 ring-1 ring-white/20',
        )}
      >
        {current && <span className="absolute inset-0 animate-ping-soft rounded-full bg-saffron-400/40" />}
        <span className="relative">{step}</span>
      </span>
      <div className="pt-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <h3 className="text-lg font-semibold tracking-[-0.01em]">{title}</h3>
          <span
            className={cn(
              'rounded-full px-2.5 py-0.5 text-xs font-semibold',
              current ? 'bg-saffron-400/15 text-saffron-300' : 'bg-white/[0.07] text-white/70',
            )}
          >
            {status}
          </span>
        </div>
        <p className="mt-2 text-[15px] leading-relaxed text-white/60">{description}</p>
      </div>
    </li>
  );
}

function LaunchBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="bg-line-grid absolute inset-0 mask-[radial-gradient(ellipse_70%_80%_at_70%_20%,black,transparent_75%)]" />
      <div className="absolute -top-40 -right-32 size-[34rem] rounded-full bg-[radial-gradient(closest-side,rgb(242_129_27/0.22),transparent)]" />
      <div className="absolute -bottom-48 -left-40 size-[30rem] rounded-full bg-[radial-gradient(closest-side,rgb(20_151_92/0.14),transparent)]" />
      <svg viewBox="0 0 400 400" fill="none" className="absolute -right-40 -bottom-40 size-[36rem] opacity-60">
        <circle cx="200" cy="200" r="198" stroke="white" strokeOpacity="0.06" />
        <circle cx="200" cy="200" r="150" stroke="white" strokeOpacity="0.05" />
        <circle cx="200" cy="200" r="102" stroke="white" strokeOpacity="0.04" />
      </svg>
    </div>
  );
}
