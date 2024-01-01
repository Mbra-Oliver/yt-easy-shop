import React from "react";

export default function MainNavigation() {
  return (
    <>
      <section className=" top-txt ">
        <div className="head container ">
          <div className="head-txt ">
            <p>Free shipping, 30-day return or refund guarantee.</p>
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
              <a href="#home">Accueil</a>
            </li>
            <li>
              <a href="#sellers">Nouveautés</a>
            </li>
            <li>
              <a href="#news">Ma zone</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="logo">
            {/* <img src="https://i.postimg.cc/TP6JjSTt/logo.webp" alt="" /> */}
          </div>
        </div>
      </nav>
    </>
  );
}
