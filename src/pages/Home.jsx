import React from "react";
import HeaderLogin from "../components/NavbarLogin";
import Homes from "../components/Home";
import Footer from "../components/Footer";

function Home () {
  return (
    <div >
      <HeaderLogin />
      <Homes />
      <Footer />
    </div>
  );
}

export default Home;
