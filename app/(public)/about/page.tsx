import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, ShieldCheck, Sparkles, UserRound } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import PageBanner from "../shared/page-banner";

export const metadata: Metadata = {
  title: "About Us | Impact Lives Care",
  description:
    "Discover Impact Lives Care Ltd: our mission, vision, and commitment to safe, compassionate, person-centred healthcare at home and in the community.",
};

const values = [
  { title: "Safety", icon: ShieldCheck, description: "Safe, reliable care from vetted healthcare professionals." },
  { title: "Compassion", icon: HeartHandshake, description: "Listening with empathy and caring with kindness." },
  { title: "Excellence", icon: Sparkles, description: "Professional standards, continuous growth and innovation." },
  { title: "Dignity", icon: UserRound, description: "Respect for your choices, comfort and individuality." },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner id="about-heading" eyebrow="ABOUT IMPACT LIVES CARE">
        Healthcare with dignity<br />at its heart.
      </PageBanner>
      <section aria-label="Care at home">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted sm:aspect-[2/1] lg:aspect-[2.4/1]">
          <Image
            src="/imlcare-patient.jpg"
            alt="A nurse sharing a warm moment with an older woman during care at home"
            fill
            preload
            sizes="(min-width: 1152px) 1104px, calc(100vw - 48px)"
            className="object-cover object-[center_40%]"
          />
        </div>
      </section>

      <section aria-labelledby="who-we-are-heading" className="grid items-center gap-10 py-20 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative aspect-[4/5] max-h-[600px] overflow-hidden rounded-2xl bg-muted">
          <Image
            src="/liveincare.jpg"
            alt="A caregiver supporting an older woman comfortably in her own home"
            fill
            sizes="(min-width: 1152px) 468px, (min-width: 1024px) 42vw, calc(100vw - 48px)"
            className="object-cover"
          />
        </div>
        <div>
          <h2 id="who-we-are-heading" className="text-xs font-semibold tracking-[0.18em] text-primary sm:text-sm">
            WHO WE ARE
          </h2>
          <p className="mt-5 text-2xl leading-snug font-semibold tracking-tight text-foreground sm:text-3xl">
            Professional care.<br />Personal to you.
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Impact Lives Care Ltd delivers safe, compassionate and person-centred healthcare to individuals, families, workplaces and communities. We believe quality care should be accessible beyond hospital settings, with support that is convenient, respectful and responsive to your needs.
            </p>
            <p>
              From nursing care at home and physiotherapy to medical consultations, laboratory sample collection, patient escort services and live-in care, we place your dignity, comfort and wellbeing at the centre of everything we do.
            </p>
            <p>
              We bring healthcare delivery and innovation together to create meaningful, sustainable impact for the people we serve and the professionals who care for them.
            </p>
          </div>
          <div className="mt-7 border-l-2 border-brand-magenta pl-5">
            <p className="text-sm font-semibold text-primary">Care built around the individual.</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We pair vetted, clinically verified nurses and caregivers with families, shaping each care plan around the person. From a single visit to round-the-clock support, our promise remains the same: safe, high-quality, person-centred care.
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Our mission and vision" className="grid overflow-hidden rounded-2xl border border-primary/10 bg-surface-purple md:grid-cols-2">
        <div className="p-8 sm:p-10 lg:p-12">
          <h2 className="text-xs font-semibold tracking-[0.18em] text-primary sm:text-sm">OUR MISSION</h2>
          <p className="mt-5 text-2xl leading-snug font-semibold tracking-tight text-foreground sm:text-3xl">
            Safe, high-quality,<br />person-centred care.
          </p>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            To improve health and wellbeing through safe, compassionate and innovative healthcare, empowering professionals to deliver excellent, person-centred care.
          </p>
        </div>
        <div className="border-t border-primary/10 p-8 sm:p-10 md:border-t-0 md:border-l lg:p-12">
          <h2 className="text-xs font-semibold tracking-[0.18em] text-primary sm:text-sm">OUR VISION</h2>
          <p className="mt-5 text-2xl leading-snug font-semibold tracking-tight text-foreground sm:text-3xl">
            Globally trusted.<br />Transforming lives.
          </p>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            To become a globally trusted healthcare leader, transforming lives through compassion, innovation and excellence while empowering professionals to grow and lead.
          </p>
        </div>
      </section>

      <section aria-labelledby="values-heading" className="pt-20 pb-8 text-center sm:pt-24 sm:pb-12">
        <h2 id="values-heading" className="text-xs font-semibold tracking-[0.18em] text-primary sm:text-sm">OUR VALUES</h2>
        <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ title, icon: Icon, description }) => (
            <li key={title} className="mx-auto max-w-xs">
              <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
        <Link href="/request-care" className={cn(buttonVariants({ variant: "emphasis" }), "mt-12 h-12 gap-3 rounded-xl px-7 sm:mt-14")}>
          Request Care
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}
