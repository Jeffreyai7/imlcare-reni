"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeartHandshake, Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-background">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-6 lg:h-24">
        <Link href="/" aria-label="Impact Lives Care home" className="flex items-center gap-2.5 rounded-md text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/8"><HeartHandshake className="size-6" aria-hidden="true" /></span>
          <span className="text-sm font-bold tracking-[0.06em] sm:text-base">IMPACT LIVES CARE</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={cn("rounded-sm text-sm font-medium transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring", pathname === href ? "text-primary" : "text-muted-foreground")}>{label}</Link>
          ))}
          <Link href="/request-care" className={cn(buttonVariants(), "h-11 rounded-xl px-6")}>Request Care</Link>
        </nav>
        <Sheet>
          <SheetTrigger render={<Button variant="outline" size="icon" className="size-10 lg:hidden" />} aria-label="Open navigation menu"><Menu className="size-5" aria-hidden="true" /></SheetTrigger>
          <SheetContent>
            <SheetHeader className="px-6 pt-12">
              <SheetTitle className="text-primary">Impact Lives Care</SheetTitle>
              <SheetDescription>Care that comes to you.</SheetDescription>
            </SheetHeader>
            <nav aria-label="Mobile navigation" className="flex flex-col gap-2 px-6">
              {links.map(({ href, label }) => (
                <SheetClose key={href} render={<Link href={href} />} aria-current={pathname === href ? "page" : undefined} className={cn("rounded-lg px-4 py-3 text-base font-medium hover:bg-secondary", pathname === href && "bg-secondary text-primary")}>{label}</SheetClose>
              ))}
              <SheetClose render={<Link href="/request-care" />} className={cn(buttonVariants(), "mt-4 h-12 rounded-xl")}>Request Care</SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

