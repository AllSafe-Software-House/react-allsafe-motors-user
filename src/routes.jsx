// routes.jsx
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Vehicles from "./pages/Vehicles";
import VehicleDetails from "./pages/VehicleDetails";
import VehicleForm from "./pages/VehicleForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/service-Details" element={<ServiceDetails />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/vehicles/vehicle-details" element={<VehicleDetails />} />
      <Route path="/vehicles/vehicle-form" element={<VehicleForm />} />
    </Routes>
  );
};

export default AppRoutes;

