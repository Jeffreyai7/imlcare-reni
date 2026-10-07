import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const benefits = ["Vetted Professionals", "Personalised Care", "Flexible Support"];

export default function HomepageHero() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate flex min-h-[650px] items-center py-12 lg:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 -left-6 -right-6 -z-10 bg-linear-to-br from-brand-purple-light/40 via-background to-brand-magenta-light/30" />
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        <div>
          <p className="mb-6 flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-primary sm:text-sm"><span aria-hidden="true" className="size-2 rounded-full bg-brand-magenta" />CARE THAT COMES TO YOU</p>
          <h1 id="hero-heading" className="max-w-xl text-[clamp(2.4rem,4.3vw,3.5rem)] leading-[1.12] font-semibold tracking-[-0.045em] text-foreground">
            Professional healthcare,<br className="hidden sm:block" /> right where you<br className="hidden sm:block" /> feel at home.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">Safe, compassionate and person-centred healthcare for individuals and families across Lagos and Ogun State.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link href="/request-care" className={cn(buttonVariants({ variant: "emphasis" }), "h-12 rounded-xl px-7 text-sm shadow-sm")}>Request Care</Link>
            <Link href="/services" className={cn(buttonVariants({ variant: "outline" }), "h-12 gap-3 rounded-xl border-primary/20 bg-card px-6 text-primary")}>Explore Services<ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
          <ul aria-label="Our care commitments" className="mt-9 flex flex-wrap gap-x-5 gap-y-3 border-t border-primary/10 pt-6">
            {benefits.map((benefit) => <li key={benefit} className="flex items-center gap-2 text-xs font-medium text-muted-foreground"><Check className="size-4 shrink-0 text-primary" strokeWidth={2.5} aria-hidden="true" />{benefit}</li>)}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div aria-hidden="true" className="absolute -inset-3 rotate-2 rounded-2xl bg-primary/7 sm:-inset-4" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card shadow-sm lg:aspect-[1.05/1]">
            <Image src="/patient-bp.jpg" alt="A nurse smiling with an older patient while checking his blood pressure at home" fill sizes="(min-width: 1024px) 520px, (min-width: 640px) 512px, calc(100vw - 48px)" preload className="object-cover object-[55%_center]" />
          </div>
        </div>
      </div>
    </section>
  );
}
