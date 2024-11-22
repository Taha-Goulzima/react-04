import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand m-2" to="/">
          Mon Application
        </NavLink>
        <div className="collapse navbar-collapse justify-content-end">
          <div className="navbar-nav">
            <NavLink to="/" className="nav-link m-2" >
              Accueil
            </NavLink>
            <NavLink to="/new" className="nav-link m-2">
              Nouveau Produit
            </NavLink>
            <NavLink to="/categories" className="nav-link m-2">
              Categories
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};
