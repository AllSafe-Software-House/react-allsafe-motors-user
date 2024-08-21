import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
import ExploreSection from "../components/ExploreSection/ExploreSection";
import FairPriceSection from "../components/FairPriceSection/FairPriceSection";
import HeroSection from "../components/HeroSection/HeroSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import VehiclesSection from "../components/VehiclesSection/VehiclesSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection/WhyChooseUsSection";

export default function Home() {
  return <main>
    {/* <HeroSection /> */}
    <ExploreSection />
    <FairPriceSection />
    <WhyChooseUsSection />
    <AboutUsSection />
    <ServicesSection />
    <VehiclesSection />
  </main>
}
