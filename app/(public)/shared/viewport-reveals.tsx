"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function ViewportReveals({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const container = root.current;
    if (!container || !("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = Array.from(container.querySelectorAll<HTMLElement>("section, [data-reveal], article"))
      .filter(element => !element.matches(".homepage-hero") && !element.closest(".homepage-hero")
        && !element.querySelector("section, [data-reveal], article") && !element.closest("form"));
    const animations = new Set<Animation>();
    const reveal = (element: HTMLElement, animate: boolean) => {
      element.removeAttribute("data-reveal-pending");
      observer.unobserve(element);
      if (!animate || preference.matches) return;
      const animation = element.animate([
        { opacity: 0, transform: "translateY(24px)" },
        { opacity: 1, transform: "translateY(0)" },
      ], { duration: 700, delay: Number(element.dataset.revealDelay || 0), easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" });
      animations.add(animation);
      animation.onfinish = () => animations.delete(animation);
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) reveal(entry.target as HTMLElement, true);
      });
    }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });
    const reset = () => {
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
      targets.forEach(element => element.removeAttribute("data-reveal-pending"));
      if (preference.matches) return;
      targets.forEach(element => {
        // Keep already visible content steady when hydrating or navigating back.
        if (element.getBoundingClientRect().top < window.innerHeight) return;
        element.setAttribute("data-reveal-pending", "");
        observer.observe(element);
      });
    };
    const onFocus = (event: FocusEvent) => {
      const element = (event.target as HTMLElement).closest<HTMLElement>("[data-reveal-pending]");
      if (element) reveal(element, false);
    };
    reset();
    preference.addEventListener("change", reset);
    container.addEventListener("focusin", onFocus);
    return () => {
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      targets.forEach(element => element.removeAttribute("data-reveal-pending"));
      preference.removeEventListener("change", reset);
      container.removeEventListener("focusin", onFocus);
    };
  }, [pathname]);

  return <div ref={root} className="contents">{children}</div>;
}
