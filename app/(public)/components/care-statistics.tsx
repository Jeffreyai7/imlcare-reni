import AnimatedStatistic from "./animated-statistic";

// Placeholder figures. Replace these values with verified totals before launch.
const statistics = [
  { value: "50+", label: "Patients supported" },
  { value: "120+", label: "Home care visits" },
  { value: "20+", label: "Care professionals" },
  { value: "80+", label: "Families supported" },
];

export default function CareStatistics() {
  return (
    <section
      aria-labelledby="care-statistics-heading"
      className="rounded-2xl border border-primary/10 bg-card px-6 py-8 sm:px-10 sm:py-10"
    >
      <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
        <h2
          id="care-statistics-heading"
          className="text-xs font-semibold tracking-[0.18em] text-primary sm:text-sm"
        >
          CARE THAT MAKES A DIFFERENCE
        </h2>
        {/* <p className="text-xs text-muted-foreground">
          Sample figures for preview.
        </p> */}
      </div>
      <dl className="grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 lg:gap-8">
        {statistics.map(({ value, label }) => (
          <div
            key={label}
            className="flex min-w-0 flex-col gap-2 border-l-2 border-primary/15 pl-4 sm:pl-5"
          >
            <dt className="order-2 text-sm leading-relaxed text-muted-foreground">
              {label}
            </dt>
            <dd className="order-1 text-[clamp(1.75rem,4vw,3rem)] leading-none font-semibold tracking-tight text-brand-magenta tabular-nums">
              <AnimatedStatistic value={value} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
