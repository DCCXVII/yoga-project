import React, { useRef, useEffect, useState } from "react";
import {ArrowRightIcon} from "@primer/octicons-react";
import "./SliderControlle.css";
import { fetchInstructors } from "../../api/api"; // Import the fetchInstructors function
import { Link } from "react-router-dom";
const SliderControlle = ({title}) => {
  const productContainerRef = useRef(null);
  const nxtBtnRef = useRef(null);
  const preBtnRef = useRef(null);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchInstructorsData = async () => {
      try {
        const data = await fetchInstructors();
        setInstructors(data);
      } catch (error) {
        console.error("Error fetching instructors:", error);
      }
    };

    fetchInstructorsData();
  }, []);

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

  const renderInstructorCards = () => {
    return instructors.map((instructor) => (
      <div className="controlle-slider-prof-card" key={instructor.id}>
        <Link to={`/user/instructors/${instructor.id}`}>
          <div className="controlle-slider-prof-image">
            <img src={instructor.img_url} className="prof-thumb" alt="" />
          </div>
          <div className="controlle-slider-prof-info">
            <h2 className="controlle-slider-prof-name">{instructor.name}</h2>
          </div>
        </Link>
      </div>
    ));
  };

  return (
    <div className="controlle-slider-div">
    <h2 className="controlle-slider-titre">{title}</h2>
      <section className="controlle-slider-prof">
        <button
          className="controlle-slider-pre-btn"
          ref={preBtnRef}
          onClick={handlePrevButtonClick}
        >
          <ArrowRightIcon className="arrow" size={25} />
        </button>
        <button
          className="controlle-slider-nxt-btn"
          ref={nxtBtnRef}
          onClick={handleNextButtonClick}
        >
           <ArrowRightIcon className="arrow" size={25} />
        </button>
        <div className="controlle-slider-prof-container" ref={productContainerRef}>
          {renderInstructorCards()}
        </div>
      </section>
    </div>
  );
};

export default SliderControlle;
