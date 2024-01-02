import React from "react";
import classes from "./ProductListItem.module.css";
import { IoCart } from "react-icons/io5";

export default function ProductListItem({ mode }) {
  let content = (
    <div className="best-p1">
      <img src="https://i.postimg.cc/fbnB2yfj/na1.png" alt="img" />
      <div className="best-p1-txt">
        <div>
          <div className="name-of-p">
            <p className="text-center mb-1">PS England T-Shirt</p>
          </div>
          <div className="text-center">97.555 FCFA</div>
        </div>

        <div className="buy-now">
          <button>
            <IoCart /> <span>Ajouter au panier</span>
          </button>
        </div>
      </div>
    </div>
  );

  if (mode === "LIST") {
    return (
      <div className={classes.list_container}>
        <div className="flex gap-1">
          <img src="https://i.postimg.cc/fbnB2yfj/na1.png" alt="img" />
          <div
            className={`${classes.descriptionLimit} flex flex-col items-start`}
          >
            <p className={`${classes.titleProduct}`}>PS England T-Shirt</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            </p>
          </div>
        </div>
        <div className={classes.right_width}>
          <div>
            <div className="name-of-p"></div>
            <div className="text-center">97.555 FCFA</div>
          </div>

          <div className={classes.list_btn_ui}>
            <button>
              <IoCart /> <span>Ajouter au panier</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <>{content}</>;
}
