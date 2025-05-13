import "./Banner.scss";
import bannerImage from "../../assets/banner3.webp";

export default function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Bannière" />
    </div>
  );
}