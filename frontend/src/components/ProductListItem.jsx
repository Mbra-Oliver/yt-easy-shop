import React from "react";

export default function ProductListItem() {
  return (
    <div className="best-p1">
      <img src="https://i.postimg.cc/fbnB2yfj/na1.png" alt="img" />
      <div className="best-p1-txt">
        <div className="name-of-p">
          <p>PS England T-Shirt</p>
        </div>
        <div className="rating">
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
        </div>
        <div className="price">
          &dollar;10.23
          <div className="colors">
            <i className="bx bxs-circle blank"></i>
            <i className="bx bxs-circle blue"></i>
            <i className="bx bxs-circle brown"></i>
          </div>
        </div>
        <div className="buy-now">
          <button>
            <a href="https://codepen.io/sanketbodke/full/mdprZOq">Commander</a>
          </button>
        </div>
      </div>
    </div>
  );
}
