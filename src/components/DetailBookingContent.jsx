import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

//styling
import { Row, Col, Button } from "react-bootstrap";

//component
import ModalBookingSuccess from "./ModalBookingSuccess";

const DetailBooking = (props) => {
    //state
    const [modals, setModals] = useState(false);
    const toggleModals = () => setModals(!modals);
    const [clinic, setClinic] = useState({});
    const [facilities, setFacilities] = useState("");
    // const [doctor, setDoctor] = useState("");
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(" ");
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
    console.log(id);

    let tanggal = localStorage.getItem("waktu")
    let doctor = localStorage.getItem("doctor")

    useEffect(() => {
        axios
            .get(`https://doctorpets.tk:3002/klinik/getKlinikById/${id}`)
            .then((res) => {
                console.log(res.data.result[0]);
                setClinic(res.data.result[0]);
                // setDoctor(res.data.result[0].dokter);
                setLoad(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoad(true);
            });
    }, []);

    //dummy datas
    let dummyDoc = [
        {
            nama: "Dr. Alex, SP. Kucing",
            status: "offline",
            title: "Dokter Kucing",
            checked: "true",
        },
        {
            nama: "Dr. Alizah, SP. Hamster",
            status: "online",
            title: "Dokter Hamster",
            checked: "true",
        },
        {
            nama: "Dr. Alex, SP. Kelinci",
            status: "offline",
            title: "Dokter Kelinci",
            checked: "true",
        },
        {
            nama: "Dr. Alizah, SP. Anjing",
            status: "online",
            title: "Dokter Anjing",
            checked: "false",
        },
        {
            nama: "Dr. Alex, SP. Kelinci",
            status: "offline",
            title: "Dokter Kelinci",
            checked: "true",
        },
        {
            nama: "Dr. Alizah, SP. Anjing",
            status: "online",
            title: "Dokter Anjing",
            checked: "false",
        },
    ];
    let dummyPet = [
        {
            nama: "pampam",
            jenis: "anjing",
            gender: "male",
        },
        {
            nama: "ronin",
            jenis: "kucing",
            gender: "female",
        },
    ];

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

    // let str = dummy.fasilitas;
    // let temp = new Array();
    // temp = str.split(",");

    return (
        <div className="detailrs-container">
            <Row>
                <Col>
                    <h1 style={detailrsH1}>Resume Booking</h1>
                </Col>
                <Col md="auto"></Col>
                <Col xs lg="2">
                    <Button onClick={toggleModals} style={buttonSuccessBook}>
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
                <h3 style={detailrsH3}>{clinic.nama}</h3>
                {/* <h3 style={detailrsH3}>{dummy.nama}</h3> */}
            </Row>
            <br />
            <Row>
                <Col>
                    <img
                        src={clinic.foto}
                        style={detailrsImage}
                        alt="photo of clinic"
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="2000"
                        data-aos-easing="ease-out"
                    />
                    {/* <img src={dummy.foto} style={detailrsImage} alt="" /> */}
                </Col>
                <Col>
                    <Row>
                        <h2 style={detailrsH2}>Informasi Kunjungan</h2>
                    </Row>
                    <br />
                    <Row>
                        <h3 style={detailrsH3}>Hari & Waktu Kunjungan</h3>
                    </Row>
                    <Row>
                        <h4 style={detailrsH4}>
                            {tanggal}
                        </h4>
                    </Row>
                    <br />

                    <Row>
                        <h3 style={detailrsH3}>Dokter</h3>
                    </Row>
                    <Row>
                        <h4 style={detailrsH4}>{doctor}</h4>
                        {/* <h4 style={detailrsH4}>{dummyDoc[0].nama}</h4> */}
                    </Row>
                    <br />

                    <Row>
                        <h3 style={detailrsH3}>Hewan Peliharaan</h3>
                    </Row>
                    <Row>
                        <h4 style={detailrsH4}>
                            <ol>
                                {dummyPet.map((pet, idx) => {
                                    return (
                                        <li key={idx}>
                                            <h4 style={detailrsH4}>
                                                {pet.nama}, {pet.jenis},{" "}
                                                {pet.gender}
                                            </h4>
                                        </li>
                                    );
                                })}
                            </ol>
                        </h4>
                    </Row>
                    <br />
                </Col>
            </Row>
            <br />
        </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    // signUpDatas: (data) => dispatch(registerAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailBooking);
