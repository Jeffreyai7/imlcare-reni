import Link from "next/link";
import PageBanner from "./page-banner";

export type LegalSection = { id: string; title: string; paragraphs: string[] };

export default function LegalPage({ title, description, sections, related }: { title: string; description: string; sections: LegalSection[]; related: { href: string; label: string } }) {
  return (
    <>
      <PageBanner id="legal-heading" eyebrow="IMPACT LIVES CARE">{title}</PageBanner>
      <main className="mx-auto max-w-6xl px-6 pb-20 sm:pb-24">
        <div className="grid items-start gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
          <nav aria-label={`${title} contents`} className="rounded-2xl border border-border bg-card p-6 lg:sticky lg:top-28">
            <p className="text-xs font-semibold tracking-widest text-primary">ON THIS PAGE</p>
            <ul className="mt-5 space-y-3">
              {sections.map(section => <li key={section.id}><a href={`#${section.id}`} className="rounded-sm text-sm leading-relaxed text-muted-foreground hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">{section.title}</a></li>)}
            </ul>
          </nav>
          <div className="min-w-0 max-w-3xl">
            <p className="text-sm text-muted-foreground">Last updated: <time dateTime="2026-10-10">10 October 2026</time></p>
            <p className="mt-5 text-lg leading-relaxed text-body-text">{description}</p>
            <div className="mt-10 space-y-10">
              {sections.map(section => (
                <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-28 border-t border-border pt-7">
                  <h2 id={`${section.id}-heading`} className="text-xl font-semibold tracking-tight sm:text-2xl">{section.title}</h2>
                  {section.paragraphs.map(paragraph => <p key={paragraph} className="mt-4 text-base leading-relaxed text-muted-foreground">{paragraph}</p>)}
                </section>
              ))}
            </div>
            <div className="mt-12 rounded-2xl border border-primary/15 bg-surface-purple p-6 sm:p-8">
              <h2 className="text-xl font-semibold">Questions or concerns?</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">Contact Impact Lives Care Ltd at <a href="mailto:admin@imlcare.com" className="font-medium text-primary underline underline-offset-4">admin@imlcare.com</a> or call <a href="tel:+2348113677288" className="font-medium text-primary underline underline-offset-4">+234 811 367 7288</a>.</p>
              <Link href={related.href} className="mt-5 inline-block font-medium text-primary underline underline-offset-4">{related.label}</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
