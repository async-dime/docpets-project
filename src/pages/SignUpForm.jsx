import React, { useState, useRef } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { registerAction } from "../store/actions/auth";
import { connect } from "react-redux";
import banner from "../components/assets/img/dogbanner.png";
import logo from "../components/assets/img/docpets.png";
import "./SignUpForm.scss";
import userIcon from "../components/assets/img/user.svg";
import lockIcon from "../components/assets/img/lock.svg";
import mailIcon from "../components/assets/img/mail.svg";
import phoneIcon from "../components/assets/img/phone.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const SignUpForm = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [nama, setNama] = useState();
  const [telepon, setTelepon] = useState();
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [isWrongRegister, setIsWrongRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [diffPassword, setDiffPassword] = useState(false);
  const [message, setMessage] = useState("");
  const eye = <FontAwesomeIcon icon={faEye} />;

  const togglePasswordVisibility = () => {
    setShowPassword(showPassword ? false : true);
  };
  const togglePasswordConfirmVisibility = () => {
    setShowPasswordConfirm(showPasswordConfirm ? false : true);
  };
  const onSubmit = (e) => {
    if (!nama) {
      alert("Name is Required");
    } else if (!email) {
      alert("Email is Required");
    } else if (!telepon) {
      alert("Phone Number is Required");
    } else if (!password) {
      alert("Password is Required");
    } else if (!passwordConfirmation) {
      alert("Password Confirmation is Required");
    } else if (password != passwordConfirmation) {
      alert("Password and Password Confirmation Need To Be The Same value");
    } else {
      setMessage(null);
      props.signUpDatas({
        nama,
        email,
        gender,
        telepon,
        password,
        passwordConfirmation,
        role: localStorage.getItem("role"),
      });
    }

    if (password !== passwordConfirmation) {
      setDiffPassword(true);
    } else {
      setDiffPassword(false);
    }

    localStorage.setItem("nama", { nama });
    localStorage.setItem("email", { email });
    localStorage.setItem("gender", { gender });
    localStorage.setItem("password", { password });
    localStorage.setItem("telepon", { telepon });
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
            {/* <Form onSubmit={onSubmit}> */}
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
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
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
                    value={email}
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
                <Form.Control
                  name="gender"
                  onChange={(e) => setGender(e.target.value)}
                  as="select"
                  ref={register({
                    required: true,
                  })}
                >
                  <option>Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Control>
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
                    value={telepon}
                    onChange={(e) => setTelepon(e.target.value)}
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
                    balue={password}
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
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
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
              <Link to="/">
                <Button
                  type="submit"
                  onClick={onSubmit}
                  className="btn btn-block-signup"
                >
                  Sign Up
                </Button>
              </Link>
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  signUpDatas: (data) => dispatch(registerAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
