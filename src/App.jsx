import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";

import './App.css'
import HomePage from "./pages/homepage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/chi-siamo" Component={AboutPage} />
          <Route path="/prodotti" Component={ProductsPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
