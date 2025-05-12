import "./Home.scss";
import Banner from "../components/Banner/Banner";

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <section className="home__intro">
        <h2>PRÉSENTATION</h2>
        <div className="home__separator"></div>
        <p>
          Bonjour, je m'appelle Tanguy Julien, j'ai 29 ans et je me lance dans le développement web.
          <br /><br />
          Après une reconversion réfléchie, je me suis formé aux technologies modernes du web.
          Je sais créer des sites web responsives et des applications en utilisant HTML, CSS, JavaScript et React.
          Je maîtrise également les bases de données NoSQL avec MongoDB, ce qui me permet de développer des projets complets, côté front-end comme back-end.
          <br /><br />
          Mon objectif : continuer à apprendre, relever des défis techniques, et construire des solutions utiles, performantes et accessibles.
          Ici, vous trouverez mes projets, mes compétences et comment me contacter.
        </p>
      </section>
    </div>
  );
}