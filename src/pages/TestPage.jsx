import React from "react";
import NavBarLogin from "../components/NavbarLogin";
import ModalAddPet from "../components/ModalAddPet";
import Footer from "../components/Footer";
import ModalSuccessBook from "../components/ModalSuccessBook";



function TestPage() {
  return (
    <div className="home">
      <NavBarLogin />
      <ModalAddPet />
      <ModalSuccessBook />
      <Footer/>
    </div>
  );
}

export default TestPage;
