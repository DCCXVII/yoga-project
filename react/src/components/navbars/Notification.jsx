import "./Navbar.css";

function Notification({ name, description, time, icon ,flag}) {
    return (
      <li>
        <a href="#">
        <div className="container-notification-card">
          <img
            src="https://res.cloudinary.com/dev-empty/image/upload/v1661230727/rquq94qv4bpuvf7xnxyh.jpg"
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
            <span className="dot">•</span>
            <span className="notification-time">{time}</span>
            <span className="notification-icon">{icon}</span>
          </div>
        </div>
        </a>
      </li>
    );
  }
  
  export default Notification;