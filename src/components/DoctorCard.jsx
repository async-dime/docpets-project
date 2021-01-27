import React from "react";

//styling, icons
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./DoctorCard.scss"

const DoctorCard = (props) => {        
    //custom styling
    const textDocDown = {
        margin: "0",
        padding: "0",
        paddingLeft: "5px",
        fontSize: "15px",
        fontWeight: "500",
        color: "#0F0",
        // color: "#F00",
    };
    let checkIcon = (
        <FontAwesomeIcon
            icon={faCheckCircle}
            style={{
                color: "#fde84d",
                marginLeft: "0.5rem",
                verticalAlign: "center",
                position: "absolute",
                top: "2rem",
                left: "-1rem",
            }}
        />
    );
    let onlineIcon = (
        <FontAwesomeIcon
            icon={faGlobe}
            style={{
                color: `${textDocDown.color}`,
                marginRight: "5px",
                paddingLeft: "5px",
            }}
        />
    );

    return (
        <Button variant="light" className="doctor-card-container">
            <Row>
                <Col className="col-sm-4">
                    <img src={props.ava} className="doctor-image"></img>
                </Col>
                <Col className="col-sm-7">
                    <Row>
                        <p className="text-doctor-up">{props.title}</p>
                    </Row>
                    <Row>
                        <p className="text-doctor-center">{props.nama}</p>
                    </Row>
                    <Row>
                        <i>{onlineIcon}</i>
                        <p className="text-doctor-down">{props.status}</p>
                    </Row>
                </Col>
                <Col className="col-sm-1">
                    <i>{checkIcon}</i>
                </Col>
            </Row>
        </Button>
    );
};

export default DoctorCard;
