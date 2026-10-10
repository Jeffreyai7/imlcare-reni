"use client";

import { useMemo, useSyncExternalStore, type ReactNode } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@/components/ui/carousel";

const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribe(callback: () => void) {
  const preference = window.matchMedia(motionQuery);
  preference.addEventListener("change", callback);
  return () => preference.removeEventListener("change", callback);
}

export default function ServiceCarousel({ children }: { children: ReactNode }) {
  const reducedMotion = useSyncExternalStore(subscribe, () => window.matchMedia(motionQuery).matches, () => true);
  const autoplay = useMemo(() => Autoplay({
    active: !reducedMotion,
    delay: 4500,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    stopOnFocusIn: true,
  }), [reducedMotion]);

  return (
    <Carousel data-reveal opts={{ align: "start", loop: true, slidesToScroll: 1 }} plugins={[autoplay]} aria-label="Home care services" className="mt-10 min-w-0">
      {children}
    </Carousel>
  );
}
