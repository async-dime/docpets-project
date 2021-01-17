import React from 'react';
import { Container, Row, Col, Carousel, Card, Button, Jumbotron } from "react-bootstrap"
import './Home.css';
import RumahSakit from "./assets/img/RS.png";
import Kucing from "./assets/img/kucing.png";
import Anjing from "./assets/img/duduk.png";
import Dokter from "./assets/img/dokter.png";
import Klinik from "./assets/img/klinik.png";
import Konsul from "./assets/img/konsul.png";
import Gambar from "./assets/img/gambar.png";
import { Link } from "react-router-dom";
function Home() {
    return (
        <Container fluid>
            <Row>
            <Col>
        <Container fluid="xl">
            <Row>
                <Col>
                    <div className="Jumbotron">
                        <img src={Gambar} className="Curve" />
                        <div className="Anjing">
                            <img src={Anjing} />
                        </div>
                        <div className="Tulisan">
                            <h1>Welcome to DocPets</h1>
                            <pre className="Pre">{`
                        This is a platform where we pet owner can book a desired clinic and the
                        veterinarian. This website is made for the final project of Glints Academy 
                        x Binar Academy batch 9. Please enjoy the website as much as you could.`}
                            </pre>
                            <Button variant="warning">
                            <Link to="/listrs">Booking Now</Link></Button>
                        </div>
                    </div>
                    </Col>
                    </Row>
                </Container>
                    <div className="Servis">

                        <h1> OUR SERVICE </h1>
                        <div className="Servis-gambar">
                            <div className="Klinik">
                                <img src={Klinik} />
                            </div>
                            <div className="Konsul">
                                <img src={Konsul} />
                            </div>
                            <div className="Dokter">
                                <img src={Dokter} />
                                <h4 className="Janji" >Bertemu Dokter</h4>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="Kenapamilih">
                        <img src={Kucing} className="Kucing" />
                        <div >
                            <h2 className="Kenapamilihkita">Why Choose Us?</h2>
                            <pre className="Kenapa">{`
                    We are the elites of the elites. We provide the best possible platfrom so that our user 
                    could find the most benefit from using our services. We also make sure that the clinics 
                    and veterinarians are officially registered and licensed. Try our service now! Get a 
                    discount for first time users!`}
                    </pre>
                        </div>
                    </div>

                    <div className="Milih">
                        <h1 className="Milihklinik">Choose Clinic</h1>
                        <pre className="Choose">{`
                        Please choose your desired clinics. For further search, 
                        please click on the "Find Clinics" in the header section.
                        You can filter the search bar based on the clinics' name,
                        location, and even the type of pets accepted. On the side,
                        you can find more about the few chosen clinics.Just click 
                        "find more" to find out more about those clinics.`}
                        </pre>
                    </div>

                    <Carousel className="Carousel">
                        <Carousel.Item interval={1000}>
                            <Card className="Pertama">
                                <Card.Img variant="top" src={RumahSakit} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                     </Card.Text>
                                    <Button variant="warning"><Link to="/detailrs">Book Now</Link></Button>
                                </Card.Body>
                            </Card>
                            </Carousel.Item>

                            <Carousel.Item interval={1000}>
                            <Card className="Pertama">
                                <Card.Img variant="top" src={RumahSakit} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                     </Card.Text>
                                    <Button variant="warning"><Link to="/detailrs">Book Now</Link></Button>
                                </Card.Body>
                            </Card>
                            </Carousel.Item>

                            <Carousel.Item interval={1000}>
                            <Card className="Pertama">
                                <Card.Img variant="top" src={RumahSakit} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                     </Card.Text>
                                    <Button variant="warning">
                                    <Link to="/detailrs">Book Now</Link></Button>
                                </Card.Body>
                            </Card>
                            </Carousel.Item>

                            <Carousel.Item interval={1000}>
                            <Card className="Pertama">
                                <Card.Img variant="top" src={RumahSakit} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                     </Card.Text>
                                    <Button variant="warning"><Link to="/detailrs">Book Now</Link></Button>
                                </Card.Body>
                            </Card>
                            </Carousel.Item>

                            <Carousel.Item interval={1000}>
                            <Card className="Pertama">
                                <Card.Img variant="top" src={RumahSakit} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                     </Card.Text>
                                    <Button variant="warning"><Link to="/detailrs">Book Now</Link></Button>
                                </Card.Body>
                            </Card>
                            </Carousel.Item>

                    </Carousel>

                </Col>
            </Row>
        </Container>
    )
}

export default Home