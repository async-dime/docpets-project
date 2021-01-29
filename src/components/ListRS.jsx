import React from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import RumahSakit from "./assets/img/RS.jpeg";
import "./ListRS.css";

function Listrs() {
    return (
        <>
            <Row className="my-2 mx-3 justify-content-center">
                
                <Form className="mr-2" >
                    <Form.Control as="select">
                        <option>Jakarta</option>
                        <option>Bandung</option>
                        <option>Jogja</option>
                        <option>Semarang</option>
                        <option>Solo</option>
                    </Form.Control>
                </Form>
                <Form className="mr-2">
                    <Form.Control as="select">
                        <option>Hewan Peliharaan</option>
                        <option>Kucing</option>
                        <option>Anjing</option>
                        <option>Kelinci</option>
                        <option>Hamster</option>
                    </Form.Control>
                </Form>
                <Button variant="warning" className="mr-2">
                    Cari Sekarang
                </Button>
            
            </Row>
            <Row>
            <div className="m-3">
                <Card style={{ width: "18rem" }} >
                    <Card.Img variant="top" src={RumahSakit} />
                    <Card.Body>
                        <Card.Title>Klinik Peliharaan Sejati</Card.Title>
                        <Card.Text>
                        klinik terbaik untuk para pria sejati
                        </Card.Text>
                        <Button className="Button">
                            <Link to="/detailrs">Book Now</Link>
                        </Button>
                    </Card.Body>
                </Card>
            </div>

            <div className="m-3">
                <Card style={{ width: "18rem" }} >
                    <Card.Img variant="top" src={RumahSakit} />
                    <Card.Body>
                        <Card.Title>Klinik Harapan Indah</Card.Title>
                        <Card.Text>
                        klinik terbaik memanjakan hewan anda
                        </Card.Text>
                        <Button className="Button">
                            <Link to="/detailrs">Book Now</Link>
                        </Button>
                    </Card.Body>
                </Card>
            </div>

            <div className="m-3">
                <Card style={{ width: "18rem" }} >
                    <Card.Img variant="top" src={RumahSakit} />
                    <Card.Body>
                        <Card.Title>Klinik Pukul 10</Card.Title>
                        <Card.Text>
                            klinik tempat menghilangkan stress
                        </Card.Text>
                        <Button className="Button">
                            <Link to="/detailrs">Book Now</Link>
                        </Button>
                    </Card.Body>
                </Card>
            </div>
            </Row>
        </>
    );
}
export default Listrs;
