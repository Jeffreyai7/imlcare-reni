import HomepageHero from "./components/hero";
import AboutIntro from "./components/about-intro";
import ServiceIntro from "./components/service-intro";
import WhyChooseUs from "./components/why-choose-us";

export default function HomePage() {
  return (
    <>
      <HomepageHero />
      <AboutIntro />
      <ServiceIntro />
      <WhyChooseUs />
    </>
  );
}
