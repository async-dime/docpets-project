import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import banner from "./assets/img/dogbanner.png";
import logo from "./assets/img/docpets.png";
import "./SignUpUserForm.scss";
import eyeIcon from "./assets/img/eye.svg";
import eyeHalfIcon from "./assets/img/eye-half.svg";
import lockIcon from "./assets/img/lock.svg";
import mailIcon from "./assets/img/mail.svg";
import phoneIcon from "./assets/img/phone.svg";

const SignUpUserForm = () => {
  let history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [fullName, setFullName] = useState();
  const [telephoneNum, setTelephoneNum] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [isWrongRegister, setIsWrongRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(showPassword ? false : true);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    let url = "13.250.101.249:3000/user/signup";
    const data = {
      fullname: fullName,
      telephone: telephoneNum,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirm,
      role: localStorage.getItem("role"),
    };
  };

  // axios.post(url, data)
  //           .then((ress) => {
  //               if (localStorage.getItem('role') === 'user') {
  //                   localStorage.setItem('id', ress.data.id)
  //                   localStorage.setItem('fullname', ress.data.fullname)
  //                   localStorage.setItem('email', ress.data.email)
  //                   localStorage.setItem('password', ress.data.password)
  //                   localStorage.setItem('phoneNumber', ress.data.phoneNumber)
  //                   localStorage.setItem('gender', ress.data.gender)
  //                   localStorage.setItem('pictureurl', ress.data.pictureUrl)
  //                   localStorage.setItem('role', ress.data.role)
  //                   localStorage.setItem('clinicid', ress.data.clinicId)
  //                   localStorage.setItem('token', ress.data.token)
  //                   history.push('/')
  //               } else if (localStorage.getItem('role') === 'admin') {
  //                   localStorage.setItem('id', ress.data.userAdmins.id)
  //                   localStorage.setItem('username', ress.data.user.username)
  //                   localStorage.setItem('fullname', ress.data.user.fullname)
  //                   localStorage.setItem('email', ress.data.user.email)
  //                   localStorage.setItem('password', ress.data.user.password)
  //                   localStorage.setItem('phoneNumber', ress.data.user.phoneNumber)
  //                   localStorage.setItem('gender', ress.data.user.gender)
  //                   localStorage.setItem('pictureurl', ress.data.user.pictureUrl)
  //                   localStorage.setItem('role', ress.data.user.role)
  //                   localStorage.setItem('clinicid', ress.data.user.clinicId)
  //                   localStorage.setItem('token', ress.data.user.token)
  //                   history.push('/forclinic/edit-profile')
  //               } else {
  //                   history.push('/forclinic/edit-profile')
  //               }
  //               firebase
  //                   .auth()
  //                   .createUserWithEmailAndPassword(email, password)
  //                   .then(authRes => {
  //                       const userObj = {
  //                           email: authRes.user.email,
  //                           fullname: fullName,
  //                           friends: [],
  //                           messages: [],
  //                           role: localStorage.getItem('role')
  //                       };

  //                       firebase
  //                           .firestore()
  //                           .collection('users')
  //                           .doc(email)
  //                           .set(userObj)
  //                           .then(() => {
  //                           }, dbErr => {
  //                               console.log('Failed to add user to the database: ', dbErr);
  //                           });
  //                   }, authErr => {
  //                       console.log('Failed to create user: ', authErr);
  //                   });
  //           })
  //           .catch(
  //               () => {
  //                   setIsLoading(false)
  //                   setIsWrongRegister(true) }
  //           )

  //         axios.post(url, data)
  //         .then((ress) => {
  //             if (localStorage.getItem('role') === 'user') {
  //                 localStorage.setItem('id', ress.data.id)
  //                 localStorage.setItem('username', ress.data.username)
  //                 localStorage.setItem('fullname', ress.data.fullname)
  //                 localStorage.setItem('email', ress.data.email)
  //                 localStorage.setItem('password', ress.data.password)
  //                 localStorage.setItem('phoneNumber', ress.data.phoneNumber)
  //                 localStorage.setItem('gender', ress.data.gender)
  //                 localStorage.setItem('pictureurl', ress.data.pictureUrl)
  //                 localStorage.setItem('role', ress.data.role)
  //                 localStorage.setItem('clinicid', ress.data.clinicId)
  //                 localStorage.setItem('token', ress.data.token)
  //                 history.push('/')
  //             }
  // })

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
                  className="btn btn-warning border-0 pr-3 pl-3 ml-2"
                  style={{ backgroundColor: "#fde84d", color: "#445E6B" }}
                >
                  Login
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
            <Form onSubmit={handleRegister}>
              <Form.Group>
                <InputGroup size="sm">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <img src={eyeIcon} style={{ width: "15px" }} alt="" />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    className="signup-column-form"
                    type="text"
                    name="fullname"
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup size="sm">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <img src={mailIcon} style={{ width: "15px" }} alt="" />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    className="signup-column-form"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@gmail.com"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup size="sm">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <img src={phoneIcon} style={{ width: "15px" }} alt="" />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    className="signup-column-form"
                    type="number"
                    name="telephone"
                    onChange={(e) => setTelephoneNum(e.target.value)}
                    placeholder="Telephone Number"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup size="sm">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <img src={lockIcon} style={{ width: "15px" }} alt="" />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    className="signup-column-form"
                    type={showPasswordConfirm ? "text" : "password"}
                    name="telephone"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <img
                    onClick={togglePasswordVisibility}
                    src={
                      showPassword === false ? (
                        <img
                          src={eyeHalfIcon}
                          style={{ width: "15px" }}
                          alt=""
                          className="reg-icon"
                        />
                      ) : (
                        <img
                          src={eyeIcon}
                          style={{ width: "15px" }}
                          alt=""
                          className="reg-icon"
                        />
                      )
                    }
                    alt=""
                    className="pw-icon"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup size="sm">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <img src={lockIcon} style={{ width: "15px" }} alt="" />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    className="signup-column-form"
                    type={showPasswordConfirm ? "text" : "password"}
                    name="telephone"
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    placeholder="Password Confirmation"
                  />
                  <img
                    onClick={togglePasswordVisibility}
                    src={
                      showPasswordConfirm === false ? (
                        <img
                          src={eyeHalfIcon}
                          style={{ width: "15px" }}
                          alt=""
                          className="reg-icon"
                        />
                      ) : (
                        <img
                          src={eyeIcon}
                          style={{ width: "15px" }}
                          alt=""
                          className="reg-icon"
                        />
                      )
                    }
                    alt=""
                    className="pw-icon"
                  />
                </InputGroup>
              </Form.Group>
              {isWrongRegister === true ? (
                <h6 className="error-signup">
                  The username is does exist, please use another one.
                </h6>
              ) : (
                ""
              )}
              {isLoading === true ? (
                <div style={{ marginTop: "-200px" }}>
                  <div class="spinner">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                  </div>
                </div>
              ) : (
                <Button className="btn btn-block-signup">Sign Up</Button>
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

export default SignUpUserForm;
