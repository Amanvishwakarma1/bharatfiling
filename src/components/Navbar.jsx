import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Mail, Menu, X } from 'lucide-react';
import { navLinks, site } from '../config/site';
import { useScrolled } from '../hooks/useScrolled';
import { cn } from '../lib/cn';
import Button from './ui/Button';
import Logo from './ui/Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(12);
  const barRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event) => {
      if (!barRef.current?.contains(event.target)) setOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 768px)');
    const onBreakpoint = (event) => event.matches && setOpen(false);

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    desktop.addEventListener('change', onBreakpoint);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [open]);

  const elevated = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2 pt-2.5 sm:px-4 sm:pt-4">
      <div
        ref={barRef}
        className={cn(
          'mx-auto max-w-[78rem] rounded-2xl border transition-[background-color,border-color,box-shadow] duration-500',
          elevated
            ? 'border-ink-200/70 bg-white/85 shadow-[0_10px_30px_-14px_rgb(15_31_56/0.22)] backdrop-blur-xl'
            : 'border-transparent bg-transparent',
        )}
      >
        <nav aria-label="Primary" className="flex h-15 items-center justify-between gap-4 pr-1.5 pl-3 sm:h-16 sm:px-4">
          <a href="#top" className="rounded-lg" aria-label="Bharat Filing — back to top">
            <Logo />
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition-colors duration-200 hover:bg-ink-100/80 hover:text-ink-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <Button href={`mailto:${site.email}`} size="sm">
                <Mail className="size-4" aria-hidden="true" />
                Contact Us
              </Button>
            </div>
            <button
              ref={toggleRef}
              type="button"
              className="grid size-11 place-items-center rounded-full text-ink-900 transition-colors hover:bg-ink-100 md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </nav>

        <div
          id="mobile-menu"
          inert={!open}
          className={cn(
            'grid transition-[grid-template-rows,opacity] duration-500 ease-out-expo md:hidden',
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
          )}
        >
          <div className="overflow-hidden">
            <ul className="border-t border-ink-100 px-2 pt-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-3.5 text-base font-medium text-ink-800 transition-colors hover:bg-ink-50"
                  >
                    {link.label}
                    <ArrowRight className="size-4 text-ink-400" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="p-3 pt-2">
              <Button href={`mailto:${site.email}`} onClick={() => setOpen(false)} className="w-full">
                <Mail className="size-4" aria-hidden="true" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
