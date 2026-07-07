import Hero from "../../components/common/Hero";
import Features from "../../components/common/Features";
import HowItWorks from "../../components/sections/HowItWorks";
import TechStack from "../../components/sections/TechStack";
import Stats from "../../components/sections/Stats";
import Founder from "../../components/sections/Founder";
import CTA from "../../components/sections/CTA";
import Pricing from "../../components/sections/Pricing";
import FAQ from "../../components/sections/FAQ";

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <TechStack />
      <Stats />
      <Founder />
      <CTA />
      <Pricing />
      <FAQ />
    </>
  );
}

export default HomePage;