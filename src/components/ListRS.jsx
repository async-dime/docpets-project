import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClinic } from "../store/actions/clinic";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import RumahSakit from "./assets/img/RS.jpeg";
import "./ListRS.css";

function Listrs() {
    const dispatch = useDispatch();
    const listRs = useSelector((state) => state.clinic);
    useEffect(() => {
        dispatch(getClinic());
    }, []);
    
    return (
        <>
            <Row className="my-2 mx-3 justify-content-center">
                <Form className="mr-2">
                    <Form.Control as="select">
                        <option>Lokasi</option>
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

            <div>
                {/* ini hard code list rs */}
                <Row className="Row">
                    {listRs.listClinic.map((clinic) => (
                        <div className="m-3">
                            <Card style={{ width: "20rem" }}>
                                <Card.Img variant="top" src={clinic.foto} />
                                <Card.Body>
                                    <Card.Title>{clinic.nama}</Card.Title>
                                    <Card.Text>{clinic.tentang}</Card.Text>
                                    <Button
                                        className="Button"
                                    >
                                        <Link to={`/detailrs/${clinic.id}`}>
                                            Book Now
                                        </Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </Row>
            </div>
        </>
    );
}
export default Listrs;
