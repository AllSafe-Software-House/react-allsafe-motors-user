import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import AppRoutes from "./routes";
import Navbar from "./components/Navbar/Navbar";
import MenuContextProvider from "./context/SideMenuContext";
import TranslateProvider from "./context/TranslateContext";
import { ReactLenis, useLenis } from 'lenis/react'
import Footer from "./components/Footer/Footer";
import { useLocation } from "react-router-dom";
function App() {
  const { i18n } = useTranslation();
  // const storedLanguage = JSON.parse(localStorage.getItem("lang")) || "en";
  // const currentLanguage = i18n.language;
  const location = useLocation()
  const  isLocation = location.pathname.includes('contact-us')
  const lang = localStorage.getItem('lang')
  useEffect(()=>{
    i18n.changeLanguage(lang)
  },[])
  return (
    <TranslateProvider>
      <MenuContextProvider>
        <ReactLenis root>
          <div dir={lang == 'en'? 'ltr':"rtl"} className="App overflow-x-hidden">
            <Navbar />
            <AppRoutes />
            <Footer prod={!isLocation}/>
          </div>
        </ReactLenis>
      </MenuContextProvider>
    </TranslateProvider>
  );
}

export default App;
