import HeroSection from "../components/sectionHero";
import InfoSection from "../components/sectionInfo";
import AdSection from "../components/sectionAd";
import Categories from "../components/sectionCategory";

export default function Home() {
  return (
    <div className="container">
      <HeroSection />
      <InfoSection />
      <AdSection/>
      <Categories/>
    </div>
  );
}
