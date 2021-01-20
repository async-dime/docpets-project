import React from "react";
import Homes from "../components/Home";
import NavbarLogin from "../components/NavbarLogin"
import Footer from "../components/Footer"


function Profile() {
  return (
    <div className="home">
      <NavbarLogin/>
      <Homes />
      <Footer/>
    </div>
  );
}

export default Profile;
