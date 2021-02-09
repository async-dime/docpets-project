import React, { useState, useRef } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { registerAction } from "../store/actions/auth";
import { connect } from "react-redux";
import banner from "../components/assets/img/dogbanner.png";
import logo from "../components/assets/img/docpets.png";
import "./FormSignUp.scss";
import userIcon from "../components/assets/img/user.svg";
import lockIcon from "../components/assets/img/lock.svg";
import mailIcon from "../components/assets/img/mail.svg";
import phoneIcon from "../components/assets/img/phone.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const FormSignUp = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const [nama, setNama] = useState();
    const [telepon, setTelepon] = useState();
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirmation, setPasswordConfirmation] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [diffPassword, setDiffPassword] = useState(false);
    const [message, setMessage] = useState("");
    const eye = <FontAwesomeIcon icon={faEye} />;
    const token = localStorage.getItem("token");
    let role = localStorage.getItem("role");

    const togglePasswordVisibility = () => {
        setShowPassword(showPassword ? false : true);
    };
    const togglePasswordConfirmVisibility = () => {
        setShowPasswordConfirm(showPasswordConfirm ? false : true);
    };
    const handleGender = (e) => {
        setGender(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            nama: nama,
            email: email,
            gender: gender,
            telepon: telepon,
            password: password,
            passwordConfirmation: passwordConfirmation,
            role: role,
        };
        if (!nama) {
            alert("Name is Required");
        } else if (!email) {
            alert("Email is Required");
        } else if (!telepon) {
            alert("Phone Number is Required");
        } else if (!role) {
            alert(`You must choose role between "patient" or "clinic"`);
        } else if (!password) {
            alert("Password is Required");
        } else if (!passwordConfirmation) {
            alert("Password Confirmation is Required");
        } else if (password != passwordConfirmation) {
            alert(
                "Password and Password Confirmation Need To Be The Same value"
            );
        } else {
            axios
                .post("https://doctorpets.tk:3002/user/signup", data)
                .then((res) => {
                    alert(res.data.message);
                    localStorage.setItem("token", res.data.result.token);
                    localStorage.setItem("id", res.data.result.user.id);
                    window.location.href = "/login";
                })
                .catch((err) => {
                    alert(err);
                    console.log(err);
                });
        }

        if (password !== passwordConfirmation) {
            setDiffPassword(true);
        } else {
            setDiffPassword(false);
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
        <div className="signup-form-container">
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
                        alt="docpets logo"
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
                    <div className="signup-form">
                        <h2 className="signup-text">Create New Account</h2>
                        <h6 className="signup-text">
                            Sign Up To Use Our Application
                        </h6>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group>
                                <InputGroup size="sm">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <img
                                                src={userIcon}
                                                style={inputIconSize}
                                                alt="user icon"
                                            />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        className="signup-column-form"
                                        type="text"
                                        name="nama"
                                        value={nama}
                                        onChange={(e) =>
                                            setNama(e.target.value)
                                        }
                                        placeholder="Full Name"
                                        ref={register({
                                            required: true,
                                            minLength: {
                                                value: 3,
                                                message: "min length",
                                            },
                                            maxLength: 255,
                                        })}
                                    />
                                </InputGroup>
                                {errors.nama &&
                                    errors.nama.type === "required" && (
                                        <p style={alertText}>
                                            Full Name required
                                        </p>
                                    )}
                                {errors.nama &&
                                    errors.nama.type === "minLength" && (
                                        <p style={alertText}>
                                            This field required min length of 3
                                            characters
                                        </p>
                                    )}
                                {errors.nama &&
                                    errors.nama.type === "maxLength" && (
                                        <p style={alertText}>
                                            This field required max length of
                                            255 characters
                                        </p>
                                    )}
                            </Form.Group>
                            <Form.Group>
                                <InputGroup size="sm">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <img
                                                src={userIcon}
                                                style={inputIconSize}
                                                alt="user icon"
                                            />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <div className="my-2 ml-3">
                                        <span className="mr-3">Gender:</span>
                                        <span className="mr-4">
                                            <input
                                                id="gender1"
                                                value="male"
                                                name="gender"
                                                type="radio"
                                                className="mx-2"
                                                onChange={handleGender}
                                            />
                                            Male
                                        </span>
                                        <span>
                                            <input
                                                id="gender2"
                                                value="female"
                                                name="gender"
                                                type="radio"
                                                className="mx-2"
                                                onChange={handleGender}
                                            />
                                            Female
                                        </span>
                                    </div>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group>
                                <InputGroup size="sm">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <img
                                                src={mailIcon}
                                                style={inputIconSize}
                                                alt="mail icon"
                                            />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        className="signup-column-form"
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
                                                src={phoneIcon}
                                                style={inputIconSize}
                                                alt="phone icon"
                                            />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        className="signup-column-form"
                                        type="number"
                                        name="telepon"
                                        value={telepon}
                                        onChange={(e) =>
                                            setTelepon(e.target.value)
                                        }
                                        placeholder="Telephone Number"
                                        ref={register({
                                            required: true,
                                        })}
                                    />
                                </InputGroup>
                                {errors.telepon &&
                                    errors.telepon.type === "required" && (
                                        <p style={alertText}>
                                            Telephone Number required
                                        </p>
                                    )}
                            </Form.Group>
                            <Form.Group>
                                <InputGroup size="sm">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <img
                                                src={lockIcon}
                                                style={inputIconSize}
                                                alt="lock icon"
                                            />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        className="signup-column-form"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        name="password"
                                        value={password}
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
                            <Form.Group>
                                <InputGroup size="sm">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <img
                                                src={lockIcon}
                                                style={inputIconSize}
                                                alt="lock icon"
                                            />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        className="signup-column-form"
                                        type={
                                            showPasswordConfirm
                                                ? "text"
                                                : "password"
                                        }
                                        name="passwordConfirmation"
                                        value={passwordConfirmation}
                                        onChange={(e) =>
                                            setPasswordConfirmation(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Password Confirmation"
                                        ref={register({
                                            required: true,
                                            minLength: 8,
                                            maxLength: 32,
                                        })}
                                    />
                                    <i
                                        onClick={
                                            togglePasswordConfirmVisibility
                                        }
                                    >
                                        {eye}
                                    </i>{" "}
                                </InputGroup>
                                {errors.passwordConfirmation &&
                                    errors.passwordConfirmation.type ===
                                        "required" && (
                                        <p style={alertText}>
                                            Password Confirmation required
                                        </p>
                                    )}
                                {errors.passwordConfirmation &&
                                    errors.passwordConfirmation.type ===
                                        "minLength" && (
                                        <p style={alertText}>
                                            Password Confirmation required min
                                            length of 8 characters
                                        </p>
                                    )}
                                {errors.passwordConfirmation &&
                                    errors.passwordConfirmation.type ===
                                        "maxLength" && (
                                        <p style={alertText}>
                                            Password Confirmation required max
                                            length of 32 characters
                                        </p>
                                    )}
                            </Form.Group>
                            {diffPassword === true ? (
                                <h6 className="error-signup">
                                    Password and Password Confirmation must be
                                    the same value.
                                </h6>
                            ) : (
                                ""
                            )}
                            <Link to="/user">
                                <Button
                                    type="submit"
                                    onClick={onSubmit}
                                    className="btn btn-block-signup w-100"
                                >
                                    Sign Up
                                </Button>
                            </Link>
                            <h6 className="signup-text-down">
                                Already have an account? Please
                                <Link to="/login" className="signup-text-link">
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

export default FormSignUp;

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => ({
//   signUpDatas: (data) => dispatch(registerAction(data)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(FormSignUp);
