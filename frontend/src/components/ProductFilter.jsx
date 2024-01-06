import React from "react";
import classes from "./ProductFilter.module.css";
export default function ProductFilter() {
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <div className={classes.padding}>
          <h3 className="border-b pb-1 mb-1">Catégories</h3>
          <p className="">Aucune catégorie enregistrer.</p>
        </div>
      </div>
    </div>
  );
}
