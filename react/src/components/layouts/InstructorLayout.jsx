import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Navbar from "../instructor/dashboard/navbar/Navbar";
import { token, userData } from "../api/api";
import {
  HomeIcon,
  PlayIcon,
  DiffAddedIcon,
  ProjectIcon,
  CalendarIcon,
  FileDirectoryIcon,
  DeviceCameraVideoIcon 
} from "@primer/octicons-react";

function InstructorLayout() {
  if (!token || userData.role != "instructor") {
    try {
      return <Navigate to="/signin" />;
    } catch (error) {
      console.log(error);
    }
  }

  const Navlink = [
    {
      icon: <HomeIcon size={22} />,
      text: "Explore",
      link: "/instructor",
    },
    {
      icon: <PlayIcon size={22} />,
      text: "Classes",
      link: "/instructor/dashboard/courses",
    },
  ];

  const location = useLocation();
  const profile = [
    {
      Username: userData.name,
      email: userData.email,
      image: userData.image,
      link: "/instructor/profile"
    },
  ];

  const dropdownItems = [
    {
      link: "/instructor/dashboard/courses",
      icon: <PlayIcon size={18} className="new-icon" />,
      name: "Mes Classes",
    },
    {
      link: "/instructor/dashboard/courses/create",
      icon: <DiffAddedIcon size={18} className="new-icon" />,
      name: "Nouveau Classe",
    },
    {
      link: "/instructor/dashboard/packs",
      icon: <FileDirectoryIcon size={18} className="new-icon" />,
      name: "les Packs",
    },
    {
      link: "/instructor/dashboard/create-live",
      icon: <DeviceCameraVideoIcon  size={18} className="new-icon" />,
      name: "Live",
    },
    {
      link: "/instructor",
      icon: <ProjectIcon size={18} className="new-icon" />,
      name: "Reports",
    },
    {
      link: "#",
      icon: <CalendarIcon size={18} className="new-icon" />,
      name: "Session de Consultation",
    },
  ];
  const Exploredata = [];

  return (
    <>
      <Navbar
        items={dropdownItems}
        profile={profile}
        Navlink={Navlink}
        explore={Exploredata}
        home="/instructeur"
      />
      <Outlet key={location.pathname} location={location} />
    </>
  );
}

export default InstructorLayout;
