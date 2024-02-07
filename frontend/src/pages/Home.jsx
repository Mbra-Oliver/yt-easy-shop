import React from "react";
import HeroSection from "../components/Hero";

import ProductsList from "../components/Products/ProductsList";
import CategoriesList from "../components/Categories/CategoriesList";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Les catégories */}

      <CategoriesList />

      {/* Lister les articles */}

      <ProductsList />
    </>
  );
}
