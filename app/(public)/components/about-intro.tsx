import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AboutIntro() {
  return (
    <section
      aria-labelledby="about-intro-heading"
      className="mx-auto max-w-3xl py-24 text-center"
    >
      <p className="mb-6 text-xs font-semibold tracking-[0.18em] text-primary sm:text-sm">
        BUILT AROUND YOU
      </p>
      <h2
        id="about-intro-heading"
        className="text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        Built around the dignity of
        <br className="hidden sm:block" /> every life we touch.
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Impact Lives Care brings professional and compassionate healthcare into
        your home, where people feel safest, most relaxed, and most themselves.
      </p>
      <Link
        href="/about"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "mt-8 h-12 gap-3 rounded-xl border-primary/20 bg-card px-6 text-primary [--button-bg:var(--card)] [--button-fg:var(--primary)]",
        )}
      >
        About Us
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </section>
  );
}
