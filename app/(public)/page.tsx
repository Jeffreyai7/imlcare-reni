import HomepageHero from "./components/hero";
import AboutIntro from "./components/about-intro";
import ServiceIntro from "./components/service-intro";

export default function HomePage() {
  return (
    <>
      <HomepageHero />
      <AboutIntro />
      <ServiceIntro />
    </>
  );
}
