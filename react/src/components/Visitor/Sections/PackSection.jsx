import React from "react";
import "./SectionsStyles/PackSection.css";

function PackSection(props) {
  return (
    <>
      <section className="pack" />
      <div className="pack-text">
        <h1 className="subscribe-title">Abonnez-vous maintenant à nos offres</h1>
        <p className="subscribe-title-paragraph">
          Améliorez votre santé physique et mentale avec nos cours de yoga et
          rejoignez notre communauté de passionnés de yoga et commencez votre
          parcours de bien-être dès aujourd'hui en vous abonnant à nos offres de
          cours.
        </p>
        <div className="pack-cta" href="#">
          <button className="btn-discover">DÉCOUVREZ NOS PACKS</button>
        </div>
      </div>
    </>
  );
}

export default PackSection;
