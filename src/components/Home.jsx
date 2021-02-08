import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClinic } from "../store/actions/clinic";
import {
    Container,
    Row,
    Col,
    Carousel,
    Card,
    Button,
    Jumbotron,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import RumahSakit from "./assets/img/RS.jpeg";
import Kucing from "./assets/img/kucing.png";
import Anjing from "./assets/img/duduk.png";
import Dokter from "./assets/img/dokter.svg";
import Klinik from "./assets/img/klinik.svg";
import Konsul from "./assets/img/konsul.svg";
import { Link } from "react-router-dom";
function Home() {
    const dispatch = useDispatch();
    const listRs = useSelector((state) => state.clinic);
    useEffect(() => {
        dispatch(getClinic());
    }, []);

    //custom styling
    const textH3 = {
        fontSize: "20px",
        fontWeight: "700",
        color: "#000",
        marginBottom: "1rem",
        textAlign: "center",
    };
    const textStyle = {
        fontSize: "15px",
        fontWeight: "300",
        color: "#000",
        marginBottom: "1rem",
        textAlign: "center",
    };

    return (
        <>
            <div className="bg-footer text-light" expand="lg">
                <Container className="Container py-5 mb-2">
                    <Col className="col-sm-7">
                        <div className="Tulisan my-3">
                            <h1
                                data-aos="fade-right"
                                data-aos-delay="500"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out-cubic"
                            >
                                Welcome to DocPets
                            </h1>
                            <p
                                className="Pre"
                                data-aos="fade-right"
                                data-aos-delay="750"
                                data-aos-duration="1500"
                                data-aos-easing="ease-in-out-cubic"
                            >
                                {`
                        This is a platform where we pet owner can book a desired clinic and the
                        veterinarian. This website is made for the final project of Glints Academy 
                        x Binar Academy batch 9. Please enjoy the website as much as you could.`}
                            </p>
                            <Link to="/listrs">
                                <Button
                                    className="btn border-0 pr-3 pl-3 ml-2"
                                    style={{
                                        backgroundColor: "#fde84d",
                                        color: "#445E6B",
                                        margin: "1rem 1rem",
                                        fontWeight: "700",
                                        width: "200px",
                                    }}
                                    data-aos="fade-right"
                                    data-aos-delay="100"
                                    data-aos-duration="2000"
                                    data-aos-easing="ease-in-out-cubic"
                                >
                                    Book Now
                                </Button>
                            </Link>
                        </div>
                    </Col>
                    <Col className="col-sm-3">
                        <img
                            src={Anjing}
                            className="Anjing"
                            data-aos="zoom-in-left"
                            data-aos-delay="50"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-quad"
                        />
                    </Col>
                    <Col className="col-sm-2"></Col>
                </Container>
            </div>
            <br />
            <div className="container">
                <Row className="Tengah">
                    <div className="justify-content-center align-content-center">
                        <h1
                            className="text-sm-center mt-2 Servis"
                            data-aos="fade-down"
                            data-aos-delay="100"
                            data-aos-duration="4000"
                            data-aos-easing="ease-out-back"
                        >
                            {" "}
                            OUR SERVICE{" "}
                        </h1>
                        <br />
                        <Container fluid className="my-2">
                            <Row className="align-items-center justify-content-around">
                                <Col className="col-sm-3">
                                    <Row
                                        data-aos="fade-down-right"
                                        data-aos-delay="100"
                                        data-aos-duration="4000"
                                        data-aos-easing="ease-in-out-cubic"
                                    >
                                        <img
                                            className="mx-auto my-auto"
                                            src={Klinik}
                                        />
                                    </Row>
                                    <Row
                                        data-aos="fade-down-right"
                                        data-aos-delay="100"
                                        data-aos-duration="4000"
                                        data-aos-easing="ease-in-out-cubic"
                                        className="mt-2"
                                    >
                                        <h3
                                            className="mx-auto my-2"
                                            style={textH3}
                                        >
                                            Klinik/ Rumah Sakit
                                        </h3>
                                        <p
                                            className="mx-auto my-2"
                                            style={textStyle}
                                        >
                                            Choose the clinic or hospital
                                            closest to you
                                        </p>
                                    </Row>
                                </Col>
                                <Col className="col-sm-3">
                                    <Row
                                        data-aos="fade-down"
                                        data-aos-delay="100"
                                        data-aos-duration="4000"
                                        data-aos-easing="ease-in-out-cubic"
                                    >
                                        <img
                                            className="mx-auto my-auto"
                                            src={Konsul}
                                        />
                                    </Row>
                                    <Row
                                        data-aos="fade-down"
                                        data-aos-delay="100"
                                        data-aos-duration="4000"
                                        data-aos-easing="ease-in-out-cubic"
                                        className="mt-2"
                                    >
                                        <h3
                                            className="mx-auto my-2"
                                            style={textH3}
                                        >
                                            Consultation Date
                                        </h3>
                                        <p
                                            className="mx-auto my-2"
                                            style={textStyle}
                                        >
                                            Determine the date and time of
                                            consultation with a veterinarian
                                        </p>
                                    </Row>
                                </Col>
                                <Col className="col-sm-3">
                                    <Row
                                        data-aos="fade-down-left"
                                        data-aos-delay="100"
                                        data-aos-duration="4000"
                                        data-aos-easing="ease-in-out-cubic"
                                    >
                                        <img
                                            className="mx-auto my-auto"
                                            src={Dokter}
                                        />
                                    </Row>
                                    <Row
                                        data-aos="fade-down-left"
                                        data-aos-delay="100"
                                        data-aos-duration="4000"
                                        data-aos-easing="ease-in-out-cubic"
                                        className="mt-2"
                                    >
                                        <h3
                                            className="mx-auto my-2"
                                            style={textH3}
                                        >
                                            Meet the veterinarian
                                        </h3>
                                        <p
                                            className="mx-auto my-2"
                                            style={textStyle}
                                        >
                                            Meet the veterinarian to do your
                                            pet's consultation
                                        </p>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Row>
            </div>
            <br />
            <div class="container">
                <Row className="Row">
                    <div className="Kenapamilih mt-3">
                        <img
                            src={Kucing}
                            className="Kucing"
                            data-aos="fade-right"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out-cubic"
                        />
                        <div className="Kenapa">
                            <h2
                                className="Kucing"
                                data-aos="fade-left"
                                data-aos-delay="500"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out-cubic"
                            >
                                Why Choose Us?
                            </h2>
                            <p
                                className="Kenapamilihkita px-2"
                                data-aos="fade-left"
                                data-aos-delay="500"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out-cubic"
                            >
                                Nobody likes sitting in a veterinarian’s office,
                                so we don’t make you wait. We provide this
                                platform so that you could search and book an
                                appointment with the most experienced pet
                                clinics and veterinarians to take care of your
                                pet without needing you to leave your comfort
                                zone. We welcome feedback to improve our
                                service.
                            </p>
                        </div>
                    </div>

                    <div
                        className="Milih"
                        data-aos="fade-left"
                        data-aos-delay="500"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out-cubic"
                    >
                        <h1 className="Milihklinik">Choose Clinic</h1>
                        <p className="Choose">
                            You can choose your clinic according to your
                            preferences. Filter the clinics based on the
                            location and name of the clinic. Then click "book
                            now" to find out more about the clinics of your
                            choice.
                        </p>
                    </div>

                    <Carousel
                        className="Carousel"
                        indicators="false"
                        data-aos="fade-left"
                        data-aos-delay="500"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out-cubic"
                    >
                        {listRs.listClinic.map((clinic) => (
                            <Carousel.Item interval={4000}>
                                <Card>
                                    <Card.Img variant="top" src={clinic.foto} />
                                    <Card.Body>
                                        <Card.Title>{clinic.nama}</Card.Title>
                                        <Card.Text>{clinic.tentang}</Card.Text>

                                        <Link to={`/detailrs/${clinic.id}`}>
                                            <Button
                                                className="btn border-0 w-100 pr-3 pl-3 ml-2"
                                                onClick={localStorage.setItem("clinicId", clinic.id)}
                                                style={{
                                                    backgroundColor: "#fde84d",
                                                    color: "#445E6B",
                                                    margin: "1rem 1rem",
                                                    fontWeight: "700",
                                                    width: "200px",
                                                }}
                                                data-aos="fade-right"
                                                data-aos-delay="0"
                                                data-aos-duration="1000"
                                                data-aos-easing="ease-in-out-cubic"
                                            >
                                                Book Now
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Row>
                <br />
                <br />
                <br />
            </div>
        </>
    );
}
export default Home;
