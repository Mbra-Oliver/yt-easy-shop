import React from "react";

export default function Hero() {
  return (
    <section id="home">
      <div className="home_page ">
        <div className="home_img ">
          <img src="https://i.postimg.cc/t403yfn9/home2.jpg" alt="img" />
        </div>
        <div className="home_txt ">
          <p className="collectio ">RARE COLLECTION</p>
          <h2>
            MEILLEURS PRODUITS
            <br />
            Collection 2024
          </h2>
          <div className="home_label ">
            <p>
              Chaque semaine plus de 200 membres ajoutent de nouveaux articles.
              <br />
              Visiter le salon pour voir les produits les plus rares qu'ils vous
              proposent.
            </p>
          </div>
          <button>
            <a href="#sellers">VISITER MAINTENANT</a>
            <i className="bx bx-right-arrow-alt"></i>
          </button>
          <div className="home_social_icons">
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#">
              <i className="bx bxl-pinterest"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
