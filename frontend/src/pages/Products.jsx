import React, { useState } from "react";
import ProductFilter from "../components/ProductFilter";
import { IoGrid, IoList } from "react-icons/io5";

import classes from "./Products.module.css";
import ProductListItem from "../components/ProductListItem";
export default function ProductsPage() {
  const [displayMode, setDisplayMode] = useState("GRID");

  const handleChangePreview = (mode) => {
    setDisplayMode(mode);
  };
  return (
    <>
      <div className={classes.container_flex}>
        <div className={classes.w_30}>
          {displayMode}
          <ProductFilter />
        </div>
        <div className={classes.w_70}>
          <div className={classes.total_result_preview}>
            <div>15 résultats</div>
            <div className="flex items-center gap-1">
              <IoList
                size={15}
                className="cursor-pointer"
                onClick={() => handleChangePreview("LIST")}
              />
              <IoGrid
                size={15}
                className="cursor-pointer"
                onClick={() => handleChangePreview("GRID")}
              />
            </div>
          </div>

          <div
            className={
              displayMode === "GRID"
                ? "best-seller best-seller-3"
                : classes.productListMode
            }
          >
            <ProductListItem mode={displayMode} />
            <ProductListItem mode={displayMode} />
            <ProductListItem mode={displayMode} />
            <ProductListItem mode={displayMode} />
            <ProductListItem mode={displayMode} />
            <ProductListItem mode={displayMode} />
          </div>
        </div>
      </div>
    </>
  );
}
