import { ShieldCheck, UserRound, CalendarClock, HeartHandshake } from "lucide-react";

const carePrinciples = [
  { icon: ShieldCheck, title: "Vetted & Professional", description: "Care from vetted healthcare professionals." },
  { icon: UserRound, title: "Person-Centred", description: "Support shaped around you and your needs." },
  { icon: CalendarClock, title: "Flexible Support", description: "From occasional visits to ongoing care." },
  { icon: HeartHandshake, title: "Delivered With Care", description: "Compassion and dignity in every interaction." },
];

export default function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-choose-us-heading"
      className="relative isolate py-20 text-white sm:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 -right-6 -left-6 -z-10 bg-brand-purple-dark"
      />
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <h2
            id="why-choose-us-heading"
            className="text-3xl leading-tight font-semibold tracking-tight text-white sm:text-4xl"
          >
            Why families choose
            <br /> Impact Lives Care.
          </h2>
          <p className="mt-6 text-xl font-medium tracking-tight text-white sm:text-2xl">
            Care shouldn&apos;t feel generic.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            We pair vetted healthcare professionals with individuals and
            families, building care around the person rather than a template.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 border-t border-white/15 pt-10 sm:grid-cols-2 sm:mt-14 sm:pt-12 lg:grid-cols-4">
          {carePrinciples.map(({ icon: Icon, title, description }) => (
            <li key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="flex size-12 items-center justify-center rounded-xl bg-white/10 text-purple-200 ring-1 ring-white/10">
                <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg leading-snug font-semibold tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
