import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ContactForm from "./contact-form";
import PageBanner from "../shared/page-banner";

export const metadata: Metadata = {
  title: "Contact Us | Impact Lives Care",
  description:
    "Get in touch with Impact Lives Care for healthcare enquiries in Lagos and Ogun State. Email us, chat on WhatsApp or request care.",
};

const contactLinkClass =
  "rounded-sm text-base text-foreground underline-offset-4 hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring";

export default function ContactPage() {
  return (
    <>
      <PageBanner id="contact-heading" eyebrow="LET’S TALK">
        Have a question?
        <br />
        We&apos;re here to help.
      </PageBanner>

      <div className="mx-auto w-full max-w-5xl flex-1 px-6 py-12 has-[section[aria-labelledby=hero-heading]]:py-0 mx-auto grid overflow-hidden rounded-2xl border border-border bg-card text-card-foreground lg:grid-cols-[0.85fr_1.15fr]">
        <section
          aria-labelledby="get-in-touch-heading"
          className="bg-surface-purple p-6 sm:p-10 lg:p-12"
        >
          <h2
            id="get-in-touch-heading"
            className="text-xs font-semibold tracking-[0.18em] text-primary sm:text-sm"
          >
            GET IN TOUCH
          </h2>
          <dl className="mt-8 space-y-8">
            <div className="relative pl-14">
              <span className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <dt className="text-sm font-medium text-muted-foreground">
                Email
              </dt>
              <dd className="mt-2">
                <a href="mailto:admin@imlcare.com" className={contactLinkClass}>
                  admin@imlcare.com
                </a>
              </dd>
            </div>
            <div className="relative pl-14">
              <span className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <dt className="text-sm font-medium text-muted-foreground">
                Phone
              </dt>
              <dd className="mt-2 text-base text-foreground">To be provided</dd>
            </div>
            <div className="relative pl-14">
              <span className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                <MessageCircle className="size-5" aria-hidden="true" />
              </span>
              <dt className="text-sm font-medium text-muted-foreground">
                WhatsApp
              </dt>
              <dd className="mt-2">
                <a
                  href="https://wa.me/2348113677288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactLinkClass}
                >
                  +234 811 367 7288
                </a>
              </dd>
            </div>
            <div className="relative pl-14">
              <span className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <dt className="text-sm font-medium text-muted-foreground">
                Service Area
              </dt>
              <dd className="mt-2 text-base text-foreground">
                Lagos &amp; Ogun State
              </dd>
            </div>
          </dl>
          <a
            href="https://wa.me/2348113677288"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants(),
              "mt-10 h-12 w-full gap-3 rounded-xl px-5 sm:w-auto",
            )}
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </section>

        <section
          aria-labelledby="send-message-heading"
          className="border-t border-border p-6 sm:p-10 lg:border-t-0 lg:border-l lg:p-12"
        >
          <h2
            id="send-message-heading"
            className="text-xs font-semibold tracking-[0.18em] text-primary sm:text-sm"
          >
            SEND US A MESSAGE
          </h2>
          <ContactForm />
        </section>
      </div>

      <section
        aria-labelledby="contact-care-heading"
        className="py-12 text-center sm:py-16"
      >
        <h2
          id="contact-care-heading"
          className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
        >
          Looking for healthcare support?
        </h2>
        <Link
          href="/request-care"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "mt-6 h-12 gap-3 rounded-xl px-6",
          )}
        >
          Request Care Instead{" "}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}
