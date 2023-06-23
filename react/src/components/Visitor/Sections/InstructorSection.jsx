import React, { useRef } from "react";
import "./SectionsStyles/InstructorSection.css";
import pr1 from "../../../assets/pr1.jpg";
import pr2 from "../../../assets/pr2.jpg";
import pr3 from "../../../assets/pr3.jpg";
import pr4 from "../../../assets/pr4.jpg";
import pr5 from "../../../assets/pr5.jpg";
import pr6 from "../../../assets/pr6.jpg";
import arrow from "../../../assets/arrow.png"

import {AiOutlineArrowRight,AiOutlineArrowLeft} from "react-icons/ai";
const InstructorSection = () => {
  const productContainerRef = useRef(null);
  const nxtBtnRef = useRef(null);
  const preBtnRef = useRef(null);

  const handleNextButtonClick = () => {
    const containerWidth =
      productContainerRef.current.getBoundingClientRect().width;
    productContainerRef.current.scrollLeft += containerWidth;
  };

  const handlePrevButtonClick = () => {
    const containerWidth =
      productContainerRef.current.getBoundingClientRect().width;
    productContainerRef.current.scrollLeft -= containerWidth;
  };
  return (
    <div className="instru-div">
      <section className="prof">
        <h1 className="prof-category">Rencontrer nos Instructeurs</h1>
        <h2 className="subtitle">
          Renforcez vos capacités. Faites bouger votre corps. Respirez
          lentement. Notre équipe d'instructeurs d'élite vous fournira les
          outils dont vous avez besoin pour développer et atteindre tous vos
          objectifs de mise en forme et de bien-être.
        </h2>
        <div className="prof-cta">
          <button className="explore-instructors">Rencontrez nos instructeurs</button>
        </div>
        <button
          className="pre-btn"
          ref={preBtnRef}
          onClick={handlePrevButtonClick}
        >
          <img className="arrow" src={arrow}/>
        </button>
        <button
          className="nxt-btn"
          ref={nxtBtnRef}
          onClick={handleNextButtonClick}
        >
          <img className="arrow"
        src={arrow}/>
        </button>
        <div className="prof-container" ref={productContainerRef}>
          <div className="prof-card">
            <div className="prof-image">
              <img src={pr1} className="prof-thumb" alt="" />
            </div>
            <div className="prof-info">
              <h2 className="prof-name">Anny Leonhart</h2>
              <p className="prof-short-description">Yoga Instructeurs</p>
            </div>
          </div>
          <div className="prof-card">
            <div className="prof-image">
            <img src={pr2} className="prof-thumb" alt="" />
            </div>
            <div className="prof-info">
              <h2 className="prof-name">Mikasa Aker </h2>
              <p className="prof-short-description">Sophrologie Instructeurs</p>
            </div>
          </div>
          <div className="prof-card">
            <div className="prof-image">
            <img src={pr3} className="prof-thumb" alt="" />
            </div>
            <div className="prof-info">
              <h2 className="prof-name">Historia Ress</h2>
              <p className="prof-short-description">Yoga Instructeurs</p>
            </div>
          </div>
          <div className="prof-card">
            <div className="prof-image">
            <img src={pr4} className="prof-thumb" alt="" />
            </div>
            <div className="prof-info">
              <h2 className="prof-name">Kylian Mbappe</h2>
              <p className="prof-short-description">Power-Yoga Instructeurs</p>
            </div>
          </div>
          <div className="prof-card">
            <div className="prof-image">
            <img src={pr5} className="prof-thumb" alt="" />
            </div>
            <div className="prof-info">
              <h2 className="prof-name">Tasha Rodriguez</h2>
              <p className="prof-short-description">Dance-Flow Instructeurs</p>
            </div>
          </div>
          <div className="prof-card">
            <div className="prof-image">
            <img src={pr6} className="prof-thumb" alt="" />
            </div>
            <div className="prof-info">
              <h2 className="prof-name">Serena Waterson</h2>
              <p className="prof-short-description">Yin Instructeurs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstructorSection;
