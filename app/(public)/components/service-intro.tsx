"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const featuredServices = [
  { title: "Nurse Home Visits", description: "Professional care in your home.", image: "/patient-bp.jpg", alt: "A nurse checking a patient's blood pressure at home" },
  { title: "Caregiver Visits", description: "Compassionate everyday support.", image: "/patient-walker.jpg", alt: "A caregiver helping an older woman use her walking frame" },
  { title: "Physiotherapy", description: "Rehabilitation and mobility.", image: "/patient-physio.jpg", alt: "A professional supporting a patient during mobility rehabilitation" },
];

const additionalServices = [
  { title: "Hospital Escort Services", description: "Support for hospital visits.", image: "/escortcare.jpg", alt: "A nurse accompanying a patient in a wheelchair at hospital" },
  { title: "Lab Sample Collection", description: "Sample collection at home.", image: "/samplecollectimage.jpg", alt: "A nurse collecting a blood sample from a patient at home" },
  { title: "Live-in Care", description: "Everyday support, right at home.", image: "/liveincare.jpg", alt: "A caregiver supporting an older woman resting in bed" },
];

const linkClassName = "inline-flex items-center gap-2 rounded-sm text-sm font-medium text-primary transition-colors hover:text-brand-purple-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring";

export default function ServiceIntro() {
  const reduceMotion = useReducedMotion();
  const reveal = (index = 0) => ({
    initial: { opacity: 1, y: 0 },
    whileInView: reduceMotion ? { opacity: 1, y: 0 } : { opacity: [0, 1], y: [16, 0] },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.07, ease: "easeOut" as const },
  });

  return (
    <section aria-labelledby="services-intro-heading" className="relative isolate py-20 sm:py-24">
      <div aria-hidden="true" className="absolute inset-y-0 -right-6 -left-6 -z-10 bg-surface-purple" />
      <motion.div {...reveal()}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary sm:text-sm">OUR SERVICES</p>
          <Link href="/services" className={linkClassName}>View all services<ArrowRight className="size-4" aria-hidden="true" /></Link>
        </div>
        <h2 id="services-intro-heading" className="mt-6 text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl">Care designed around your needs.</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">From occasional professional support to ongoing care.</p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredServices.map((service, index) => (
          <motion.article key={service.title} {...reveal(index)} className="h-full">
            <Link href="/services" aria-label={`Learn more about ${service.title}`} className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
            <Card className="h-full gap-0 rounded-2xl pt-0 pb-0 shadow-sm transition-[box-shadow] duration-300 group-hover:shadow-md group-hover:ring-primary/25 group-focus-visible:ring-primary/25 motion-reduce:transition-none">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={service.image} alt={service.alt} fill sizes="(min-width: 1152px) 352px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, calc(100vw - 48px)" className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none" />
              </div>
              <CardContent className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold tracking-tight text-foreground">{service.title}</h3>
                <p className="mt-3 mb-6 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <span className="mt-auto inline-flex items-center justify-between gap-3 border-t border-border pt-4 text-sm font-medium text-primary">Learn more<span className="flex size-8 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><ArrowRight className="size-4" aria-hidden="true" /></span></span>
              </CardContent>
            </Card>
            </Link>
          </motion.article>
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {additionalServices.map((service, index) => (
          <motion.div key={service.title} {...reveal(index)}>
            <Link href="/services" aria-label={`Learn more about ${service.title}`} className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring motion-reduce:transition-none">
              <div className="relative size-16 shrink-0 overflow-hidden rounded-xl">
                <Image src={service.image} alt={service.alt} fill sizes="64px" className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm leading-snug font-semibold text-foreground">{service.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
              <ArrowRight className="size-4 shrink-0 text-primary" aria-hidden="true" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
