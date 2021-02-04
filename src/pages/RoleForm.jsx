import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";
import banner from "../components/assets/img/dogbanner.png";
import logo from "../components/assets/img/docpets.png";
import "./RoleForm.scss";
import clinic1 from "../components/assets/img/clinic-selected.svg";
import clinic2 from "../components/assets/img/clinic-unselect.svg";
import user1 from "../components/assets/img/user-selected.svg";
import user2 from "../components/assets/img/user-unselect.svg";

const SignUpForm = () => {
    const token = localStorage.getItem("token");
    let role = localStorage.getItem("role");
    const [isUser, setIsUser] = useState("");

    const handleChooseClinic = () => {
        setIsUser("admin");
        localStorage.setItem("role", "klinik");
    };

    const handleChooseUser = () => {
        setIsUser("user");
        localStorage.setItem("role", "user");
    };


    return (
        <div className="role-form-container">
            <div className="item-left">
                <img
                    src={banner}
                    alt="dog-banner"
                    className="dog-banner"
                    data-aos="fade-right"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-cubic"
                ></img>
                <div>
                    <img
                        src={logo}
                        style={{ height: "100px" }}
                        alt=""
                        className="docpets-logo"
                        data-aos="fade-down"
                        data-aos-delay="100"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in"
                    ></img>
                </div>
            </div>

            <div className="item-right">
                <header>
                    <div
                        className="navbar-containers"
                        data-aos="fade-left"
                        data-aos-delay="400"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in"
                    >
                        <div className="navbar-right">
                            <Link to={`/`} className="navbar-text-h6">
                                <h6>Home</h6>
                            </Link>
                            {token && role === ("klinik" || "admin") ? (
                                <Link
                                    to={`/doctorprofile`}
                                    className="navbar-text-h6"
                                >
                                    <h6>Doctor</h6>
                                </Link>
                            ) : (
                                <Link
                                    to={`/unauthorized`}
                                    className="navbar-text-h6"
                                >
                                    <h6>Doctor</h6>
                                </Link>
                            )}
                            <Link to={`/listrs`} className="navbar-text-h6">
                                <h6>Search Clinic</h6>
                            </Link>
                            <Link to="/login">
                                <Button
                                    className="btn border-0 pr-3 pl-3 ml-2"
                                    style={{
                                        backgroundColor: "#fde84d",
                                        color: "#445E6B",
                                    }}
                                >
                                    Sign In
                                </Button>
                            </Link>
                        </div>
                    </div>
                </header>
                <div
                    className="form-containers"
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="1500"
                    data-aos-easing="ease-out"
                >
                    <div className="role-form">
                        <h2 className="role-text">Pilih Role Kamu</h2>
                        <h6 className="role-text">
                            Daftarkan Dirimu Untuk Menggunakan Aplikasi Ini
                        </h6>
                        <Row
                            className="justify-content-around align-items-center"
                            style={{ textAlign: "center" }}
                        >
                            <Col lg="3" sm="12">
                                <button
                                    value="clinic"
                                    className="role-icon"
                                    onClick={handleChooseClinic}
                                >
                                    <img
                                        className="mt-4 mb-2"
                                        src={
                                            isUser == "admin"
                                                ? clinic1
                                                : clinic2
                                        }
                                        alt="clinic button"
                                    ></img>
                                </button>
                                <h2 className="role-text" id="text-clinic">
                                    Clinic
                                </h2>
                            </Col>
                            <Col lg="3" sm="12">
                                <button
                                    value="patient"
                                    className="role-icon"
                                    onClick={handleChooseUser}
                                >
                                    <img
                                        className="mt-4 mb-2"
                                        src={isUser == "user" ? user1 : user2}
                                        alt="patient button"
                                    ></img>
                                </button>
                                <h2 className="role-text" id="text-patient">
                                    Patient
                                </h2>
                            </Col>
                        </Row>
                        <Link to="/signup/form">
                            <Button
                                type="submit"
                                className="btn btn-block-role w-100"
                            >
                                Selanjutnya
                            </Button>
                        </Link>

                        <h6 className="role-text-down">
                            Already have an account? Please
                            <Link to="/login" className="signin-text">
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
