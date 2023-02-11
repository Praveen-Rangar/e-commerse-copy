import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductDetail from "./ProductDetail";
import { Routes, Route } from "react-router-dom";
import ProductListPage from "./ProductListPage";
import NotFound from "./NotFound";
import CartPage from "./CartPage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";

function App() {
  const localCartJson = localStorage.getItem("string-Cast") || "{}";
  const localCart = JSON.parse(localCartJson);
  console.log("localCart", localCart);

  const [cart, setCart] = useState(localCart);

  const onAddToCart = (productId, count) => {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    setCart(newCart);

    const stringCast = JSON.stringify(newCart);
    localStorage.setItem("string-Cast", stringCast);
  };

  const TotalCount = Object.keys(cart).reduce((previous, current) => {
    return previous + cart[current];
  }, 0);

  console.log("TotalCount", TotalCount);

  return (
    <div>
      <Navbar TotalCount={TotalCount} />
      <Routes>
        <Route index element={<ProductListPage />}></Route>
        <Route
          path="/products/:id/"
          element={<ProductDetail onAddToCart={onAddToCart} />}
        >
          {" "}
        </Route>

        <Route path="*" element={<NotFound />}></Route>
        <Route path="/CartPage" element={<CartPage cart={cart} />}></Route>
        <Route path="/SignUpPage" element={<SignUpPage />}></Route>
        <Route path="/LoginPage" element={<LoginPage />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
