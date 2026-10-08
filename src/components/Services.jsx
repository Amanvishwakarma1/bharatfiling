import { BriefcaseBusiness, Building, Check, Clock3, FileText, ReceiptIndianRupee } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const services = [
  {
    icon: FileText,
    title: 'Income Tax Filing',
    description: 'Accurate ITR filing for salaried professionals, freelancers and investors — reviewed by experts before you submit.',
    scope: ['Salary & pension income', 'Capital gains & investments', 'Freelance & business income'],
  },
  {
    icon: ReceiptIndianRupee,
    title: 'GST & Compliance',
    description: 'GST registration, periodic returns and a compliance calendar that keeps every deadline in view.',
    scope: ['GST registration', 'Monthly & annual returns', 'Deadline tracking'],
  },
  {
    icon: Building,
    title: 'Business Registration',
    description: 'Start on the right footing with guided set-up for companies, LLPs, partnerships and proprietorships.',
    scope: ['Private Limited & LLP', 'Partnership & proprietorship', 'MSME & startup registrations'],
  },
  {
    icon: BriefcaseBusiness,
    title: 'CA Consulting',
    description: 'Direct access to qualified Chartered Accountants for tax planning, notices and important financial decisions.',
    scope: ['Tax planning', 'Notice assistance', 'Business advisory'],
  },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-title"
            eyebrow="Services"
            title="Everything compliance. One trusted place."
            description="We're launching with the essentials individuals and businesses need most. Each service is in final preparation and will be available from day one."
          />
          <p className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-saffron-50 px-4 py-2 text-sm font-semibold text-saffron-700 ring-1 ring-saffron-100 lg:self-auto">
            <Clock3 className="size-4" aria-hidden="true" />
            All services launching soon
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal as="li" key={service.title} delay={index * 90} className="h-full">
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, description, scope }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-200/80 bg-white p-6 shadow-[0_1px_2px_rgb(15_31_56/0.03)] transition-[translate,box-shadow,border-color] duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-ink-300/80 hover:shadow-[var(--shadow-lift)] sm:p-7">
      <span
        aria-hidden="true"
        className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-saffron-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="flex items-start justify-between gap-4">
        <span className="grid size-12 place-items-center rounded-2xl bg-ink-50 text-ink-800 ring-1 ring-ink-200/80 transition-colors duration-500 group-hover:bg-ink-900 group-hover:text-white group-hover:ring-ink-900">
          <Icon className="size-5.5" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron-50 px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] text-saffron-700 uppercase ring-1 ring-saffron-100">
          <span className="size-1.5 rounded-full bg-saffron-500" aria-hidden="true" />
          Coming soon
        </span>
      </div>

      <h3 className="mt-7 text-xl font-semibold tracking-[-0.02em] text-ink-900">{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{description}</p>

      <div className="mt-auto pt-6">
        <ul className="space-y-2.5 border-t border-ink-100 pt-6" aria-label={`${title} will include`}>
          {scope.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-ink-700">
              <Check className="size-4 shrink-0 text-leaf-600" strokeWidth={2.5} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
