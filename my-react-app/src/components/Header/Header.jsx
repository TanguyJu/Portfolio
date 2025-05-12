import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">ACCUEIL</Link></li>
          <li><Link to="/projects">REALISATIONS</Link></li>
          <li><Link to="/skills">COMPETENCES</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
          <li>
            <a href="/assets/CV_Tanguy.pdf" target="_blank" rel="noopener noreferrer">
              MON CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}