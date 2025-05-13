import { Link } from "react-router-dom";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Oups, cette page n'existe pas...</p>
      <Link to="/" className="notfound__link">Retour à l'accueil</Link>
    </div>
  );
}