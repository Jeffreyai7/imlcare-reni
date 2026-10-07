import HomepageHero from "./components/hero";
import AboutIntro from "./components/about-intro";
import ServiceIntro from "./components/service-intro";
import WhyChooseUs from "./components/why-choose-us";
import GettingStarted from "./components/getting-started";

export default function HomePage() {
  return (
    <>
      <HomepageHero />
      <AboutIntro />
      <ServiceIntro />
      <WhyChooseUs />
      <GettingStarted />
    </>
  );
}
