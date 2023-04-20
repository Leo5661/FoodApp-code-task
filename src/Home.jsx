import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App/App";
import Cart from "./pages/cart/Cart";
import CountContext from "./context/CountContext";

function Home() {
  const totalCurentItemCount = useState(0);

  return (
    <BrowserRouter>
      <CountContext.Provider value={totalCurentItemCount}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/placeOrder" element={<Cart />} />
        </Routes>
      </CountContext.Provider>
    </BrowserRouter>
  );
}

export default Home;
