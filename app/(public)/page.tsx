import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-semibold text-primary">Impact Lives Care</h1>
      <p className="max-w-2xl text-muted-foreground">Explore our care services and tell us about the support you need.</p>
      <Link href="/request-care" className="inline-flex rounded-lg bg-primary px-5 py-3 text-primary-foreground">Request care</Link>
    </section>
  );
}
