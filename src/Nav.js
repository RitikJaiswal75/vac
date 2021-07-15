import React from "react";
import Ritik from "./Ritik.jpeg";
function Nav() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
            <img src={Ritik} alt="Logo" width="30" className="d-inline-block align-text-top" />
             &nbsp;Ritik's Assignment
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-4">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="./">
              <i class="uil uil-estate"></i>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./about">
              <i class="uil uil-user-square"></i>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./contact">
              <i class="uil uil-message"></i>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
