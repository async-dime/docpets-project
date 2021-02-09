import React, { useState, useRef } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { loginAction } from "../store/actions/auth";
import { connect } from "react-redux";
import banner from "../components/assets/img/dogbanner.png";
import logo from "../components/assets/img/docpets.png";
import "./FormSignIn.scss";
import lockIcon from "../components/assets/img/lock.svg";
import mailIcon from "../components/assets/img/mail.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const FormSignIn = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");
    const eye = <FontAwesomeIcon icon={faEye} />;
    const token = localStorage.getItem("token");
    let role = localStorage.getItem("role");

    const togglePasswordVisibility = () => {
        setShowPassword(showPassword ? false : true);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password,
        };
        if (!email) {
            alert("Email is Required");
        } else if (!password) {
            alert("Password is Required");
        } else {
            axios
                .post("https://doctorpets.tk:3002/user/login", data)
                .then((res) => {
                    console.log(res.data);
                    localStorage.setItem("token", res.data.result.token);
                    localStorage.setItem("id", res.data.result.user.id);
                    alert(res.data.message);
                    window.location.href = "/";
                })
                .catch((err) => alert(err));
        }
    };

    const alertText = {
        color: "red",
        textAlign: "center",
    };
    const inputIconSize = {
        width: "15px",
    };

    return (
        <div className="signin-form-container">
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
                                <h6>Search Clinics</h6>
                            </Link>
                            <Link to="/signup">
                                <Button
                                    className="btn border-0 pr-3 pl-3 ml-2"
                                    style={{
                                        backgroundColor: "#fde84d",
                                        color: "#445E6B",
                                    }}
                                >
                                    Registration
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
                    <div className="signin-form">
                        <h2 className="signin-text">Welcome Back</h2>
                        <h6 className="signin-text">
                            Login To Begin The Journey
                        </h6>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group>
                                <InputGroup size="sm">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <img
                                                src={mailIcon}
                                                style={inputIconSize}
                                                alt=""
                                            />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        className="signin-column-form"
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="example@gmail.com"
                                        ref={register({ required: true })}
                                    />
                                </InputGroup>
                                {errors.email &&
                                    errors.email.type === "required" && (
                                        <p style={alertText}>Email required</p>
                                    )}
                            </Form.Group>

                            <Form.Group>
                                <InputGroup size="sm">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <img
                                                src={lockIcon}
                                                style={inputIconSize}
                                                alt=""
                                            />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        className="signin-column-form"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        name="password"
                                        balue={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        placeholder="Password"
                                        ref={register({
                                            required: true,
                                            minLength: 8,
                                            maxLength: 32,
                                        })}
                                    />
                                    <i onClick={togglePasswordVisibility}>
                                        {eye}
                                    </i>{" "}
                                </InputGroup>
                                {errors.password &&
                                    errors.password.type === "required" && (
                                        <p style={alertText}>
                                            Password required
                                        </p>
                                    )}
                                {errors.password &&
                                    errors.password.type === "minLength" && (
                                        <p style={alertText}>
                                            Password required min length of 8
                                            characters
                                        </p>
                                    )}
                                {errors.password &&
                                    errors.password.type === "maxLength" && (
                                        <p style={alertText}>
                                            Password required max length of 32
                                            characters
                                        </p>
                                    )}
                            </Form.Group>

                            <Link to="/user">
                                <Button
                                    type="submit"
                                    onClick={onSubmit}
                                    className="btn btn-block-signin w-100"
                                >
                                    Sign In
                                </Button>
                            </Link>
                            <h6 className="signin-text-down">
                                Don't have an account? Please
                                <Link to="/signup" className="signup-text-link">
                                    {" "}
                                    Sign Up
                                </Link>
                            </h6>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormSignIn;
