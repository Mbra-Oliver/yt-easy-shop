import React from "react";
import NewArrivals from "../components/NewArrivals";
import LatestCategories from "../components/LatestCategories";
import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />

      <LatestCategories />

      <NewArrivals />
    </>
  );
}
