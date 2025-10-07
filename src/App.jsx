import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";

import './App.css'

import HomePage from "./pages/homepage/HomePage";
import AboutPage from "./pages/aboutpage/AboutPage";
import ProductsPage from "./pages/productspage/ProductsPage";
import ProductDetailsPage from "./pages/productdetailspage/ProductDetailsPage";
import ShoppingBag from "./pages/shoppingbag/ShoppingBag";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<AboutPage />} />
          <Route path="/prodotti">
            <Route index element={<ProductsPage />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
          <Route path="/carrello" element={<ShoppingBag />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
