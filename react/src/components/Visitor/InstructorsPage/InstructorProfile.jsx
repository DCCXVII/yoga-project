import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import {
  FiFacebook,
  FaFacebookF,
  AiFillInstagram,
  AiOutlineInstagram,
  TfiTwitterAlt,
  TfiTwitter,
} from "react-icons/all";
import "./style/InstructorProfile.css";
import GreyCover from "../../GreyCover/GreyCover";

const InstructorProfile = () => {
  const [instructor, setInstructor] = useState(null);
  const [loading, setLoading] = useState(true);
  const bgOverlayRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/instructors"
        );
        const instructors = response.data.instructors;
        const foundInstructor = instructors.find(
          (instructor) => instructor.id === parseInt(id)
        );

        if (foundInstructor) {
          setInstructor(foundInstructor);
        } else {
          console.log("Instructor not found");
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!instructor) {
    return <div>Instructor not found</div>;
  }

  return (
    <>
    <div className="profiles-container">
      <div className="profiles-background-image">
        <img
          src={instructor.background_img}
          className="profiles-background-image"
        />
        <div className="bg-overlay" ref={bgOverlayRef}></div>
        <div className="profiles-name">
          <h2>{instructor.name}</h2>
          <div className="social-link-container">
            <a className="social-links" href="">
              <FiFacebook className="social-icon" />
              <FaFacebookF className="social-icon-hover" />
            </a>
            <a className="social-links" href="">
              <AiOutlineInstagram className="social-icon" />
              <AiFillInstagram className="social-icon-hover" />
            </a>
            <a className="social-links" href="">
              <TfiTwitter className="social-icon" />
              <TfiTwitterAlt className="social-icon-hover" />
            </a>
          </div>
        </div>
      </div>

      <div className="profiles-info profiles-info-left">
        <div className="profiles-image">
          <img
            src={instructor.img_url}
            alt="Profile Image"
            className="profiles-image-img"
          />
        </div>
        <div className="consultation2">
          <button className="consultation2-btn2">Prendre consultation</button>
        </div>
        <div className="profiles-description">
          <p>{instructor.description}</p>
        </div>
      </div>
    </div>

    <GreyCover title={`Plus de cours de`} paragraph={`${instructor.name}`}/>
    </>
  );
};

export default InstructorProfile;
