import type { ReactNode } from "react";

export default function PageBanner({
  id,
  eyebrow,
  children,
  actions,
}: {
  id: string;
  eyebrow: string;
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className="page-banner-artwork relative isolate -mt-12 mb-12 flex min-h-64 items-center justify-center overflow-hidden border-b border-white/10 bg-brand-purple-dark px-6 py-14 text-center text-white sm:min-h-80 sm:py-16"
    >
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-purple-200 sm:text-sm">{eyebrow}</p>
        <h1 id={id} className="mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.12] font-semibold tracking-[-0.045em] text-white">
          {children}
        </h1>
        {actions && <div className="mt-7">{actions}</div>}
      </div>
    </section>
  );
}
