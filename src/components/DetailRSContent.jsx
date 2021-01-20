import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Modal } from "react-bootstrap";
import { connect } from "react-redux";

//component
import ModalAddPet from "./ModalAddPet";
import ModalSuccessBook from "./ModalSuccessBook";
import DoctorCard from "./DoctorCard";

//styling, icon, & image
import "./DetailRSContent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

function DetailrsContent(props) {
  const dummy = {
    id: 51,
    nama: "Klinik Peliharaan Sejati",
    lokasi: "batam",
    tentang: "klinik terbaik untuk para pria sejati",
    fasilitas: "toilet,whiskas gratis",
    foto:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F3e%2FHELIOS_ENDO-Klinik_Hamburg_Foto_2013_June_05.jpg&f=1&nofb=1",
    dokter: null,
    adminId: 4,
    createdAt: "2021-01-13T14:28:45.000Z",
    updatedAt: "2021-01-13T14:28:45.000Z",
  };

  let dummyDoc = [
    {
      nama: "Dr. Alizah, SP. Kucing",
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
      nama: "Dr. Alizah, SP. Kelinci",
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

  //hooks
  const [day, setDay] = useState("");
  const [waktu, setWaktu] = useState();

  //handler
  const handleClickDay = (e) => {
    setDay(e.target.value);
  };
  const handleClickWaktu = (e) => {
    setWaktu(e.target.value);
  };

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

  //icon
  const yuhu = (
    <FontAwesomeIcon
      icon={faBookmark}
      style={{ color: "#fde84d", marginRight: "0.5rem" }}
    />
  );

  let str = dummy.fasilitas;
  let temp = new Array();
  temp = str.split(",");

  return (
    <div className="detailrs-container">
      <Row>
        <Col>
          <h1 style={detailrsH1}>{dummy.nama}</h1>
        </Col>
        <Col md="auto"></Col>
        <Col xs lg="2">
          <ModalSuccessBook />
        </Col>
      </Row>
      <br />
      <Row>
        <h2 style={detailrsH2}>Informasi Umum</h2>
      </Row>
      <br />
      <Row>
        <Col>
          <img src={dummy.foto} style={detailrsImage} alt="" />
        </Col>
        <Col>
          <Row>
            <h3 style={detailrsH3}>Informasi Kunjungan</h3>
          </Row>
          <br />
          <Row>
            <h4 style={detailrsH4}>Hari Kunjungan</h4>
          </Row>
          <Row>
            <div className="d-flex">
              <button
                value="1"
                onClick={(e) => {
                  handleClickDay(e, "value");
                }}
                className={`detailButtonBookDay ${
                  day === "1" ? "detailButtonBookDayClick" : ""
                }`}
              >
                Senin, <br /> 11 Januari
              </button>
              <button
                value="2"
                onClick={(e) => {
                  handleClickDay(e, "value");
                }}
                className={`detailButtonBookDay ${
                  day === "2" ? "detailButtonBookDayClick" : ""
                }`}
              >
                Selasa, <br /> 12 Januari
              </button>
              <button
                value="3"
                onClick={(e) => {
                  handleClickDay(e, "value");
                }}
                className={`detailButtonBookDay ${
                  day === "3" ? "detailButtonBookDayClick" : ""
                }`}
              >
                Rabu, <br /> 13 Januari
              </button>
              <button
                value="4"
                onClick={(e) => {
                  handleClickDay(e, "value");
                }}
                className={`detailButtonBookDay ${
                  day === "4" ? "detailButtonBookDayClick" : ""
                }`}
              >
                Kamis, <br /> 14 Januari
              </button>
              <button
                value="5"
                onClick={(e) => {
                  handleClickDay(e, "value");
                }}
                className={`detailButtonBookDay ${
                  day === "5" ? "detailButtonBookDayClick" : ""
                }`}
              >
                Jumat, <br /> 15 Januari
              </button>
              <button
                value="6"
                onClick={(e) => {
                  handleClickDay(e, "value");
                }}
                className={`detailButtonBookDay ${
                  day === "6" ? "detailButtonBookDayClick" : ""
                }`}
              >
                Sabtu, <br /> 16 Januari
              </button>
              <button
                value="7"
                onClick={(e) => {
                  handleClickDay(e, "value");
                }}
                className={`detailButtonBookDay ${
                  day === "7" ? "detailButtonBookDayClick" : ""
                }`}
              >
                Minggu, <br /> 17 Januari
              </button>
            </div>
          </Row>
          <br />
          <Row>
            <h4 style={detailrsH4}>Waktu Kunjungan</h4>
          </Row>
          <Row>
            <div className="d-flex">
              <button
                value="1"
                onClick={(e) => {
                  handleClickWaktu(e, "value");
                }}
                className={`detailButtonBookDay ${
                  waktu === "1" ? "detailButtonBookDayClick" : ""
                }`}
              >
                09:00-12:00 Pagi
              </button>
              <button
                value="2"
                onClick={(e) => {
                  handleClickWaktu(e, "value");
                }}
                className={`detailButtonBookDay ${
                  waktu === "2" ? "detailButtonBookDayClick" : ""
                }`}
              >
                12:00-15:00 Siang
              </button>
              <button
                value="3"
                onClick={(e) => {
                  handleClickWaktu(e, "value");
                }}
                className={`detailButtonBookDay ${
                  waktu === "3" ? "detailButtonBookDayClick" : ""
                }`}
              >
                15:00-18:00 Sore
              </button>
            </div>
          </Row>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <h3 style={detailrsH3}>Tentang</h3>
          <p>{dummy.tentang}</p>
        </Col>
        <Col>
          <h3 style={detailrsH3}>Fasilitas</h3>
          <div>
            {temp.map((yey, idx) => {
              return (
                <Row key={idx}>
                  <i>{yuhu}</i> <p>{yey}</p>
                </Row>
              );
            })}
          </div>
        </Col>
      </Row>
      <Row>
        <h3 style={detailrsH3}>Pilih Dokter</h3>
      </Row>
      <Row>
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </Row>
      <Row>
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </Row>
      <Row>
        <h3 style={detailrsH3}>Masukkan Informasi Hewan Peliharaan</h3>
      </Row>
      <Row>
        <ModalAddPet />
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  // signUpDatas: (data) => dispatch(registerAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailrsContent);
