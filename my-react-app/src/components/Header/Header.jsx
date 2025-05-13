import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logoTJ.webp";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="header__branding" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Logo Tanguy Julien" className="header__logo" />
              <h1 className="header__title">Tanguy Julien</h1>
        </NavLink>

        <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><NavLink to="/" end onClick={closeMenu}>ACCUEIL</NavLink></li>
            <li><NavLink to="/projects" onClick={closeMenu}>RÉALISATIONS</NavLink></li>
            <li><NavLink to="/skills" onClick={closeMenu}>COMPÉTENCES</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>CONTACT</NavLink></li>
            <li>
              <a
                href="/TanguyCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                MON CV
              </a>
            </li>
          </ul>
        </nav>

        <div className={`header__burger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}