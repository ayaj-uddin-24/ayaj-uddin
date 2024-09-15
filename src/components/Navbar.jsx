import React, { useState } from "react";

const Navbar = () => {
  const [state, setState] = useState("");

  return (
    <nav className="navbar navbar-expand-md navbar-dark py-2 position-sticky top-0" id="navbar">
      <div className="container">
        <h2>
          <span>&lt; </span>
          <span className="logo">Ayaj Uddin</span>
          <span> /&gt;</span>
        </h2>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav m-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link ${state === "home" ? "active" : ""}`}
                href="#"
                onClick={() => setState("home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${state === "service" ? "active" : ""}`}
                href="#services"
                onClick={() => setState("service")}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${state === "about" ? "active" : ""}`}
                href="#skills"
                onClick={() => setState("about")}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${state === "portfolio" ? "active" : ""}`}
                href="#projects"
                onClick={() => setState("portfolio")}
              >
                Portfolio
              </a>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <a href="#contact" className="btn common-btn">
              Contact Me
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
