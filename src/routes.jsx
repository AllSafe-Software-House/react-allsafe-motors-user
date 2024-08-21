// routes.jsx
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/service-Details" element={<ServiceDetails />} />
    </Routes>
  );
};

export default AppRoutes;

