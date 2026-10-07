export default function CareAssessmentPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold text-primary">Care Assessment</h1>
      <ol className="flex flex-wrap gap-4 text-sm">
        <li className="rounded-lg bg-secondary px-4 py-3">1. Contact details</li>
        <li className="rounded-lg bg-secondary px-4 py-3">2. Care needs</li>
        <li className="rounded-lg bg-secondary px-4 py-3">3. Review</li>
      </ol>
      <p className="text-muted-foreground">The multi-step assessment form is coming soon. No information is collected on this page yet.</p>
    </section>
  );
}
