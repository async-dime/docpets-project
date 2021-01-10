import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";
import banner from "./assets/img/dogbanner.png";
import logo from "./assets/img/docpets.png";
import "./RoleForm.scss";
import clinic1 from "./assets/img/clinic-selected.svg"
import clinic2 from "./assets/img/clinic-unselect.svg"
import user1 from "./assets/img/user-selected.svg"
import user2 from "./assets/img/user-unselect.svg"

const SignUpForm = () => {
  const [isUser, setIsUser] = useState("");
  const handleChooseClinic = () => {
    setIsUser("admin");
    localStorage.setItem("role", "admin");
  };

  const handleChooseUser = () => {
    setIsUser("user");
    localStorage.setItem("role", "user");
  };

  console.log(localStorage.getItem("role", "<==this is role"));

  return (
    <div className="role-form-container">
      <div className="item-left">
        <img src={banner} alt="dog-banner" className="dog-banner"></img>
        <div>
          <img
            src={logo}
            style={{ height: "100px" }}
            alt=""
            className="docpets-logo"
          ></img>
        </div>
      </div>

      <div className="item-right">
        <header>
          <div className="navbar-containers">
            <div className="navbar-right">
              <Link to={`/`} className="navbar-text-h6">
                <h6>Home</h6>
              </Link>
              <Link to={`/doctor`} className="navbar-text-h6">
                <h6>Doctor</h6>
              </Link>
              <Link to={`/clinic`} className="navbar-text-h6">
                <h6>Search Clinic</h6>
              </Link>
              <Link to="/signin">
                <Button
                  className="btn border-0 pr-3 pl-3 ml-2"
                  style={{ backgroundColor: "#fde84d", color: "#445E6B" }}
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </header>
        <div className="form-containers">
          <div className="role-form">
            <h2 className="role-text">Pilih Role Kamu</h2>
            <h6 className="role-text">
              Daftarkan Dirimu Untuk Menggunakan Aplikasi Ini
            </h6>
            <Row
              className="justify-content-around align-items-center"
              style={{ textAlign: "center" }}
            >
              <Col lg="3" sm='12'>
                <button
                  value="clinic"
                  className="role-icon"
                  onClick={handleChooseClinic}
                >
                  <img
                    className="mt-4 mb-2"
                    src={isUser == 'admin' ? clinic1 : clinic2}
                    alt="clinic button"
                  ></img>
                </button>
                <h2 className="role-text" id="text-clinic">Clinic</h2>
              </Col>
              <Col lg="3" sm='12'>
                <button
                  value="patient"
                  className="role-icon"
                  onClick={handleChooseUser}
                >
                  <img
                    className="mt-4 mb-2"
                    src={isUser == 'user' ? user1 : user2}
                    alt="patient button"
                  ></img>
                </button>
                <h2 className="role-text" id="text-patient">Patient</h2>
              </Col>
            </Row>
              <Link to="/signup/form">
                <Button
                  type="submit"
                  className="btn btn-block-role"
                >
                  Selanjutnya
                </Button>
              </Link>

              <h6 className="role-text-down">
                Already have an account? Please
                <Link to="/signin" className="signin-text">
                  {" "}
                  Sign In
                </Link>
              </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
