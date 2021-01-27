import React from "react";
import NavbarLogin from "../components/NavbarLogin";
import Footer from "../components/Footer"
import ClinicProfile from '../components/ClinicProfile'

function Clinic() {
  return (
    <div className="home">
        <NavbarLogin />
        <ClinicProfile/>
        <Footer />
    </div>
  );
}

export default Clinic;
