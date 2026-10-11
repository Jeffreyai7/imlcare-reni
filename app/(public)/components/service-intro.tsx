import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  HeartPulse,
  Users,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ServiceCarousel from "./service-carousel";

const featuredServices = [
  {
    title: "Nurse Home Visits",
    description: "Professional care in your home.",
    image: "/kidsheartcheck.jpg",
    alt: "A healthcare professional checking a young child with a stethoscope",
  },
  {
    title: "Caregiver Visits",
    description: "Compassionate everyday support.",
    image: "/nursewithbaby.jpg",
    alt: "A nurse holding a smiling young child",
  },
  {
    title: "Physiotherapy",
    description: "Rehabilitation and mobility.",
    image: "/legphysio.avif",
    alt: "Healthy foods, exercise equipment and health monitoring tools",
  },
];

const additionalServices = [
  {
    title: "Hospital Escort Services",
    description: "Support for hospital visits.",
    image: "/escortwheel.jpg",
    alt: "A stethoscope resting on an open medical reference book",
  },
  {
    title: "Lab Sample Collection",
    description: "Sample collection at home.",
    image: "/labcheck.jpg",
    alt: "A laboratory professional examining a sample",
  },
  {
    title: "Live-in Care",
    description: "Everyday support, right at home.",
    image: "/bedrest.jpg",
    alt: "A nurse caring for a patient resting in bed",
  },
];

const organizationServices = [
  { title: "Healthcare Education", icon: BookOpen },
  { title: "Organizational Wellness", icon: Building2 },
  { title: "Health Checks", icon: HeartPulse },
  { title: "Community Outreach", icon: Users },
];

const services = [...featuredServices, ...additionalServices];
const serviceIds = [
  "nurse-home-visits",
  "caregiver-visits",
  "physiotherapy",
  "hospital-escort-services",
  "lab-sample-collection",
  "live-in-care",
];

export default function ServiceIntro() {
  return (
    <section
      aria-labelledby="services-intro-heading"
      className="relative isolate py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 -right-6 -left-6 -z-10 bg-surface-purple"
      />
      <div
        data-reveal
        className="flex flex-wrap items-end justify-between gap-6"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary sm:text-sm">
            OUR SERVICES
          </p>
          <h2
            id="services-intro-heading"
            className="mt-5 text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            A little support.
            <br />A lasting difference.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Expert care for every stage of life, shaped around your needs and
            delivered with compassion.
          </p>
        </div>
        <Link
          href="/services"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-12 gap-3 rounded-xl px-6",
          )}
        >
          Explore our services
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <ServiceCarousel>
        <CarouselContent className="-ml-6 items-stretch py-3">
          {services.map((service, index) => (
            <CarouselItem
              key={service.title}
              className="flex basis-full pl-6 md:basis-1/2 lg:basis-1/3"
              aria-label={service.title}
            >
              <Link
                href={`/services#${serviceIds[index]}`}
                aria-label={`Learn more about ${service.title}`}
                className="service-card group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-primary/10 bg-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-muted">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1152px) 352px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, calc(100vw - 48px)"
                    className="service-card-image object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 mb-6 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-5 text-sm font-semibold text-primary">
                    Discover this service
                    <span className="service-card-arrow flex size-10 items-center justify-center rounded-full bg-secondary">
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </span>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </ServiceCarousel>
      <section
        data-reveal
        aria-labelledby="organization-care-heading"
        className="relative mt-12 overflow-hidden rounded-3xl bg-brand-purple-dark p-8 text-white sm:p-12"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full border border-white/10"
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-purple-200">
              CARE FOR ORGANIZATIONS
            </p>
            <h3
              id="organization-care-heading"
              className="mt-5 text-2xl leading-tight font-semibold tracking-tight text-white sm:text-3xl"
            >
              Healthier teams.
              <br />
              Stronger communities.
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
              Practical healthcare support for the people at the heart of your
              organization.
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mt-7 h-12 gap-3 rounded-xl border-white/30 bg-white px-6 text-brand-purple-dark [--button-bg:white] [--button-fg:var(--brand-purple-dark)]",
              )}
            >
              Talk to our team
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {organizationServices.map(({ title, icon: Icon }) => (
              <li
                key={title}
                className="rounded-2xl border border-white/15 bg-white/5 p-5"
              >
                <Icon
                  className="mb-4 size-6 text-purple-200"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <p className="text-sm font-medium text-white">{title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}
