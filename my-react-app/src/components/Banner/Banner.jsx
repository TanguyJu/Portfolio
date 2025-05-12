import "./Banner.scss";
import bannerImage from "../../assets/banner3.jpg"; // adapte le nom du fichier si besoin

export default function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Bannière" />
    </div>
  );
}