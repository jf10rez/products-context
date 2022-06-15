import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link " + (isActive ? "active" : "")
            }
            to="/"
          >
            Productos
          </NavLink>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link " + (isActive ? "active" : "")
              }
              to="/historial"
            >
              Historial de compras
            </NavLink>
          </li>
        </ul>
        <div className="navbar-collapse justify-content-end pr-3">
          <i 
              className="nav-item"
          >
            <NavLink
                className="bi bi-cart"
                style={{color: 'white'}}
                to="/car"
              >
              </NavLink>
          </i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
