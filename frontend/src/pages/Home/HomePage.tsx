import Pricing from "../../components/sections/Pricing";
import Hero from "../../components/common/Hero";
import Features from "../../components/common/Features";
import HowItWorks from "../../components/sections/HowItWorks";
import TechStack from "../../components/sections/TechStack";
import Stats from "../../components/sections/Stats";
import Founder from "../../components/sections/Founder";
import CTA from "../../components/sections/CTA";

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
    </>
  );
}

export default HomePage;