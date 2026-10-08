import { useEffect, useId, useRef } from 'react';
import { X } from 'lucide-react';
import { site } from '../config/site';

const documents = {
  privacy: {
    title: 'Privacy Policy',
    intro: 'Bharat Filing is in pre-launch. This summary explains how we handle the information you share on this website.',
    points: [
      ['What we collect', 'This website has no sign-up forms, accounts or tracking cookies, so it does not collect personal information from you.'],
      ['If you email us', 'We use your email address and message only to reply to you.'],
      ['What we don’t do', 'We don’t sell or rent personal information, or share it with third parties for their marketing.'],
      ['Your choices', `Ask us to delete any correspondence at any time by writing to ${site.email}.`],
    ],
    closing: 'Our full Privacy Policy will be published before our services go live.',
  },
  terms: {
    title: 'Terms of Service',
    intro: 'This website is a pre-launch announcement for Bharat Filing.',
    points: [
      ['Information only', 'Content on this site describes services we are preparing to offer. It is not tax, legal or financial advice.'],
      ['Services not yet available', 'No filing, registration or consulting services are provided through this website at this time.'],
      ['Independence', 'Bharat Filing is an independent private venture and is not affiliated with any government department or authority.'],
    ],
    closing: 'Complete Terms of Service will be published when our services launch.',
  },
};

/** Accessible modal (native <dialog>) for the pre-launch policy summaries. */
export default function LegalDialog({ doc, onClose }) {
  const dialogRef = useRef(null);
  const titleId = useId();
  const content = doc ? documents[doc] : null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (content && !dialog.open) dialog.showModal();
    if (!content && dialog.open) dialog.close();
  }, [content]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => event.target === dialogRef.current && onClose()}
      className="legal-dialog m-auto max-h-[min(44rem,calc(100dvh-2rem))] w-[calc(100%-2rem)] max-w-xl overflow-y-auto overscroll-contain rounded-3xl bg-white p-0 text-ink-900 shadow-[0_40px_80px_-20px_rgb(10_21_40/0.45)] backdrop:bg-ink-950/50 backdrop:backdrop-blur-sm"
    >
      {content && (
        <div className="p-7 sm:p-9">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-saffron-700 uppercase">Pre-launch summary</p>
              <h2 id={titleId} className="mt-2 text-2xl font-bold tracking-[-0.02em]">
                {content.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              autoFocus
              className="grid size-10 shrink-0 place-items-center rounded-full text-ink-500 ring-1 ring-ink-200 transition-colors hover:bg-ink-50 hover:text-ink-900"
              aria-label="Close"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <p className="mt-5 leading-relaxed text-ink-600">{content.intro}</p>
          <dl className="mt-6 space-y-4 border-t border-ink-100 pt-6">
            {content.points.map(([term, detail]) => (
              <div key={term}>
                <dt className="font-semibold text-ink-900">{term}</dt>
                <dd className="mt-1 text-[15px] leading-relaxed break-words text-ink-600">{detail}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 rounded-2xl bg-ink-50 px-4 py-3 text-sm leading-relaxed text-ink-600">{content.closing}</p>
        </div>
      )}
    </dialog>
  );
}
