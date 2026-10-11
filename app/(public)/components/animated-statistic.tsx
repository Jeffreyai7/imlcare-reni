"use client";

import CountUp from "react-countup";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribe(callback: () => void) {
  const preference = window.matchMedia(motionQuery);
  preference.addEventListener("change", callback);
  return () => preference.removeEventListener("change", callback);
}

export default function AnimatedStatistic({ value }: { value: string }) {
  const target = useRef<HTMLSpanElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribe, () => window.matchMedia(motionQuery).matches, () => true);
  const end = Number(value.replaceAll(",", "").replace(/\+$/, ""));
  const suffix = value.endsWith("+") ? "+" : "";

  useEffect(() => {
    const element = target.current;
    if (!element) return;
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setHasEntered(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <span className="sr-only">{value}</span>
      <span ref={target} aria-hidden="true">
        {reducedMotion ? value : hasEntered ? <CountUp end={end} duration={2.5} separator="," suffix={suffix} /> : `0${suffix}`}
      </span>
    </>
  );
}
