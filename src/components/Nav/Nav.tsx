import { useState } from "react";
import "./nav.scss";
import logo from "../../assets/img/logo-removebg-preview.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__box">
          <div className="nav__logo">
            <a href="#header">
              <img src={logo} alt="Logo" />
            </a>
          </div>

          {/* DESKTOP LINKS */}
          <ul className="nav__links">
            <li>
              <a href="#header" className="nav__link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="nav__link">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>

          {/* HAMBURGER */}
          <div
            className={`nav__burger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`nav__overlay ${menuOpen ? "show" : ""}`}>
        <div className="nav__modal">
          <a onClick={() => setMenuOpen(false)} href="#header">
            Home
          </a>
          <a onClick={() => setMenuOpen(false)} href="#about">
            About
          </a>
          <a onClick={() => setMenuOpen(false)} href="#skills">
            Skills
          </a>
          <a onClick={() => setMenuOpen(false)} href="#contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
