import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Shop from "../pages/Shop";
import Singup from "../pages/Singup";
import ProtectedRoute from "./ProtectedRoute";
import Sofa from "../pages/categories/sofa";
import Mobile from "../pages/categories/mobile";
import Chair from "../pages/categories/chair";
import Wireless from "../pages/categories/wireless";
import Watch from "../pages/categories/watch";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"home"} />} />

      <Route path="home" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route
        path="checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="shop/" element={<Shop />} />
      <Route path="shop/sofa" element={<Sofa />} />
      <Route path="shop/mobile" element={<Mobile />} />
      <Route path="shop/chair" element={<Chair />} />
      <Route path="shop/wireless" element={<Wireless />} />
      <Route path="shop/watch" element={<Watch />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="singup" element={<Singup />} />
    </Routes>
  );
};

export default Routers;
