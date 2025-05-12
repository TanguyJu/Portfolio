import "./Footer.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>&copy; {new Date().getFullYear()} Tanguy Julien, Tous droits réservés.</p>
        <div className="footer__links">
          <a href="https://github.com/TanguyJu" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/tanguy-julien/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}