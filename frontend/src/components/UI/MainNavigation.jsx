const MainNavigation = () => {
  return (
    <>
      {/*Top Top header */}
      <section className="top-txt">
        <div className="head container">
          <div className="head-txt">
            <p>
              Livraison rapide avec possibilité de retourn en 3 jours. Satisfait
              ou satisfait !
            </p>
          </div>

          <div className="sing_in_up">
            <a href="/">ME CONNECTER</a>
            <a href="/">M'INSCRIRE</a>
          </div>
        </div>
      </section>

      {/*Fin Top header */}

      <nav className="navbar">
        <div className="navbar-container">
          <input type="checkbox" id="checkbox" />

          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>

          <ul className="menu-items">
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/">Nos produits</a>
            </li>
            <li>
              <a href="/">Mon profile</a>
            </li>
            <li>
              <a href="/">Panier</a>
            </li>
          </ul>

          <div className="logo"></div>

          <div className="flex items-center gap-1">
            <input
              placeholder="rechercher..."
              className="search-topbar-input"
            />
            <button
              className="btn-search"
              style={{
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
};

export default MainNavigation;
