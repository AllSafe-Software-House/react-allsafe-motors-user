// routes.jsx
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import CartPage from "./components/cart";
import Wishlist from "./components/wishlist";
import Shop from "./pages/shop";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
};

export default AppRoutes;
