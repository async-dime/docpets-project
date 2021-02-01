import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Modal, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarLogin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSearch } from "@fortawesome/free-solid-svg-icons";

//redux
import { getProfileDetail } from "../store/actions/profile";
import { logoutAction } from "../store/actions/auth";

import { connect } from "react-redux";

import logo from "./assets/img/logo.png";
import logofont from "./assets/img/logofont.png";
import ClinicCard from "./ClinicCard";
import axios from "axios";

const NavBarLogin = (props) => {
    const [query, setQuery] = useState("");
    const [clinics, setClinics] = useState([]);
    const nama = localStorage.getItem("nama");
    const token = localStorage.getItem("token");

   

    const pic = (
        <FontAwesomeIcon
            icon={faUserCircle}
            size="2x"
            style={{ color: "#fde84d" }}
        />
    );
    const signOut = () => {
        localStorage.clear("token");
        window.location.reload();
    };

    return (
        <header>
            <div className="navbar-container w-100 shadowEffect">
                <div className="navbar">
                    <Link to={`/`}>
                        <img
                            src={logo}
                            alt="docpets logo"
                            className="navbar-logo"
                        ></img>
                        <img
                            src={logofont}
                            alt="docpets logo font"
                            className="navbar-logo-font"
                        ></img>
                    </Link>
                    <div className="navbar-login-right">
                        <Link to={`/`} className="navbar-text">
                            <h3 className="navbar-h3">Home</h3>
                        </Link>
                        <Link to={`/chat`} className="navbar-text">
                            <h3 className="navbar-h3">Chat</h3>
                        </Link>
                        <Link to={`/listrs`} className="navbar-text">
                            <h3 className="navbar-h3">Cari Klinik</h3>
                        </Link>
                        {token ? (
                            <NavDropdown
                                title={pic}
                                className="navbar-text nav-dropdown"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item>hi, {nama}</NavDropdown.Item>
                                <NavDropdown.Item onClick={signOut}>
                                    <Link to="/"> Sign out </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Link to="/signup">
                                <Button
                                    className="btn border-0 pr-3 pl-3 ml-2"
                                    style={{
                                        backgroundColor: "#fde84d",
                                        color: "#445E6B",
                                        margin: "1rem 1rem",
                                        fontWeight: "700",
                                    }}
                                >
                                    Sign Up
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBarLogin;

// const mapStateToProps = (state) => ({
//     animal: state.getAnimal.data,
//     nama: state.profile.data.nama,
//     clinics: state.clinicSearch.listClinicSearch,
// });

// const mapDispatchToProps = (dispatch) => ({
//     search: (query) => dispatch({ type: "GET_CLINIC", payload: query }),
//     getProfile: () => dispatch({ type: "GET_PROFILE" }),
//     logout: () => dispatch(logoutAction()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(NavBarLogin);
