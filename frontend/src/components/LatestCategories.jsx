import React from "react";
import classes from "./latestCategories.module.css";
import ProductListItem from "./ProductListItem";
import CategorieItem from "./CategorieItem";
export default function LatestCategories() {
  return (
    <>
      <div className={classes.latest}>
        <div className={classes.header}>Catégories populaires</div>
        <div className={classes.latestCategories}>
          <CategorieItem />
          <CategorieItem />
          <CategorieItem />
          <CategorieItem />
          <CategorieItem />
          <CategorieItem />
        </div>
      </div>
    </>
  );
}
