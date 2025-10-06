import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ProductsPage from "./pages/products/ProductsPage";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/chi-siamo" Component={AboutPage} />
        <Route path="/prodotti" Component={ProductsPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
