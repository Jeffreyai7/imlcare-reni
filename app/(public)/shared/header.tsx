"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import BrandLogo from "./brand-logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
        <Link
          href="/"
          aria-label="Impact Lives Care home"
          className="flex items-center gap-2.5 rounded-md text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <BrandLogo />
        </Link>
        <div className="flex items-center gap-3 lg:gap-6">
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={cn(
                "rounded-sm text-[1rem] font-medium transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
                pathname === href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/request-care"
            className={cn(buttonVariants(), "h-11 rounded-xl px-6")}
          >
            Request Care
          </Link>
        </nav>
        <ThemeToggle />
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="size-10 lg:hidden"
              />
            }
            aria-label="Open navigation menu"
          >
            <Menu className="size-5" aria-hidden="true" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="px-6 pt-12">
              <BrandLogo className="mb-3 size-24 lg:size-24" />
              <SheetTitle className="sr-only">
                Impact Lives Care navigation
              </SheetTitle>
              <SheetDescription>Care that comes to you.</SheetDescription>
            </SheetHeader>
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col gap-2 px-6"
            >
              {links.map(({ href, label }) => (
                <SheetClose
                  key={href}
                  render={<Link href={href} />}
                  aria-current={pathname === href ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-medium hover:bg-secondary",
                    pathname === href && "bg-secondary text-primary",
                  )}
                >
                  {label}
                </SheetClose>
              ))}
              <SheetClose
                render={<Link href="/request-care" />}
                className={cn(buttonVariants(), "mt-4 h-12 rounded-xl")}
              >
                Request Care
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  );
}
