import React from "react";
import ProductListItem from "./ProductListItem";

export default function NewArrivals() {
  return (
    <>
      <div className="seller container">
        <h2>Nouveautés</h2>
        <div className="best-seller">
          <ProductListItem />
          <ProductListItem />
          <ProductListItem />
          <ProductListItem />
        </div>
      </div>
    </>
  );
}
