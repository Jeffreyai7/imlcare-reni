import AboutIntro from "./components/about-intro";
import ServiceIntro from "./components/service-intro";
import WhyChooseUs from "./components/why-choose-us";
import GettingStarted from "./components/getting-started";
import HomepageHero from "./components/hero";

export default function HomePage() {
  return (
    <>
      <HomepageHero />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12 has-[section[aria-labelledby=hero-heading]]:py-0">
        <AboutIntro />
        <WhyChooseUs />
        <ServiceIntro />
        <GettingStarted />
      </main>
    </>
  );
}
