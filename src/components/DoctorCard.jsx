import React from "react";
import { Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faGlobe } from "@fortawesome/free-solid-svg-icons";

import ava1 from "../components/assets/img/doc1.png";
import ava2 from "../components/assets/img/doc2.jpg";

export default function DoctorCard(props) {
  let dummyDoc = [
    {
      nama: "Dr. Alex, SP. Kucing",
      status: "offline",
      title: "Dokter Kucing",
      checked: "true",
      ava: ava1,
    },
  ];

  let docStatus = dummyDoc[0].status;

  //custom styling
  const doctorCardContainer = {
    padding: "0.5rem",
    maxWidth: "250px",
    maxHeight: "150px",
  };
  const docImage = {
    verticalAlign: "middle",
    maxWidth: "70px",
    borderRadius: "50%",
    margin: "10px",
  };
  const textDocSmall = {
    margin: "0",
    padding: "0",
    fontSize: "15px",
    fontWeight: "500",
    color: "#fde84d",
  };
  const textDocBig = {
    margin: "0",
    padding: "0",
    fontSize: "18px",
    fontWeight: "500",
    color: "#445e6b",
  };
  let checkIcon = (
    <FontAwesomeIcon
      icon={faCheckCircle}
      style={{
        color: "#fde84d",
        marginLeft: "0.5rem",
        verticalAlign: "center",
      }}
    />
  );
  let onlineIcon = (
    <FontAwesomeIcon
      icon={faGlobe}
      style={{
        color: "#fde84d",
        marginRight: "8px",
      }}
    />
  );

  return (
    <div className="card-body">
      <Row>
        <Col>
          <img src={dummyDoc[0].ava} style={docImage}></img>
        </Col>
        <Col>
          <Row>
            <p style={textDocSmall}>{dummyDoc[0].title}</p>
          </Row>
          <Row>
            <p style={textDocBig}>{dummyDoc[0].nama}</p>
          </Row>
          <Row>
            <i>{onlineIcon}</i>
            <p style={textDocBig}>{dummyDoc[0].status}</p>
          </Row>
        </Col>
        <Col>
          <br />
          <Row>
            <Col></Col>
            <Col>
              <i>{checkIcon}</i>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
