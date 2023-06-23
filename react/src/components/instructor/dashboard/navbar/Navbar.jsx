import React from "react";
import NotificationsDropdown from "./NotificationDropDown";
import "./Navbar.css";
import {
  PersonFillIcon,
  PeopleIcon,
  SignOutIcon,
  GlobeIcon,
} from "@primer/octicons-react";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "../../../api/api";

function Navbar({ items, profile, Navlink, explore,home }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    Logout(); // Réinitialiser le token dans le contexte
    navigate("/signin");
    // Effectuer les autres actions de déconnexion nécessaires
  };

  return (
    <header className="general-header">
      <nav className="navbar">
        <div className="navbar__left">
          <h2 className="logo-instructor">
            <Link className="logo-instructor-link" to={home}>
              Yougik
            </Link>
          </h2>
        </div>

        <div className="navbar__centre">
          <ul className="nav-links">
            {explore.map((item, index) => (
              <li key={index} className="linka">
                <Link to={item.link}>
                  <div className="icon">{item.icon}</div>
                  <div>{item.name}</div>
                </Link>
                {item.dropdown && (
                  <ul className="dropdown d3">
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <li key={dropdownIndex}>
                        {dropdownItem.link ? (
                          <Link to={dropdownItem.link}>
                            <div className="container">
                              {dropdownItem.icon}
                              <span className="name">{dropdownItem.name}</span>
                            </div>
                          </Link>
                        ) : (
                          <a href="#" onClick={dropdownItem.onClick}>
                            <div className="container">
                              {dropdownItem.icon}
                              <span className="name">{dropdownItem.name}</span>
                            </div>
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar__right">
          <ul className="nav-links">
            {Navlink.map((linkItem, index) => (
              <li className="linka" key={index}>
                <Link to={linkItem.link}>
                  <div className="icon">{linkItem.icon}</div>
                  <div>{linkItem.text}</div>
                </Link>
              </li>
            ))}
            <NotificationsDropdown />
            <li className="linka">
              <Link>
                <div className="icon">
                  <PersonFillIcon size={22} />
                </div>
                <div>Profile</div>
              </Link>
              <ul className="dropdown d2">
                {profile.map((profile, index) => (
                  <li key={index}>
                    <Link to={profile.link}>
                      <div className="user-info">
                        <img src={profile.image} alt={profile.Username} />
                        <div className="info">
                          <span className="name">{profile.Username}</span>
                          <span className="email">{profile.email}</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}

                {items.map((item, index) => (
                  <li key={index}>
                    {item.link ? (
                      <Link to={item.link}>
                        <div className="container">
                          {item.icon}
                          <span className="name">{item.name}</span>
                        </div>
                      </Link>
                    ) : (
                      <a href="#" onClick={item.onClick}>
                        <div className="container">
                          {item.icon}
                          <span className="name">{item.name}</span>
                        </div>
                      </a>
                    )}
                  </li>
                ))}
                <li>
                  <a onClick={handleLogout}>
                    <div className="container">
                      <SignOutIcon size={18} className="new-icon" />
                      <span className="name">Log out</span>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <div className="lines">
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </header>
  );
}

export default Navbar;
