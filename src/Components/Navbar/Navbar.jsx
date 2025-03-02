import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top py-4">
        <div className="container">
          <NavLink
            className="navbar-brand text-white text-uppercase fw-bolder fs-2"
            to={""}
          >
            start framework
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <NavLink
                className="nav-link text-white text-uppercase fw-bold mt-3 me-3 mt-md-0 px-2"
                aria-current="page"
                to={"About"}
              >
                About
              </NavLink>
              <NavLink
                className="nav-link text-white text-uppercase fw-bold mt-3 me-3 mt-md-0 px-2"
                to={"Portfolio"}
              >
                Portfolio
              </NavLink>
              <NavLink
                className="nav-link text-white text-uppercase fw-bold mt-3 me-3 mt-md-0 px-2"
                to={"Contact"}
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
