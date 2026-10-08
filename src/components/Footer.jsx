import { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { site } from '../config/site';
import LegalDialog from './LegalDialog';
import Logo from './ui/Logo';
import { InstagramIcon, LinkedInIcon, XIcon } from './ui/SocialIcons';

const exploreLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Launch update', href: '#launch' },
];

const socials = [
  { label: 'LinkedIn', icon: LinkedInIcon, url: site.social.linkedin },
  { label: 'X', icon: XIcon, url: site.social.x },
  { label: 'Instagram', icon: InstagramIcon, url: site.social.instagram },
];

export default function Footer() {
  const [legalDoc, setLegalDoc] = useState(null);

  return (
    <footer id="contact" className="border-t border-ink-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8 sm:pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-12 lg:col-span-5">
            <Logo />
            <p className="mt-5 text-lg font-semibold tracking-[-0.01em] text-ink-900">{site.tagline}</p>
            <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-ink-600">
              Tax filing, GST, business registration and CA consulting for individuals, startups and businesses across
              India — launching soon.
            </p>
            <ul className="mt-7 flex items-center gap-2.5" aria-label="Social media">
              {socials.map((social) => (
                <li key={social.label}>
                  <SocialLink {...social} />
                </li>
              ))}
            </ul>
          </div>

          <nav aria-labelledby="footer-explore" className="md:col-span-5 lg:col-span-3 lg:col-start-7">
            <h2 id="footer-explore" className="text-xs font-semibold tracking-[0.16em] text-ink-500 uppercase">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-md text-[15px] text-ink-700 transition-colors hover:text-ink-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 md:col-span-7 lg:col-span-3">
            <h2 className="text-xs font-semibold tracking-[0.16em] text-ink-500 uppercase">Contact</h2>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex max-w-full items-center gap-2.5 rounded-md text-[15px] font-medium break-all text-ink-900 transition-colors hover:text-saffron-700"
                >
                  <Mail className="size-4.5 shrink-0 text-ink-400" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-[15px] text-ink-700">
                <MapPin className="size-4.5 text-ink-400" aria-hidden="true" />
                {site.location}
              </li>
            </ul>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-500">
              Questions, partnerships or media enquiries — we&apos;d love to hear from you.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-ink-100 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-ink-500">© {new Date().getFullYear()} Bharat Filing. All rights reserved.</p>
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <button
                type="button"
                onClick={() => setLegalDoc('privacy')}
                className="rounded-md font-medium text-ink-600 transition-colors hover:text-ink-900"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setLegalDoc('terms')}
                className="rounded-md font-medium text-ink-600 transition-colors hover:text-ink-900"
              >
                Terms of Service
              </button>
            </li>
          </ul>
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-ink-500">
          Bharat Filing is an independent private venture and is not affiliated with, endorsed by or connected to any
          government department or authority.
        </p>
      </div>

      <LegalDialog doc={legalDoc} onClose={() => setLegalDoc(null)} />
    </footer>
  );
}

function SocialLink({ label, icon: Icon, url }) {
  const classes = 'grid size-10 place-items-center rounded-full ring-1 ring-ink-200 transition-colors';

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Bharat Filing on ${label}`}
        className={`${classes} text-ink-700 hover:bg-ink-900 hover:text-white hover:ring-ink-900`}
      >
        <Icon className="size-4" />
      </a>
    );
  }

  return (
    <span role="img" aria-label={`${label} — coming soon`} title={`${label} — coming soon`} className={`${classes} text-ink-400`}>
      <Icon className="size-4" />
    </span>
  );
}
