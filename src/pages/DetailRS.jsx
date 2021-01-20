import React from "react";
import NavbarLogin from "../components/NavbarLogin";
import Footer from "../components/Footer"
import DetailrsContent from "../components/DetailRSContent"

function Detailrs() {
  return (
    <div className="home">
        <NavbarLogin />
        <DetailrsContent/>
        <Footer />
    </div>
  );
}

export default Detailrs;
