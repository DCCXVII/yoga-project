import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Notification({ name, description, time, icon, flag, link }) {
  return (
    <li>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="container-notification-card">
          <img
            src="https://d2lesx9toesny3.cloudfront.net/normal_334efd36-2eb0-4c0b-ad68-76dff09cb0fd.jpg"
            alt={name}
            className="img-avatar"
          />
          <div className="notification-details">
            <span className="notification-description">
              <span className="notification-name">{name}</span>
              <span className="notification-description-textarea">
                {description}
              </span>
            </span>
            <span className="notification-time">{time}</span>
            <span className="notification-icon">{icon}</span>
          </div>
        </div>
      </a>
    </li>
  );
}

export default Notification;
