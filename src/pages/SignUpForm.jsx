import React, { useState, useRef } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {connect} from "react-redux"

// import { register } from "../redux/actions/auth";

import banner from "../components/assets/img/dogbanner.png";
import logo from "../components/assets/img/docpets.png";
import "./SignUpForm.scss";
import userIcon from "../components/assets/img/user.svg";
import lockIcon from "../components/assets/img/lock.svg";
import mailIcon from "../components/assets/img/mail.svg";
import phoneIcon from "../components/assets/img/phone.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const SignUpForm = () => {
  let history = useHistory();

  const { register, handleSubmit, errors } = useForm();
  const eye = <FontAwesomeIcon icon={faEye} />;

  const [name, setName] = useState();
  const [telephoneNum, setTelephoneNum] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [isWrongRegister, setIsWrongRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [diffPassword, setDiffPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(showPassword ? false : true);
  };
  const togglePasswordConfirmVisibility = () => {
    setShowPasswordConfirm(showPasswordConfirm ? false : true);
  };
  const onSubmit = (e) => {
    // let url = "http://13.250.101.249:3000/user/signup";
    let url = "";
    const data = {
      nama: name,
      telepon: telephoneNum,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirm,
      role: localStorage.getItem("role"),
    };
    console.log(data, "THIS IS DATA PUSH");

    if (localStorage.getItem("role") === "user" || "admin") {
      url = "https://Doctorpets.tk:3002/user/signup";
    } 
    // else if (localStorage.getItem("role") === "superadmin") {
    //   url = "http://13.250.101.249:3000/user/signup";
    // }

    if (data.password !== data.passwordConfirmation) {
      setDiffPassword(true);
    } else {
      setDiffPassword(false);
    }

    axios
      .post(url, data)
      .then((response) => {
        if (localStorage.getItem("role") === "user") {
          console.info(response, "<==USER RESPONSE");
          console.info(response.data.data.nama, "<== nama")
          localStorage.setItem("fullname", response.data.data.nama);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("password", response.data.password);
          localStorage.setItem("password", response.data.passwordConfirmation);
          localStorage.setItem("telepon", response.data.telepon);
          localStorage.setItem("role", response.data.role);
          localStorage.setItem("token", response.data.token);

          // localStorage.setItem("id", response.data.id);
          // localStorage.setItem("gender", response.data.gender);
          // localStorage.setItem("pictureurl", response.data.pictureUrl);
          history.push("/");
        } else if (localStorage.getItem("role") === "admin") {
          console.info(response, "<==CLINIC RESPONSE");
          localStorage.setItem("fullname", response.data.nama);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("password", response.data.password);
          localStorage.setItem("password", response.data.passwordConfirmation);
          localStorage.setItem("telepon", response.data.telepon);
          localStorage.setItem("role", response.data.role);
          localStorage.setItem("token", response.data.token);
          history.push("/clinic/edit-profile");
        }
        console.info(response)
        e.preventDefault();
      })
      .catch(() => {
        setIsLoading(false);
        setIsWrongRegister(true);
      });
  };

  const alertText = {
    color: "red",
    textAlign: "center",
  };
  const inputIconSize = {
    width: "15px",
  };

  return (
    <div className="signup-form-container">
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
          <div className="signup-form">
            <h2 className="signup-text">Buat Akun baru</h2>
            <h6 className="signup-text">
              Daftarkan Dirimu Untuk Menggunakan Aplikasi Ini
            </h6>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <InputGroup size="sm">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <img src={userIcon} style={inputIconSize} alt="" />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    className="signup-column-form"
                    type="text"
                    name="nama"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    ref={register({
                      required: true,
                      minLength: { value: 3, message: "min length" },
                      maxLength: 255,
                    })}
                  />
                </InputGroup>
                {errors.nama && errors.nama.type === "required" && (
                  <p style={alertText}>Full Name required</p>
                )}
                {errors.nama && errors.nama.type === "minLength" && (
                  <p style={alertText}>
                    This field required min length of 3 characters
                  </p>
                )}
                {errors.nama && errors.nama.type === "maxLength" && (
                  <p style={alertText}>
                    This field required max length of 255 characters
                  </p>
                )}
              </Form.Group>
              <Form.Group>
                <InputGroup size="sm">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <img src={mailIcon} style={inputIconSize} alt="" />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    className="signup-column-form"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@gmail.com"
                    ref={register({ required: true })}
                  />
                </InputGroup>
                {errors.email && errors.email.type === "required" && (
                  <p style={alertText}>Email required</p>
                )}
              </Form.Group>
              <Form.Group>
                <InputGroup size="sm">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <img src={phoneIcon} style={inputIconSize} alt="" />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    className="signup-column-form"
                    type="number"
                    name="telepon"
                    onChange={(e) => setTelephoneNum(e.target.value)}
                    placeholder="Telephone Number"
                    ref={register({
                      required: true,
                    })}
                  />
                </InputGroup>
                {errors.telepon && errors.telepon.type === "required" && (
                  <p style={alertText}>Telephone Number required</p>
                )}
              </Form.Group>
              <Form.Group>
                <InputGroup size="sm">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <img src={lockIcon} style={inputIconSize} alt="" />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    className="signup-column-form"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    ref={register({
                      required: true,
                      minLength: 8,
                      maxLength: 32,
                    })}
                  />
                  <i onClick={togglePasswordVisibility}>{eye}</i>{" "}
                </InputGroup>
                {errors.password && errors.password.type === "required" && (
                  <p style={alertText}>Password required</p>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <p style={alertText}>
                    Password required min length of 8 characters
                  </p>
                )}
                {errors.password && errors.password.type === "maxLength" && (
                  <p style={alertText}>
                    Password required max length of 32 characters
                  </p>
                )}
              </Form.Group>
              <Form.Group>
                <InputGroup size="sm">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <img src={lockIcon} style={inputIconSize} alt="" />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    className="signup-column-form"
                    type={showPasswordConfirm ? "text" : "password"}
                    name="passwordConfirmation"
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    placeholder="Password Confirmation"
                    ref={register({
                      required: true,
                      minLength: 8,
                      maxLength: 32,
                    })}
                  />
                  <i onClick={togglePasswordConfirmVisibility}>{eye}</i>{" "}
                </InputGroup>
                {errors.passwordConfirmation &&
                  errors.passwordConfirmation.type === "required" && (
                    <p style={alertText}>Password Confirmation required</p>
                  )}
                {errors.passwordConfirmation &&
                  errors.passwordConfirmation.type === "minLength" && (
                    <p style={alertText}>
                      Password Confirmation required min length of 8 characters
                    </p>
                  )}
                {errors.passwordConfirmation &&
                  errors.passwordConfirmation.type === "maxLength" && (
                    <p style={alertText}>
                      Password Confirmation required max length of 32 characters
                    </p>
                  )}
              </Form.Group>
              {diffPassword === true ? (
                <h6 className="error-signup">
                  Password and Password Confirmation must be the same value.
                </h6>
              ) : (
                ""
              )}
              {isLoading === true ? (
                <div>
                  <div class="spinner">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                  </div>
                </div>
              ) : (
                <Button
                  type="submit"
                  onClick={onSubmit}
                  className="btn btn-block-signup"
                >
                  Sign Up
                </Button>
              )}
              <h6 className="signup-text-down">
                Already have an account? Please
                <Link to="/signin" className="signin-text">
                  {" "}
                  Sign In
                </Link>
              </h6>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
