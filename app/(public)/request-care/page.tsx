import Link from "next/link";

export default function RequestCarePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold text-primary">Request Care</h1>
      <p className="text-muted-foreground">The assessment will cover your contact details, care needs, and a review of your answers.</p>
      <Link href="/request-care/assessment" className="inline-flex rounded-lg bg-primary px-5 py-3 text-primary-foreground">View assessment</Link>
    </section>
  );
}
