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
    const selector = "h1, h2, h3, h4, h5, h6, p, dt, li";
    const targets = Array.from(container.querySelectorAll<HTMLElement>(selector))
      .filter(element => !element.querySelector(selector) && !element.closest("form, [aria-live], [role=alert]"));
    const revealed = new WeakSet<HTMLElement>();
    const animations = new Map<HTMLElement, Animation>();
    const groupCounts = new Map<Element, number>();
    const delays = new Map<HTMLElement, number>();
    targets.forEach(element => {
      const group = element.closest("section, footer") || container;
      const index = groupCounts.get(group) || 0;
      delays.set(element, (index % 4) * 70);
      groupCounts.set(group, index + 1);
    });

    const reveal = (element: HTMLElement, animate: boolean) => {
      element.removeAttribute("data-reveal-pending");
      observer.unobserve(element);
      revealed.add(element);
      if (!animate || preference.matches) return;
      const animation = element.animate([
        { opacity: 0, transform: "translateY(32px)" },
        { opacity: 1, transform: "translateY(0)" },
      ], {
        duration: 800,
        delay: delays.get(element) || 0,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "backwards",
      });
      animations.set(element, animation);
      animation.onfinish = () => animations.delete(element);
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) reveal(entry.target as HTMLElement, true);
      });
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });

    const reset = () => {
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
      targets.forEach(element => element.removeAttribute("data-reveal-pending"));
      targets.forEach(element => {
        if (preference.matches || element.getBoundingClientRect().bottom <= 0) {
          revealed.add(element);
          return;
        }
        if (revealed.has(element)) return;
        element.setAttribute("data-reveal-pending", "");
        observer.observe(element);
      });
    };
    const onFocus = (event: FocusEvent) => {
      const focused = event.target as HTMLElement;
      const pending = focused.closest<HTMLElement>("[data-reveal-pending]");
      if (pending) reveal(pending, false);
      animations.forEach((animation, element) => {
        if (element.contains(focused)) {
          animation.cancel();
          animations.delete(element);
        }
      });
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
