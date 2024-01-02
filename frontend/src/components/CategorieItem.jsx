import React from "react";
import classes from "./CategorieItem.module.css";
export default function CategorieItem() {
  return (
    <div className={classes.container}>
      <img
        src="https://ci.jumia.is/cms/00---BF23/00/00XMAS/2.jpg"
        className={classes.image}
      />

      <div className={classes.name}>Catégorie</div>
    </div>
  );
}
