import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logoTJ.webp"

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__branding">
        <img src={logo} alt="Logo Tanguy Julien" className="header__logo" />
        <h1 className="header__title">Tanguy Julien</h1>
        </div>
        <nav className="header__nav">
          <ul>
            <li><NavLink to="/" end>ACCUEIL</NavLink></li>
            <li><NavLink to="/projects">RÉALISATIONS</NavLink></li>
            <li><NavLink to="/skills">COMPÉTENCES</NavLink></li>
            <li><NavLink to="/contact">CONTACT</NavLink></li>
            <li>
              <a href="/TanguyCV.pdf" target="_blank" rel="noopener noreferrer">
                MON CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}