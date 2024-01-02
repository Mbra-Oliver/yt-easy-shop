import React from "react";
import classes from "./ProductFilter.module.css";
export default function ProductFilter() {
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <div className={classes.padding}>
          <h3>Catégories</h3> <br />
          <span>Filtrer par catégorie</span>
        </div>
      </div>
    </div>
  );
}
