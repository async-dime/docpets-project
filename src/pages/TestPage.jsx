import React from "react";
import NavBarLogin from "../components/NavbarLogin";
import ModalAddPet from "../components/ModalAddPet";
import Footer from "../components/Footer";



function TestPage() {
  return (
    <div className="home">
      <NavBarLogin />
      <ModalAddPet />
      <Footer/>
    </div>
  );
}

export default TestPage;
