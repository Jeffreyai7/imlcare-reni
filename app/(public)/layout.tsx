import Link from "next/link";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/contact", "Contact"],
  ["/request-care", "Request Care"],
] as const;

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="border-b bg-card">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl flex-wrap items-center gap-6 px-6 py-5">
          <Link href="/" className="mr-auto font-semibold text-primary">Impact Lives Care</Link>
          {links.map(([href, label]) => <Link key={href} href={href} className="text-sm hover:text-primary">{label}</Link>)}
        </nav>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">{children}</main>
      <footer className="border-t px-6 py-6 text-center text-sm text-muted-foreground">Impact Lives Care</footer>
    </>
  );
}
