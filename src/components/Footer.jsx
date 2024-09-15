import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5" id="footer">
      <div id="head">
        <h4>Ayaj's Portfolio</h4>
        <p className="small m-auto">
          Thank you for visiting my portfolio! I'm Ayaj Uddin Tanif, a passionate MERN
          stack developer ready to bring your ideas to life. Let's collaborate
          and build something great together.
        </p>

        <ul className="d-flex justify-content-center small">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="container text-md-start">
        <hr className="mb-4" />
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="text-center text-md-start">
              © 2024 Copyright
              <a href="#">
                <strong> Ayaj Uddin Tanif</strong>
              </a>
            </p>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-end">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/profile.php?id=61551861402110"
                    target="_blank"
                    className="btn-floating btn-sm text-white me-3"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.instagram.com/ayaj_uddin_24/"
                    target="_blank"
                    className="btn-floating btn-sm text-white me-3"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/ayaj-uddin-4587342a8/"
                    target="_blank"
                    className="btn-floating btn-sm text-white me-3"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://github.com/ayaj-uddin-24"
                    target="_blank"
                    className="btn-floating btn-sm text-white"
                  >
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
