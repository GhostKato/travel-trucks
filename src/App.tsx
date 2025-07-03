import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TrucksCatalogPage from "./pages/TrucksCatalogPage/TrucksCatalogPage";
import { TrucksDetailsPage } from "./pages/TrucksDetailsPage/TrucksDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import TrucksFeatures from "./components/TrucksFeatures/TrucksFeatures";
import TrucksReviews from "./components/TrucksReviews/TrucksReviews";
import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<TrucksCatalogPage />} />

        <Route path="catalog/:id/" element={<TrucksDetailsPage />}>
          <Route index element={<Navigate to="features" replace />} />
          <Route path="features" element={<TrucksFeatures />} />
          <Route path="reviews" element={<TrucksReviews />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
