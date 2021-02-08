import React, { useState, useEffect } from "react";
import { Row, Col, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector, connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getClinicDetail } from "../store/actions/clinicDetail";
import { getClinicDoctor } from "../store/actions/clinicDoctor";
import { getAnimal } from "../store/actions/animal";
import { getUserProfile } from "../store/actions/user";

//component
import ChooseDate from "./ChooseDate";
import ModalAddPet from "./ModalAddPet";
import DoctorCard from "./DoctorCard";
import BoxAnimal from "./BoxAnimal";
import Loadscreen from "../pages/Loadscreen";

//styling, icon, & image
import "./DetailRSContent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import Lokasi from "./assets/img/lokasi.png";
import ava1 from "../components/assets/img/doc1.png";
import ava2 from "../components/assets/img/doc2.jpg";
import dog from "./assets/img/emojiDog.svg";
import cat from "./assets/img/emojiCat.svg";
import hamster from "./assets/img/emojiHamster.svg";
import rabbit from "./assets/img/emojiRabbit.svg";

const DetailrsContent = (props) => {
    //param
    let { id } = useParams();

    localStorage.setItem("clinicId", id);

    //hooks
    const [loading, setLoading] = useState("true");
    const [pet, setPet] = useState({});
    const [doctor, setDoctor] = useState([]);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(" ");
    const [day, setDay] = useState("");
    const [waktu, setWaktu] = useState();

    //handler
    const handlerClickBook = () => {
        console.log("click");
    };
    const handleClickDay = (e) => {
        setDay(e.target.value);
    };
    const handleClickWaktu = (e) => {
        setWaktu(e.target.value);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getClinicDetail());
        dispatch(getClinicDoctor());
        dispatch(getAnimal());
        setTimeout(() => setLoading("false"), 1500);
    }, []);

    const detailClinic = useSelector((state) => state.getClinicDetail);
    const doctorClinic = useSelector((state) => state.getClinicDoctor);
    const userProfile = useSelector((state) => state.user);
    const userPet = useSelector((state) => state.getAnimal);
    const states = useSelector((state) => state);

    console.log("doctorClinic", doctorClinic);
    console.log("userPet", userPet);
    console.log(states);

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
        fontSize: "17px",
        fontWeight: "700",
        marginLeft: "20px",
        margin: "10px 0",
        color: "#445e6b",
        marginBottom: "1rem",
    };
    const detailrsImage = {
        borderRadius: "10px",
        minWidth: "40vw",
        maxWidth: "550px",
        overflow: "hidden",
        marginRight: "1rem",
    };
    const buttonBookNow = {
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

    //icon
    const yuhu = (
        <FontAwesomeIcon
            icon={faBookmark}
            style={{ color: "#fde84d", marginRight: "0.5rem" }}
        />
    );

    return (
        <>
            {loading === "false" ? (
                <div className="detailrs-container">
                    <Row>
                        <Col>
                            <h1 style={detailrsH1}>{detailClinic.data.nama}</h1>
                        </Col>
                        <Col md="auto"></Col>
                        <Col xs lg="2">
                            <Link to={`/detailbooking/${id}`}>
                                <Button
                                    style={buttonBookNow}
                                    onClick={handlerClickBook}
                                >
                                    Book Now
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <img
                            src={Lokasi}
                            style={{ height: "20px", margin: "10px 0" }}
                        />
                        <h3 className="ml-2" style={detailrsH3}>
                            {detailClinic.data.lokasi}
                        </h3>
                    </Row>
                    <br />
                    <Row>
                        <h2 style={detailrsH2}>Main information</h2>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <img
                                src={detailClinic.data.foto}
                                style={detailrsImage}
                                alt="photos of clinic"
                                data-aos="fade-right"
                                data-aos-delay="100"
                                data-aos-duration="2000"
                                data-aos-easing="ease-out"
                            />
                        </Col>
                        <Col>
                            <Row>
                                <h3 style={detailrsH3}>
                                    Appointment Information
                                </h3>
                            </Row>
                            <br />
                            <Row>
                                <h4 style={detailrsH4}>
                                    Appointment Date And Time
                                </h4>
                            </Row>
                            <Row>
                                <ChooseDate />
                            </Row>
                            <br />
                            <Row>
                                <p>Clinic open from 10:00 AM - 04:00 PM</p>
                            </Row>
                            <Row>
                                <p>
                                    You can choose appointment time from 10:00
                                    AM, 12:00 PM, and 02:00 PM
                                </p>
                            </Row>
                            <Row>
                                <p>Each session takes time maximum 2 hours</p>
                            </Row>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col className="pr-5">
                            <h3 style={detailrsH3}>About</h3>
                            <p>{detailClinic.data.tentang}</p>
                        </Col>
                        <Col>
                            <h3 style={detailrsH3}>Facility</h3>
                            <div>
                                <p>
                                    {detailClinic.data.fasilitas}
                                    {/* {detailClinic.data.fasilitas
                                    .split(",")
                                    .map((yey, idx) => {
                                        return (
                                            <Row key={idx}>
                                                <i>{yuhu}</i> <p>{yey}</p>
                                            </Row>
                                        );
                                    })} */}
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <h3 style={detailrsH3}>Choose Doctor</h3>
                    </Row>
                    <Row>
                        {/* {
                            doctorClinic?.map((doctor) => {
                                return (
                                <div key={doctor.id}>

                                    <DoctorCard
                                    // key={idx}
                                    ava={yuhu}
                                    title={doctor.User.email}
                                    nama={doctor.User.nama}
                                    status={doctor.User.status}
                                    experience={doctor.User.pengalaman}
                                    time={doctor.User.waktuKerja}
                                    className="mx-2"
                                />
                                </div>
                                );
                            })
                        } */}
                    </Row>
                    <br />
                    <br />
                    <br />
                    <Row>
                        <h3 style={detailrsH3}>Put Your Pet's Information</h3>
                    </Row>
                    <Row>
                        <ModalAddPet />
                        {userPet.data.result?.map((pet) => {
                            return (
                                <div key={pet.id}>
                                    <Col>
                                        <BoxAnimal
                                            nama={pet.nama}
                                            gender={pet.gender}
                                            image={`${
                                                pet.jenis === "anjing"
                                                    ? dog
                                                    : pet.jenis === "kucing"
                                                    ? cat
                                                    : pet.jenis === "hamster"
                                                    ? hamster
                                                    : rabbit
                                            }`}
                                        />
                                    </Col>
                                </div>
                            );
                        })}
                    </Row>
                </div>
            ) : (
                <Loadscreen />
            )}
        </>
    );
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DetailrsContent);
