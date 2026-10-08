import { cn } from '../../lib/cn';

const variants = {
  primary:
    'bg-ink-900 text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.14),0_10px_24px_-10px_rgb(15_31_56/0.6)] hover:bg-ink-800 hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.14),0_18px_34px_-14px_rgb(15_31_56/0.6)]',
  secondary:
    'bg-white/80 text-ink-900 ring-1 ring-inset ring-ink-200 shadow-[0_1px_2px_rgb(15_31_56/0.05)] hover:bg-white hover:ring-ink-300',
  light: 'bg-white text-ink-950 shadow-[0_12px_30px_-12px_rgb(0_0_0/0.5)] hover:bg-saffron-50',
  outlineLight: 'text-white ring-1 ring-inset ring-white/20 hover:bg-white/[0.06] hover:ring-white/35',
};

const sizes = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-[15px]',
  lg: 'h-13 px-6 text-[15px] sm:h-14 sm:px-7 sm:text-base',
};

export default function Button({ href, variant = 'primary', size = 'md', className, children, ...props }) {
  const classes = cn(
    'group/btn inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] whitespace-nowrap select-none',
    'transition-[background-color,box-shadow,color,scale] duration-300 ease-out active:scale-[0.97]',
    'disabled:cursor-not-allowed disabled:opacity-70',
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
