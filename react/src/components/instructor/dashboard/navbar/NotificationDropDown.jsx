import "./Navbar.css";
import Notification from "./Notification";
import { BellIcon, UnreadIcon, GoalIcon } from "@primer/octicons-react";

function NotificationsDropdown() {
  const notifications = [
    {
      name: "ELYASS HAFIDI",
      description: "Une session de yoga therapie live a commencee.",
      time: "3 min ",
      icon: <UnreadIcon size={16} />,
      link : "https://meet.jit.si/yoga-therapie"
    },
    {
      name: "John Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "3 hours ago",
      icon: <GoalIcon size={16} />,
      link: ""
    },
  ];

  return (
    <li className="linka">
      <a href="#about">
        <div className="icon">
          <BellIcon size={22} />
        </div>
        <div>Notification</div>
      </a>
      <ul className="dropdown d1">
        {notifications.map((notification, index) => (
          <Notification key={index} {...notification} />
        ))}
      </ul>
    </li>
  );
}

export default NotificationsDropdown;
