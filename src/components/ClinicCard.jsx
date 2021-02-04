import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";


export default function ClinicCard(props) {
    // console.log(clinic, "YOYOYO");
    return (
        <>
            <Card
                style={{ width: "20rem", height: "40rem" }}
                data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
            >
                <Card.Img
                    variant="top"
                    src={props.foto}
                    style={{ width: "20rem", height: "15rem" }}
                />
                <Card.Body>
                    <Card.Title>{props.nama}</Card.Title>
                    <Card.Text>
                        {/* <img src={Lokasi} className="Lokasi" /> */}
                        <h5 className="Location">{props.lokasi}</h5>
                    </Card.Text>
                    <Card.Text className="Cardrs">
                        <p className="Fasilitas">
                            Fasilitas: {props.fasilitas}
                        </p>
                        <p>{props.tentang}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/detailrs/${props.id}`}>
                        <Button
                            className="btn border-0 w-100"
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

            {/* <div className="clinic-card">
                <Link to={`/detailrs/${clinic.id}`}>
                    <img
                        className="clinic-card--image"
                        src={`${clinic.foto}`}
                        alt={clinic.nama + " poster"}
                    />
                    <p className="clinic-card--title">{clinic.nama}</p>
                    <p className="clinic-card--loc">{clinic.lokasi}</p>
                    <p className="clinic-card--desc">{clinic.tentang}</p>
                </Link>
            </div> */}
        </>
    );
}
