import { useContext, useEffect } from "react";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
import ExploreSection from "../components/ExploreSection/ExploreSection";
import FairPriceSection from "../components/FairPriceSection/FairPriceSection";
import HeroSection from "../components/HeroSection/HeroSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import VehiclesSection from "../components/VehiclesSection/VehiclesSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection/WhyChooseUsSection";
import { useDispatch, useSelector } from "react-redux";
import { TranslateContext } from "../context/TranslateContext";
import { fetchHomeSlice } from "../redux/slices/homeSlice";

export default function Home() {
  let { data, isLoading, error } = useSelector(({ homeData }) => homeData);
  const { arLang } = useContext(TranslateContext);
  let dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(fetchHomeSlice())
  }, []);
  useEffect(() => {
    dispatch(fetchHomeSlice())
  }, [arLang])
  return <main>
    <HeroSection />
    <ExploreSection />
    <FairPriceSection />
    <WhyChooseUsSection />
    <AboutUsSection />
    <ServicesSection />
    <VehiclesSection />
  </main>
}
