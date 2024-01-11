import React from "react";
import { Form, NavLink, useLoaderData } from "react-router-dom";
import { IoCart } from "react-icons/io5";

export default function MainNavigation() {
  const token = useLoaderData();

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
          {!token && (
            <div className="sing_in_up">
              <NavLink to="/login">ME CONNECTER</NavLink>
              <NavLink to="/register">M'INSCRIRE</NavLink>
            </div>
          )}
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
            {token && (
              <>
                <li>
                  <NavLink to="/products">Mon Profile</NavLink>
                </li>
                <li>
                  <Form action="/logout" method="post">
                    <button className="logout_btn_ui"> Me déconnecter</button>
                  </Form>
                </li>
              </>
            )}
            <li className="flex items-center cursor-pointer">
              <IoCart />
              <span>Panier</span>
            </li>
          </ul>
          <div className="logo">
            {/* <img src="https://i.postimg.cc/TP6JjSTt/logo.webp" alt="" /> */}
          </div>
          <div className="flex items-center gap-1">
            <input placeholder="rechercher" className="search-topbar-input" />

            <button className="btn-search">Rechercher</button>
          </div>
        </div>
      </nav>
    </>
  );
}
