import React from "react";
import ListRS from "../components/ListRS";
import NavbarLogin from "../components/NavbarLogin"
import Footer from "../components/Footer"

function Listrs() {
  return (
    <div className="home">
        <NavbarLogin/>
        <ListRS />
        <Footer/>

    </div>
  );
}

export default Listrs;
