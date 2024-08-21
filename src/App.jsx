import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import AppRoutes from "./routes";
import Navbar from "./components/Navbar/Navbar";
import MenuContextProvider from "./context/SideMenuContext";
import TranslateProvider from "./context/TranslateContext";

function App() {
  const { i18n } = useTranslation();
  // const storedLanguage = JSON.parse(localStorage.getItem("lang")) || "en";
  // const currentLanguage = i18n.language;



  return (
    <TranslateProvider>
      <MenuContextProvider>
        <div className="App">
          <Navbar />
          <AppRoutes />
        </div>
      </MenuContextProvider>
    </TranslateProvider>
  );
}

export default App;
