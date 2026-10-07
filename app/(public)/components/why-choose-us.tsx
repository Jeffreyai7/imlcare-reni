const carePrinciples = [
  { number: "01", firstLine: "Vetted &", secondLine: "Professional" },
  { number: "02", firstLine: "Person-", secondLine: "Centred" },
  { number: "03", firstLine: "Flexible", secondLine: "Support" },
  { number: "04", firstLine: "Delivered", secondLine: "With Care" },
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
      <div className="mx-auto max-w-4xl">
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

        <ol className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/20 pt-10 sm:mt-14 sm:pt-12 md:grid-cols-4 md:gap-8">
          {carePrinciples.map(({ number, firstLine, secondLine }) => (
            <li key={number}>
              <span aria-hidden="true" className="text-sm font-semibold tracking-[0.12em] text-pink-300">
                {number}
              </span>
              <h3 className="mt-4 text-lg leading-snug font-medium tracking-tight text-white sm:text-xl">
                {firstLine}
                <br />
                {secondLine}
              </h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
