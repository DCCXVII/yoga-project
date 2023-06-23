import React, { useState, useEffect } from "react";
import "./Sections/SectionsStyles/Header.css";
import axios from "axios";
import { BsPeople, BsCalendarEvent, BsCompass } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
function Header(props) {
  const [SiderNav, setSiderNav] = useState(false);
  const [siderNavActive, setSiderNavActive] = useState(false);

  const [instructors, setInstructors] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/instructors")
      .then((response) => {
        const { data } = response;
        const limitedInstructors = data.instructors.slice(0, 6);
        setInstructors(limitedInstructors);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <header className="visitor-header">
        <h2 className="visitor-logo">
          <Link className="visitor-logo-link" to="">
            Yougik
          </Link>
        </h2>
        <nav className="visitor-nav">
          <ul
            className={
              SiderNav ? "visitor-nav-links-respo" : "visitor-nav-links"
            }
            onClick={() => setSiderNav(false)}
          >
            <li className="visitor-linka">
              <div className="dropdown-toggle" onClick={handleDropdownToggle}>
                <Link to="/explore/Instructors">
                  <div className="visitor-icon">
                    <BsPeople />
                  </div>
                  <div className="visitor-linka-items">Instructeurs</div>
                </Link>
              </div>
              {showDropdown && (
                <ul className="dropdown1">
                  {instructors.map((instructor, index) => (
                    <li key={index}>
                      <Link className="instructor-links" to={`/explore/instructors/${instructor.id}`}>
                        <img
                          className="circle-photo"
                          src={instructor.img_url}
                          alt={instructor.name}
                        />
                        <br />
                        <span>{instructor.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="visitor-linka">
              <a href="#">
                <div className="visitor-icon">
                  <BsCompass />
                </div>
                <div className="visitor-linka-items">Explore</div>
              </a>
              <ul className="dropdown2">
                <li>
                  <Link className="classes-links" to="/explore/Courses">
                    Classes
                  </Link>
                </li>
                <li>
                  <Link className="classes-links" to="explore/Packs">
                    Packs
                  </Link>
                </li>
              </ul>
            </li>

            <li className="visitor-linka">
              <Link to="/events">
                <div className="visitor-icon">
                  <BsCalendarEvent />
                </div>
                <div className="visitor-linka-items">Événements</div>
              </Link>
              <ul className="dropdown3">
                <li>
                  <a className="events-links" href="#">
                    Événement 1
                  </a>
                </li>
                <li>
                  <a className="events-links" href="#">
                    Événement 2
                  </a>
                </li>
                <li>
                  <a className="events-links" href="#">
                    Événement 3
                  </a>
                </li>
              </ul>
            </li>
            <li className="visitor-linka-res">
              <Link to="signin">
                <div className="visitor-linka-res">S'inscrire</div>
              </Link>
            </li>
            <li className="visitor-linka-res">
              <Link to="signup">
                <div className="visitor-linka-res">
                  Commencer votre essai gratuit
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="cta-div">
          <Link className="cta" to="/signin">
            <button className="inscription-button">S'identifier</button>
          </Link>
        </div>

        <div
          className={`lines ${siderNavActive ? "" : "active"}`}
          onClick={() => {
            setSiderNavActive(!siderNavActive);
            setSiderNav(!SiderNav);
          }}
        >
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </header>
    </>
  );
}

export default Header;
