import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/img/logo.png";
import logofont from "./assets/img/logofont.png";
import React, { useState } from "react";
import { Button, Modal, NavDropdown } from "react-bootstrap";
// import MovieCard from "./movieCard";
import { Link } from "react-router-dom";
// import { FaWindows } from "react-icons/fa";

const NavBarLogin = () => {
  //states- input query, movies
  const [query, setQuery] = useState("");
  //create the state for movies, and update that state appropriate
  const [clinic, setClinic] = useState([]);

  const [modalSearchClinic, setModalSearchClinic] = useState(false);
  const toggleModalSearchClinic = () =>
    setModalSearchClinic(!modalSearchClinic);

  const searchClinic = async (e) => {
    e.preventDefault();
    const url = `http://54.254.205.124:3000/movie/search/${query}?page=1&limit=20`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setClinic(data);
    } catch (err) {
      console.error(err);
    }
  };
  console.log("testttt", clinic);

  const pic = (
    <FontAwesomeIcon
      icon={faUserCircle}
      size="2x"
      style={{ color: "#FFE84D" }}
    />
  );
  const signOut = () => {
    localStorage.clear("token");
    window.location.reload();
  };

  return (
    <header>
      <div className="navbar-container w-100">
        <div className="navbar">
          <Link to={`/`}>
            <img src={logo} alt="vet logo" className="navbar-logo"></img>
            <img
              src={logofont}
              alt="vet logo font"
              className="navbar-logo-font"
            ></img>
          </Link>
          <div className="navbar-right">
            <Link to={`/`} className="navbar-text">
              <h3 className="navbar-h3">Home</h3>
            </Link>
            <Link to={`/`} className="navbar-text">
              <h3 className="navbar-h3">Chat</h3>
            </Link>
            <form className="navbar-search" onSubmit={searchClinic}>
              <input
                type="text"
                name="query"
                placeholder="search for clinic"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Modal
                isOpen={modalSearchClinic}
                toggle={toggleModalSearchClinic}
              >
                <div className="card-list">
                  {/* {movies?.data?.map((movie) => (
                  <MovieCard movie={movie} />
                ))} */}
                </div>
              </Modal>
            </form>
            <NavDropdown 
              title={pic}
              className="navbar-text nav-dropdown"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>Full Name</NavDropdown.Item>
              <NavDropdown.Item onClick={signOut}>
                <Link to="/"> Sign out </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBarLogin;
