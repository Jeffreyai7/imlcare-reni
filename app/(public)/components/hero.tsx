import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const benefits = [
  "Vetted Professionals",
  "Personalised Care",
  "Flexible Support",
];
const backgrounds = ["/nursewithbaby.jpg", "/bedrest.jpg", "/labcheck.jpg"];

export default function HomepageHero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="homepage-hero relative isolate flex min-h-[560px] items-start px-6 py-16 sm:min-h-[600px] sm:items-center sm:px-12 sm:py-20 lg:min-h-[650px] lg:py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10  overflow-hidden bg-[#24152f]"
      >
        {backgrounds.map((src, index) => (
          <div
            key={src}
            className="hero-background absolute inset-0"
            style={{ animationDelay: `${-index * 6}s` }}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width: 1152px) 1152px, 100vw"
              preload={index === 0}
              loading={index === 0 ? undefined : "eager"}
              className="object-cover object-[65%_center]"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-linear-to-r from-[#24152f]/95 via-[#24152f]/70 to-[#24152f]/25" />
      </div>
      <div className="mx-auto w-full max-w-6xl min-w-0 text-left">
        <div>
          <p className="mb-5 flex items-center gap-2.5 sm:mb-6 text-xs font-semibold tracking-[0.18em] text-white/90 sm:text-sm">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-brand-magenta"
            />
            CARE THAT COMES TO YOU
          </p>
          <h1
            id="hero-heading"
            className="max-w-xl text-[clamp(2rem,8.5vw,2.5rem)] leading-[1.16] font-semibold tracking-[-0.035em] sm:text-[clamp(2.4rem,4.3vw,3.5rem)] sm:leading-[1.12] sm:tracking-[-0.045em] text-white"
          >
            Professional healthcare,
            <br className="hidden sm:block" /> right where you
            <br className="hidden sm:block" /> feel at home.
          </h1>
          <p className="mt-6 max-w-[30ch] text-base leading-[1.75] sm:max-w-lg sm:leading-relaxed text-white/90 sm:text-lg">
            Nursing, everyday support and rehabilitation, brought to you with care.
          </p>
          <div className="mt-9 flex max-w-sm flex-col gap-4 sm:mt-8 sm:max-w-none sm:flex-row">
            <Link
              href="/request-care"
              className={cn(
                buttonVariants({ variant: "emphasis" }),
                "h-12 rounded-xl px-7 text-sm shadow-sm",
              )}
            >
              Request Care
            </Link>
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 gap-3 rounded-xl border-primary/20 bg-card px-6 text-primary [--button-bg:var(--card)] [--button-fg:var(--primary)]",
              )}
            >
              Explore Services
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <ul
            aria-label="Our care commitments"
            className="mt-9 hidden max-w-xl flex-wrap sm:flex gap-x-5 gap-y-3 border-t border-white/20 pt-6"
          >
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-2 text-xs font-medium text-white/90"
              >
                <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-white" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <label className="hero-pause absolute right-0 bottom-5 flex cursor-pointer items-center gap-2 rounded-lg bg-black/35 px-3 py-2 text-xs text-white">
        <input type="checkbox" className="size-4 accent-white" />
        Pause slideshow
      </label> */}
    </section>
  );
}
