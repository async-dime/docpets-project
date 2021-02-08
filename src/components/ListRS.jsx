import React, { Component, useEffect, useState, searchSpace } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { getClinic } from "../store/actions/clinic";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./ListRS.css";
import Lokasi from "./assets/img/lokasi.png";
import ClinicCard from "./ClinicCard";

function Listrs(props) {
    const [klinik, setKlinik] = useState([]);
    const dispatch = useDispatch();
    const klinikSearchList = useSelector(
        (state) => state.clinicSearch.listClinicSearch
    );
    const listRs = useSelector((state) => state.clinic);
    useEffect(() => {
        dispatch(getClinic());
    }, []); //masukin api klinik

    // useEffect(() => {
    //     props.search("");
    //     setKlinik(klinikSearchList);
    // }, []);

    // useEffect(() => {
    //     props.clinics;
    // }, [props.clinics]);

    let { id } = useParams();

    // useEffect(() => {
    //     console.log("ini list rs lo", listRs);
    // }, [listRs]);

    // searchSpace=(event)=>{
    //     let keyword = event.target.value;
    //     this.setState({searc:keyword})
    // }

    return (
        <>
            <Row className="my-2 mx-3 justify-content-center">
                <div>
                    <div className="searchButton">
                        <form className="form-inline my-0 my-lg-0">
                            <input
                                className="form-control mr-sm-1 searching"
                                type="text"
                                placeholder="Search clinic"
                            />
                        </form>
                    </div>
                </div>
                <Form className="mr-2">
                    <Form.Group>
                        <Form.Control
                            name="gender"
                            onChange={(e) => setKlinik(e.target.value)}
                            as="select"
                        >
                            <option>Lokasi</option>
                            <option value="jakarta">Jakarta</option>
                            <option value="bandung">Bandung</option>
                            <option value="jogja">Jogja</option>
                            <option value="surabaya">Surabaya</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Button
                    variant="warning"
                    className="mr-2"
                    style={{
                        backgroundColor: "#fde84d",
                        color: "#445E6B",
                        fontWeight: "700",
                        height: "40px",
                    }}
                >
                    Search Clinic
                </Button>
            </Row>
            <div>
                {/* ini hard code list rs */}
                <Row className="Row">
                    {listRs.listClinic.map((clinic) => (
                        <div className="m-3">
                            <Card
                                style={{ width: "20rem", height: "40rem" }}
                                data-aos="fade-right"
                                data-aos-delay="100"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in"
                            >
                                <Card.Img
                                    variant="top"
                                    src={clinic.foto}
                                    style={{ width: "20rem", height: "15rem" }}
                                />
                                <Card.Body>
                                    <Card.Title>{clinic.nama}</Card.Title>
                                    <Card.Text>
                                        <img src={Lokasi} className="Lokasi" />
                                        <h5 className="Location">
                                            {clinic.lokasi}
                                        </h5>
                                    </Card.Text>
                                    <Card.Text className="Cardrs">
                                        <p className="Fasilitas">
                                            Fasilitas: {clinic.fasilitas}
                                        </p>
                                        <p>{clinic.tentang}</p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Link to={`/detailrs/${clinic.id}`}>
                                        <Button
                                            className="btn border-0 w-100"
                                            onClick={localStorage.setItem("clinicId", clinic.id)}
                                            style={{
                                                backgroundColor: "#fde84d",
                                                color: "#445E6B",
                                                fontWeight: "700",
                                                height: "50px",
                                            }}
                                        >
                                            Book Now
                                        </Button>
                                    </Link>
                                </Card.Footer>
                            </Card>
                        </div>
                    ))}
                </Row>
            </div>
        </>
    );
}

export default Listrs;
