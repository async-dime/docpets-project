import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector, connect } from "react-redux";
import { getClinicDoctor } from "../store/actions/clinicDoctor";
import { getClinicDetail } from "../store/actions/clinicDetail";
import { getAnimal } from "../store/actions/animal";

//styling
import { Row, Col, Button } from "react-bootstrap";

//component
import ModalBookingSuccess from "./ModalBookingSuccess";
import Loadscreen from "../pages/Loadscreen";

const DetailBooking = (props) => {
    //state
    const [loading, setLoading] = useState("true");
    const [modals, setModals] = useState(false);
    const toggleModals = () => setModals(!modals);
    const [clinic, setClinic] = useState({});
    const [facilities, setFacilities] = useState("");
    const [day, setDay] = useState("");
    const [waktu, setWaktu] = useState();

    //handler
    const handleClickDay = (e) => {
        setDay(e.target.value);
    };
    const handleClickWaktu = (e) => {
        setWaktu(e.target.value);
    };

    //param
    let { id } = useParams();

    let tanggal = localStorage.getItem("waktu");
    let doctor = localStorage.getItem("doctor");

    //useEffect
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getClinicDetail());
        dispatch(getAnimal());
        setTimeout(() => setLoading("false"), 1500);
    }, []);
    const detailClinic = useSelector((state) => state.getClinicDetail.data);
    const userPet = useSelector((state) => state.getAnimal);

    //custom styling
    const detailrsH1 = {
        fontSize: "45px",
        fontWeight: "700",
        marginLeft: "20px",
        margin: "10px 0",
        color: "#445e6b",
    };
    const detailrsH2 = {
        fontSize: "30px",
        fontWeight: "700",
        marginLeft: "20px",
        margin: "10px 0",
        color: "#445e6b",
    };
    const detailrsH3 = {
        fontSize: "20px",
        fontWeight: "700",
        marginLeft: "20px",
        margin: "10px 0",
        color: "#445e6b",
    };
    const detailrsH4 = {
        fontSize: "16px",
        fontWeight: "500",
        marginLeft: "20px",
        margin: "10px 0",
        color: "#445e6b",
        marginBottom: "1rem",
    };
    const detailrsImage = {
        borderRadius: "10px",
        maxWidth: "600px",
        overflow: "hidden",
        marginRight: "1rem",
    };
    const buttonSuccessBook = {
        backgroundColor: "#fde84d",
        color: "#445e6b",
        fontSize: "20px",
        fontWeight: "bold",
        height: "60px",
        width: "200px",
        position: "relative",
        marginTop: "0.5rem",
        border: "0px solid",
    };

    return (
        <>
            {loading === "false" ? (
                <div className="detailrs-container">
                    <Row>
                        <Col>
                            <h1 style={detailrsH1}>Resume Booking</h1>
                        </Col>
                        <Col md="auto"></Col>
                        <Col xs lg="2">
                            <Button
                                onClick={toggleModals}
                                style={buttonSuccessBook}
                            >
                                Done
                            </Button>
                            <ModalBookingSuccess
                                displayModal={modals}
                                closeModal={toggleModals}
                            />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <h3 style={detailrsH3}>{detailClinic.nama}</h3>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <img
                                src={detailClinic.foto}
                                style={detailrsImage}
                                alt="photo of clinic"
                                data-aos="fade-right"
                                data-aos-delay="100"
                                data-aos-duration="2000"
                                data-aos-easing="ease-out"
                            />
                        </Col>
                        <Col>
                            <Row>
                                <h2 style={detailrsH2}>
                                    Appointment Information
                                </h2>
                            </Row>
                            <br />
                            <Row>
                                <h3 style={detailrsH3}>
                                    Appointment Date & Time
                                </h3>
                            </Row>
                            <Row>
                                <h4 style={detailrsH4}>{tanggal}</h4>
                            </Row>
                            <br />

                            <Row>
                                <h3 style={detailrsH3}>Doctor</h3>
                            </Row>
                            <Row>
                                <h4 style={detailrsH4}>{doctor}</h4>
                            </Row>
                            <br />

                            <Row>
                                <h3 style={detailrsH3}>Pet(s)</h3>
                            </Row>
                            <Row>
                                <h4 style={detailrsH4}>
                                    <ol>
                                        {userPet.data.result?.map(
                                            (pet, idx) => {
                                                return (
                                                    <li key={idx}>
                                                        <h4 style={detailrsH4}>
                                                            {pet.nama},{" "}
                                                            {pet.jenis ===
                                                            "anjing"
                                                                ? "dog"
                                                                : pet.jenis ===
                                                                  "kucing"
                                                                ? "cat"
                                                                : pet.jenis ===
                                                                  "kelinci"
                                                                ? "rabbit"
                                                                : "hamster"}
                                                            , {pet.gender}
                                                        </h4>
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ol>
                                </h4>
                            </Row>
                            <br />
                        </Col>
                    </Row>
                    <br />
                </div>
            ) : (
                <Loadscreen />
            )}
        </>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DetailBooking);
