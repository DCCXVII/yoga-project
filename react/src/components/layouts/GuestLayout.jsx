import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../instructor/dashboard/navbar/Navbar";
import SignIn from "../SignIn/SignIn";
import Header from "../Visitor/Header";
import Footer from "../Footer/Footer";
function GuestLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default GuestLayout;
