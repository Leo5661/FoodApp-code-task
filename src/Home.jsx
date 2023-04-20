import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App/App";
import Cart from "./pages/cart/Cart";

function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/placeOrder" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
