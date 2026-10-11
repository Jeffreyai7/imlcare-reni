import Link from "next/link";
import { ClipboardPen, ClipboardCheck, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: ClipboardPen,
    title: "Tell us what you need",
    description: "Complete a short care assessment for yourself or your loved one.",
  },
  {
    icon: ClipboardCheck,
    title: "We review your needs",
    description: "Your information helps us understand the right level of support.",
  },
  {
    icon: Phone,
    title: "We contact you",
    description: "Our team reaches out to discuss the next steps.",
  },
];

export default function GettingStarted() {
  return (
    <section
      aria-labelledby="getting-started-heading"
      className="mx-auto max-w-5xl py-24 text-center"
    >
      <p className="text-xs font-semibold tracking-[0.18em] text-primary sm:text-sm">
        GETTING STARTED
      </p>
      <h2
        id="getting-started-heading"
        className="mt-6 text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        Care begins with understanding.
      </h2>

      <ol className="mt-12 grid gap-12 md:mt-16 md:grid-cols-3 md:gap-8">
        {steps.map(({ icon: Icon, title, description }, index) => (
          <li key={title} className="relative mx-auto w-full max-w-sm rounded-2xl border border-border bg-card px-6 py-8 shadow-sm">
            <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-secondary text-primary ring-1 ring-primary/10">
              <Icon className="size-7" strokeWidth={1.75} aria-hidden="true" />
            </span>
            {index < steps.length - 1 && (
              <>
                <svg aria-hidden="true" className="step-connector pointer-events-none absolute -top-8 left-[82%] z-10 hidden h-12 w-[calc(36%+2rem)] text-brand-magenta/70 md:block" viewBox="0 0 160 48" fill="none" preserveAspectRatio="none">
                  <path d="M4 42C36 2 112 2 154 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M146 38L154 40L152 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <g transform="translate(54 14) rotate(-14)">
                    <path d="M0 0L-5 -3L-5 3ZM0 0L5 -3L5 3Z" fill="currentColor" />
                  </g>
                  <g transform="translate(105 17) rotate(18)">
                    <path d="M0 0L-5 -3L-5 3ZM0 0L5 -3L5 3Z" fill="currentColor" />
                  </g>
                </svg>
                <svg aria-hidden="true" className="step-connector-mobile pointer-events-none absolute top-full left-1/2 z-10 h-12 w-12 -translate-x-1/2 text-brand-magenta/70 md:hidden" viewBox="0 0 48 48" fill="none">
                  <path d="M24 2C10 12 38 26 24 44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M23 36L24 44L31 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <g transform="translate(24 22) rotate(82)">
                    <path d="M0 0L-4 -2.5L-4 2.5ZM0 0L4 -2.5L4 2.5Z" fill="currentColor" />
                  </g>
                </svg>
              </>
            )}
            <h3 className="mt-6 text-lg font-semibold tracking-tight text-foreground">
              {title}
            </h3>
            <p className="mx-auto mt-3 max-w-64 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {description}
            </p>
          </li>
        ))}
      </ol>

      <Link
        href="/request-care"
        className={cn(
          buttonVariants(),
          "mt-12 h-12 rounded-xl px-7 md:mt-14",
        )}
      >
        Request Care
      </Link>
    </section>
  );
}
