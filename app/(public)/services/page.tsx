import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Building2,
  HeartPulse,
  Users,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import PageBanner from "../shared/page-banner";

export const metadata: Metadata = {
  title: "Services | Impact Lives Care",
  description:
    "Professional healthcare support shaped around your needs, with home care and healthcare services for organizations.",
};

const categoryLinkClass =
  "rounded-sm px-2 py-1 text-sm font-medium text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-200 sm:text-base";

const homeServices = [
  {
    id: "nurse-home-visits",
    title: "Nurse Home Visits",
    description:
      "Professional nursing care delivered in your home, with support shaped around your health needs and daily comfort.",
    image: "/kidsheartcheck.jpg",
    alt: "A healthcare professional checking a young child with a stethoscope",
    support: [
      "Wound dressing",
      "Health management",
      "Recovery support",
      "Post-surgical care",
    ],
  },
  {
    id: "caregiver-visits",
    title: "Caregiver Visits",
    description:
      "Compassionate support with everyday life, helping you or your loved one feel comfortable, respected and cared for at home.",
    image: "/nursewithbaby.jpg",
    alt: "A nurse holding a smiling young child",
    support: [
      "Personal care",
      "Daily routines",
      "Companionship",
      "Mobility support",
    ],
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    description:
      "Personalised rehabilitation support focused on movement, recovery and greater confidence in everyday activities.",
    image: "/legphysio.avif",
    alt: "Healthy foods, exercise equipment and health monitoring tools",
    support: [
      "Mobility assessment",
      "Guided exercises",
      "Recovery support",
      "Movement and balance",
    ],
  },
  {
    id: "hospital-escort-services",
    title: "Hospital Escort Services",
    description:
      "Support throughout hospital visits, with a caring professional by your side for appointments and the journey through care.",
    image: "/escortwheel.jpg",
    alt: "A stethoscope resting on an open medical reference book",
    support: [
      "Appointment accompaniment",
      "Mobility assistance",
      "Support during hospital visits",
      "Communication with families",
    ],
  },
  {
    id: "lab-sample-collection",
    title: "Lab Sample Collection",
    description:
      "Convenient sample collection in the comfort of your home, bringing professional healthcare support closer to you.",
    image: "/labcheck.jpg",
    alt: "A laboratory professional examining a sample",
    support: [
      "Home sample collection",
      "Professional handling",
      "Convenient scheduling",
      "Support with next steps",
    ],
  },
  {
    id: "live-in-care",
    title: "Live-in Care",
    description:
      "Ongoing support from a caregiver in your home, with a care plan built around your routines, preferences and wellbeing.",
    image: "/bedrest.jpg",
    alt: "A nurse caring for a patient resting in bed",
    support: [
      "Everyday personal care",
      "Companionship",
      "Daily routine support",
      "Ongoing care at home",
    ],
  },
];

const organizationServices = [
  {
    title: "Healthcare Education",
    icon: BookOpen,
    description:
      "Practical health education that helps teams and communities make informed choices about their wellbeing.",
  },
  {
    title: "Organizational Wellness",
    icon: Building2,
    description:
      "Healthcare support shaped around the needs of your workplace and the people who keep it moving.",
  },
  {
    title: "Health Checks",
    icon: HeartPulse,
    description:
      "Professional health checks that help individuals and teams understand their health needs.",
  },
  {
    title: "Community Outreach",
    icon: Users,
    description:
      "Bringing healthcare awareness and support closer to the communities that need them.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        id="services-heading"
        eyebrow="CARE FOR EVERY STAGE"
        actions={
          <nav
            aria-label="Service categories"
            className="flex items-center justify-center gap-4"
          >
            <a href="#home-care" className={categoryLinkClass}>
              Home Care
            </a>
            <span aria-hidden="true" className="text-white/35">
              |
            </span>
            <a href="#organizations" className={categoryLinkClass}>
              Organizations
            </a>
          </nav>
        }
      >
        Professional support shaped
        <br className="hidden sm:block" /> around your needs.
      </PageBanner>
      <section
        id="home-care"
        aria-labelledby="home-care-heading"
        className="scroll-mt-28 mx-auto w-full max-w-6xl flex-1 px-6 py-12 has-[section[aria-labelledby=hero-heading]]:py-0"
      >
        <div data-reveal className="mx-auto max-w-2xl pb-4 text-center sm:pb-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary sm:text-sm">
            HOME CARE
          </p>
          <h2
            id="home-care-heading"
            className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Care in the comfort of home.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From a single visit to ongoing support, we build care around the
            person.
          </p>
        </div>
        <div className="mt-8 grid gap-8 sm:gap-10">
          {homeServices.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              aria-labelledby={`${service.id}-heading`}
              className="grid scroll-mt-28 items-center gap-8 rounded-3xl border border-primary/10 bg-card p-5 shadow-sm sm:gap-10 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10"
            >
              <div
                className={cn(
                  "relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted",
                  index % 2 === 1 && "lg:order-2",
                )}
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 1152px) 520px, (min-width: 1024px) 46vw, calc(100vw - 48px)"
                  className="object-cover"
                />
              </div>
              <div className={cn(index % 2 === 1 && "lg:order-1")}>
                <h3
                  id={`${service.id}-heading`}
                  className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
                >
                  {service.title}
                </h3>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.support.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-body-text"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/request-care"
                  aria-label={`Request ${service.title}`}
                  className={cn(
                    buttonVariants(),
                    "mt-8 h-12 gap-3 rounded-xl px-6",
                  )}
                >
                  Request This Service{" "}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="organizations"
        aria-labelledby="organizations-heading"
        className="scroll-mt-28 mx-auto w-full max-w-6xl flex-1 px-6 py-12 has-[section[aria-labelledby=hero-heading]]:py-0"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-surface-purple"
        />
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary sm:text-sm">
            CARE FOR ORGANIZATIONS
          </p>
          <h2
            id="organizations-heading"
            className="mt-5 text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Healthier workplaces.
            <br />
            Stronger communities.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Professional healthcare support for the people at the heart of your
            organization.
          </p>
        </div>
        <ul className="mt-10 grid gap-x-12 sm:grid-cols-2">
          {organizationServices.map(({ title, icon: Icon, description }) => (
            <li key={title} className="flex gap-4 border-t border-border py-7">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ variant: "emphasis" }),
            "mt-6 h-12 gap-3 rounded-xl px-6",
          )}
        >
          Talk to Our Team <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}
