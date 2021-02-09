import React, { Component, useEffect, useState, searchSpace } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { getClinic } from "../store/actions/clinic";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./ListRS.css";
import Lokasi from "./assets/img/lokasi.png";

function Listrs(props) {
    const [klinik, setKlinik] = useState([]);
    const dispatch = useDispatch();
    const klinikSearchList = useSelector(
        (state) => state.clinicSearch.listClinicSearch
    );
    const [showList, setShowList] = useState([])
    const [search, setSearch] = useState('')
    const listRs = useSelector((state) => state.clinic);
    useEffect(() => {
        dispatch(getClinic());
    }, []); //masukin api klinik

    let { id } = useParams();

    useEffect(()=>{
        if(search == ''){
          setShowList(listRs.listClinic)
        } else{
          setShowList(listRs.listClinic.filter(rumahSakit => {
            return rumahSakit.nama.toLowerCase().includes(search.toLowerCase())
          }))
        }
      }, [search])
 
    return (
        <>
            <Row className="my-2 mx-3 justify-content-center">
                <div className="searchButton">
                        <form className="form-inline my-0 my-lg-0 SearchButton">
                            <input
                                className="form-control mr-sm-1 searching col-lg-500"
                                type="text"
                                placeholder="Search clinic"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)} // memberikan nilai dalam search box
                            />
                        </form>
                </div>
                
            </Row>
            <div>
                {/* ini hard code list rs */}
                <Row className="Row">
                    {showList.map((clinic) => (
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

export default Listrs