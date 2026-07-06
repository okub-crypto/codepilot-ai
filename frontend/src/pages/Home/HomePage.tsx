import Hero from "../../components/common/Hero";
import Features from "../../components/common/Features";
import HowItWorks from "../../components/sections/HowItWorks";
import TechStack from "../../components/sections/TechStack";

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <TechStack />
    </>
  );
}

export default HomePage;