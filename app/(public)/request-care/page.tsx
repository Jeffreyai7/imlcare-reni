import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ClipboardList, HeartHandshake, CalendarClock } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import PageBanner from "../shared/page-banner";

export const metadata: Metadata = { title: "Request Care | Impact Lives Care", description: "Start a guided assessment to help Impact Lives Care understand your healthcare support needs." };

const preparation = [
  { icon: ClipboardList, title: "Patient information", text: "Contact details, home address and an emergency contact." },
  { icon: HeartHandshake, title: "Care and health needs", text: "The support needed, daily routines and known care requirements." },
  { icon: CalendarClock, title: "Your preferred schedule", text: "When care should start and how often support is needed." },
];

export default function RequestCarePage() {
  return (
    <>
      <PageBanner id="request-care-heading" eyebrow="REQUEST CARE">Care begins with<br />understanding.</PageBanner>
      <section aria-labelledby="start-assessment-heading" className="mx-auto max-w-4xl pb-12 text-center">
        <h2 id="start-assessment-heading" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Tell us what care looks like for you.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">Our five-step assessment helps you describe the person who needs care, their daily living and health needs, and a preferred schedule. You can review and edit everything before finishing.</p>
        <ul className="mt-10 grid gap-8 border-y border-border py-8 text-left sm:grid-cols-3">
          {preparation.map(({ icon: Icon, title, text }) => <li key={title}><Icon className="size-6 text-primary" aria-hidden="true" /><h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></li>)}
        </ul>
        <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground"><strong className="text-foreground">UI preview:</strong> please use sample information. Online submissions are not open yet, and nothing is saved or sent.</p>
        <Link href="/request-care/assessment" className={cn(buttonVariants({ variant: "emphasis" }), "mt-6 h-12 gap-3 rounded-xl px-7")}>Start Assessment <ArrowRight className="size-4" aria-hidden="true" /></Link>
      </section>
    </>
  );
}
