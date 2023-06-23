import React from "react";
import "./SectionsStyles/CourSection.css";

function CourSection(props) {
  return (
    <div className="cour-container">
      <section className="cour" />
      <div className="cour-text">
        <h1 className="cour-text-h1">Trouvez l'harmonie intérieure</h1>
        <p className="cour-text-paragraph">
          Découvrez les bienfaits de la pratique du yoga pour le corps et
          l'esprit sur notre site dédié à cette discipline millénaire. Que vous
          soyez débutant ou pratiquant confirmé, nous vous accompagnons dans
          votre cheminement pour atteindre une harmonie totale entre votre corps
          et votre esprit.
        </p>
        <a className="cour-cta" href="#">
          <button className="explore-cours">Explorer les cours</button>
        </a>
      </div>
    </div>
  );
}

export default CourSection;
