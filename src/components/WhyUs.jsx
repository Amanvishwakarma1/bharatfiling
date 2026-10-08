import { BadgeCheck, Eye, MapPin, Route } from 'lucide-react';
import { cn } from '../lib/cn';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const benefits = [
  {
    icon: Route,
    title: 'Simple Process',
    description: 'Guided, step-by-step flows that turn complex filings into a few clear actions. No jargon, no guesswork.',
  },
  {
    icon: Eye,
    title: 'Transparent Guidance',
    description: 'Clear timelines, upfront pricing and plain-language answers — you will always know what is happening and why.',
  },
  {
    icon: BadgeCheck,
    title: 'Professional Support',
    description: 'Qualified Chartered Accountants and compliance specialists review the work that matters, so you can file with confidence.',
  },
  {
    icon: MapPin,
    title: 'Built for Bharat',
    description: "Designed around India's tax and compliance landscape — for first-time filers, growing startups and established businesses alike.",
    featured: true,
  },
];

export default function WhyUs() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative border-y border-ink-200/60 bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
          <SectionHeading
            id="about-title"
            eyebrow="Why Bharat Filing"
            title="Built on clarity. Backed by expertise."
            description="Tax and compliance shouldn't feel intimidating. We're designing every step around three ideas: keep it simple, keep it transparent, and put real professionals behind your work."
          />
          <figure className="mt-10 hidden rounded-2xl border border-ink-200/70 bg-paper p-6 lg:block">
            <blockquote className="font-serif text-2xl leading-snug text-ink-900 italic">
              “No jargon. No hidden steps. Just compliance, done right.”
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium text-ink-500">— The Bharat Filing promise</figcaption>
          </figure>
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {benefits.map((benefit, index) => (
            <Reveal as="li" key={benefit.title} delay={index * 90} className="h-full">
              <BenefitCard index={index} {...benefit} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BenefitCard({ icon: Icon, title, description, featured, index }) {
  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-[border-color,box-shadow,background-color] duration-500 sm:p-8',
        featured
          ? 'border-ink-200/80 bg-white shadow-[var(--shadow-soft)]'
          : 'border-ink-200/70 bg-paper hover:border-ink-300/80 hover:bg-white hover:shadow-[var(--shadow-soft)]',
      )}
    >
      {featured && (
        <span aria-hidden="true" className="absolute inset-x-0 top-0 flex h-1">
          <span className="flex-1 bg-saffron-500" />
          <span className="flex-1 bg-ink-100" />
          <span className="flex-1 bg-leaf-500" />
        </span>
      )}

      <div className="flex items-center justify-between">
        <span className="grid size-12 place-items-center rounded-2xl bg-white text-ink-900 shadow-[0_1px_2px_rgb(15_31_56/0.06)] ring-1 ring-ink-200/80 transition-colors duration-500 group-hover:text-saffron-600">
          <Icon className="size-5.5" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <span className="text-sm font-semibold text-ink-500 tabular-nums" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-ink-900">{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{description}</p>
    </article>
  );
}
