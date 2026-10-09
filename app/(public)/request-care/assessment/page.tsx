import type { Metadata } from "next";
import AssessmentForm from "./assessment-form";

export const metadata: Metadata = { title: "Patient Assessment | Impact Lives Care", description: "Tell us about your care needs with a guided five-step patient assessment." };

export default function CareAssessmentPage() {
  return (
    <section aria-labelledby="assessment-heading" className="pb-8">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <p className="text-xs font-semibold tracking-[0.18em] text-primary">CARE THAT STARTS WITH YOU</p>
        <h1 id="assessment-heading" className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Patient assessment</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">A few details help us understand the support you or your loved one needs.</p>
      </div>
      <AssessmentForm />
    </section>
  );
}
