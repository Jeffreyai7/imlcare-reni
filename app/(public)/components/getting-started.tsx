import Link from "next/link";
import { ClipboardPen, ClipboardCheck, Phone, ArrowRight } from "lucide-react";
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

      <ol className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
        {steps.map(({ icon: Icon, title, description }, index) => (
          <li key={title} className="relative mx-auto w-full max-w-sm rounded-2xl border border-border bg-card px-6 py-8 shadow-sm">
            <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-secondary text-primary ring-1 ring-primary/10">
              <Icon className="size-7" strokeWidth={1.75} aria-hidden="true" />
            </span>
            {index < steps.length - 1 && <span aria-hidden="true" className="absolute top-12 -right-6 z-10 hidden size-4 items-center justify-center text-primary/50 md:flex"><ArrowRight className="size-4" /></span>}
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
