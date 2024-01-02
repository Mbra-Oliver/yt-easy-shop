import React from "react";
import { NavLink } from "react-router-dom";
import { IoCart } from "react-icons/io5";

export default function MainNavigation() {
  return (
    <>
      <section className=" top-txt ">
        <div className="head container ">
          <div className="head-txt ">
            <p>
              Livraison rapide avec possibilité de retour en 3 jours. Satisfait
              ou remboursé .
            </p>
          </div>
          <div className="sing_in_up ">
            <a href="# ">ME CONNECTER</a>
            <a href="# ">M'INSCRIRE</a>
          </div>
        </div>
      </section>
      <nav className="navbar">
        <div className="navbar-container">
          <input type="checkbox" name="" id="checkbox" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/products">Nos Produits</NavLink>
            </li>
            <li className="flex items-center cursor-pointer">
              <IoCart />
              <span>Panier</span>
            </li>
          </ul>
          <div className="logo">
            {/* <img src="https://i.postimg.cc/TP6JjSTt/logo.webp" alt="" /> */}
          </div>
          <div className="flex items-center gap-1">
            <input
              placeholder="rechercher"
              style={{
                padding: "0.5rem",
                border: "1px solid #f2f2f2",
                borderRadius: "5px",
              }}
            />

            <button
              style={{
                backgroundColor: "var(--primary-color)",
                padding: "0.5rem",
                border: "none",
                borderRadius: "5px",
                color: "white",
              }}
            >
              Rechercher
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
