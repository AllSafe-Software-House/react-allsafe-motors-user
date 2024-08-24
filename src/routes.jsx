// routes.jsx
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Vehicles from "./pages/Vehicles";
import VehicleDetails from "./pages/VehicleDetails";
import VehicleForm from "./pages/VehicleForm";
import ContactUs from "./pages/ContactUs";
import About from "./pages/about";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/service-Details" element={<ServiceDetails />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/vehicles/vehicle-details" element={<VehicleDetails />} />
      <Route path="/vehicles/vehicle-form" element={<VehicleForm />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;

