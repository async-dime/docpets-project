import React from "react";
import UserProfiles from "../components/UserProfile";
import NavBarLogin from "../components/NavbarLogin";
import Footer from "../components/Footer";

function User () {
    return (
      <div className="home">
          <NavBarLogin/>
          <UserProfiles />
          <Footer/>
      </div>
    );
  }
  
  export default User;
  