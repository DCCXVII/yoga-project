import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import instagram from "../../assets/instagram.png";

function Footer(props) {
  return (
    <div>
      <footer className="footer">
        <ul className="footer-menu">
          <li>
            <a href="" className="footer-links">
              Contactez-Nous
            </a>
          </li>
          <li>
            <a href="" className="footer-links">
              Nos Événements
            </a>
          </li>
          <li>
            <a href="" className="footer-links">
              Les Coures
            </a>
          </li>
          <li>
            <a href="" className="footer-links">
              Nos Instructeurs
            </a>
          </li>
          <li>
            <a href="" className="footer-links">
              Rejoignez les lives
            </a>
          </li>
          <li>
            <a href="" className="footer-links">
              À propos de nous
            </a>
          </li>
          <li>
            <Link to="/user/become-instructor" className="footer-links">
            devenir instructeur!
            </Link>
          </li>
        </ul>
        <div className="social-icons">
          <a href="#">
            <img src={facebook} className=" icon" />
          </a>
          <a href="#">
            <img src={instagram} className="icon" />
          </a>
          <a href="#">
            <img src={twitter} className=" icon" />
          </a>
          <a href="#">
            <img src={youtube} className=" icon" />
          </a>
        </div>
        <p className="copyrights">© 2023 Yogamar. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
