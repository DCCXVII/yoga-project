import React from "react";
import "./SectionsStyles/MouveSection.css";
import {AiOutlineArrowRight} from "react-icons/ai";
import course1 from "../../../assets/course1.jpg";
import course2 from "../../../assets/course2.jpg";
import course3 from "../../../assets/course3.jpg";
import course4 from "../../../assets/course4.jpg";
import course5 from "../../../assets/course5.jpg";
function MouveSection(props) {
  return (
    <section className="mouvs" id="mouvs">
      <h1 className="title">IDENTIFIEZ CE QUI VOUS MOUVE</h1>
      <h2 className="subtitle">
        Avec des milliers de cours pour le corps et l'esprit, vous pouvez vivre
        toute l'expérience du studio à la maison, que vous soyez un débutant
        absolu ou que vous souhaitiez faire progresser votre routine.
      </h2>
      <div className="content">
        <div className="mouv-card">
          <div className="mouv-image">
           <img src={course4}/>
          </div>
          <div className="mouv-title">
            <p className="mouv-category">YOGA CLASSES</p>
            <strong className="mouv-info">
              <span>
                Transformez votre corps et votre esprit avec la pratique du yoga
              </span>
            </strong>
          </div>
        </div>
        <div className="mouv-card">
          <div className="mouv-image">
            <img src={course1} />
          </div>
          <div className="mouv-title">
            <p className="mouv-category">SOPHROLOGIE</p>
            <strong className="mouv-info">
              <span>
                Débloquez la paix intérieure et l'harmonie la sophrologie
                transformatrices
              </span>
            </strong>
          </div>
        </div>
        <div className="mouv-card">
          <div className="mouv-image">
            <img src={course2} />
          </div>
          <div className="mouv-title">
            <p className="mouv-category">YOGA THERAPIE</p>
            <strong className="mouv-info">
              <span>
                Pratiquer la thérapie du yoga et améliorer votre bien-être dès
                maintenant!
              </span>
            </strong>
          </div>
        </div>
        <div className="mouv-card">
          <div className="mouv-image">
            <img src={course3}/>
          </div>
          <div className="mouv-title">
            <p className="mouv-category">YOGA POWER</p>
            <strong className="mouv-info">
              <span>
                Yoga pour libérer la puissance de votre corps et de votre esprit
              </span>
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MouveSection;
