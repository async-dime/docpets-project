import React from "react";
import NavbarLogin from "../components/NavbarLogin";
import Footer from "../components/Footer";
import HistoryUser from '../components/fullHisAppoint';


function ApptHst() {
    return (
      <div className="home">
          <NavbarLogin />
          <HistoryUser />
          <Footer />
      </div>
    );
  }
  
  export default ApptHst;