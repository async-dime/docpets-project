import React from 'react';
import { Container, Row, Col, Carousel, Card, Button, Jumbotron } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <>
            <div className='bg-footer text-light' expand='lg'>
                <Container className="Container">
                    {/* <img src={Gambar} className="Curve" /> */}
                    <img src={Anjing} className="Anjing" />
                    <div className="Tulisan">
                        <h1>Welcome to VET</h1>
                        <p className="Pre">{`
                        This is a platform where we pet owner can book a desired clinic and the
                        veterinarian. This website is made for the final project of Glints Academy 
                        x Binar Academy batch 9. Please enjoy the website as much as you could.`}
                        </p>
                        <Button className="Tombol">
                          <Link to="/detailrs"></Link>
                        Booking Now</Button>
                    </div>
                </Container>
            </div>
            <div class="container">
                <Row className="Row">
                    <div className="Servis">
                        <h1> OUR SERVICE </h1>
                        <div className="Servis-gambar">
                            <img src={Klinik} className="Klinik" />
                            <img src={Konsul} className="Konsul" />
                            <img src={Dokter} className="Dokter" />
                        </div>
                    </div>
                </Row>
            </div>
            <div class="container">
                <Row className="Row">
                    <div className="Kenapamilih">
                        <img src={Kucing} className="Kucing" />
                        <div className="Kenapa">
                            <h2>Why Choose Us?</h2>
                            <p className="Kenapamilihkita">{`
                    We are the elites of the elites. We provide the best possible platfrom so that our user could 
                    find the most benefit from using our services. We also make sure that the clinics and veterinarians
                    are officially registered and licensed. Try our service now! Get a discount for first time users!`}</p>
                        </div>
                    </div>

                    <div className="Milih">
                        <h1 className="Milihklinik">Choose Clinic</h1>
                        <p className="Choose">{`
                        Please choose your desired clinics. For further search, 
                        please click on the "Find Clinics" in the header section.
                        You can filter the search bar based on the clinics' name,
                        location, and even the type of pets accepted. On the side,
                        you can find more about the few chosen clinics.Just click 
                        "find more" to find out more about those clinics.`}
                        </p>
                    </div>

                    <Carousel className="Carousel">
                        <Carousel.Item interval={1000}>
                            <Card>
                                <Card.Img variant="top" src={RumahSakit} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                     </Card.Text>
                                    <Button className="Tombol">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>

                        <Carousel.Item interval={1000}>
                            <Card>
                                <Card.Img variant="top" src={RumahSakit} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                     </Card.Text>
                                    <Button className="Tombol">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                            <Card>
                                <Card.Img variant="top" src={RumahSakit} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                     </Card.Text>
                                    <Button className="Tombol">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </div>
        </>
    )
}
export default Home