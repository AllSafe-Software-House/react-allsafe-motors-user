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
import Loading from "../components/Loading/Loading";
import { fetchContactUsData } from "../redux/slices/contactSlice";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  let { data, isLoading, error } = useSelector(({ homeData }) => homeData);
  let dispatch = useDispatch()
  const { arLang } = useContext(TranslateContext);
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(fetchHomeSlice())
    if (error) {
      toast.error(error);
  }
  }, []);
  useEffect(() => {
    dispatch(fetchHomeSlice())
    if (error) {
      toast.error(error);
  }
  }, [arLang])
  return <main>
    <Toaster />
    {isLoading? <Loading /> : 
    <>
    <HeroSection />
    <ExploreSection data={data?.data?.Brand}/>
    <FairPriceSection data={data?.data?.About}/>
    <WhyChooseUsSection data={data?.data?.Choose}/>
    <AboutUsSection data={data?.data?.Explorer}/>
    <ServicesSection data={data?.data?.Services}/>
    <VehiclesSection data={data?.data?.Productes}/>
    </>
    }
  </main>
}
