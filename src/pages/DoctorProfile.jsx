import React from "react";
import NavbarLogin from "../components/NavbarLogin";
import Footer from "../components/Footer"
import DoctorProfile from '../components/DoctorProfile'

function Doctorpr() {
  return (
    <div className="home">
        <NavbarLogin />
        <DoctorProfile/>
        <Footer />
    </div>
  );
}

export default Doctorpr;
