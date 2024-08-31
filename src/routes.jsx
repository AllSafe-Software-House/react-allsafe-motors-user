// routes.jsx
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/home";
import ServiceDetails from "./pages/ServiceDetails";
import Services from "./pages/Services";
import VehicleDetails from "./pages/VehicleDetails";
import VehicleForm from "./pages/VehicleForm";
import Vehicles from "./pages/Vehicles";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/service-Details/:id" element={<ServiceDetails />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/vehicles/vehicle-details/:id" element={<VehicleDetails />} />
      <Route path="/vehicles/vehicle-form" element={<VehicleForm />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;

