import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getClinic} from "../store/actions/clinic";
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
import Dokter from "./assets/img/dokter.png";
import Klinik from "./assets/img/klinik.png";
import Konsul from "./assets/img/konsul.png";
import Gambar from "./assets/img/gambar.png";
import { Link } from "react-router-dom";
function Home() {
        const dispatch = useDispatch ()
        const listRs = useSelector (state => state.clinic)
        useEffect (()=>{
            dispatch(getClinic())
        }, [])
    return (
        <>
            <div className="bg-footer text-light" expand="lg">
                <Container className="Container">
                    {/* <img src={Gambar} className="Curve" /> */}
                    <img src={Anjing} className="Anjing" />
                    <div className="Tulisan">
                        <h1>Welcome to DocPets</h1>
                        <p className="Pre">
                            {`
                        This is a platform where we pet owner can book a desired clinic and the
                        veterinarian. This website is made for the final project of Glints Academy 
                        x Binar Academy batch 9. Please enjoy the website as much as you could.`}
                        </p>
                        <Link to="/listrs">
                            <Button className="Tombol">
                            <Link to="/listrs">Book Now</Link>
                            </Button>
                        </Link>
                    </div>
                </Container>
            </div>
            <br />
            <div className="container">
                <Row className="Tengah">
                    <div className="justify-content-center align-content-center">
                        <h1 className="text-sm-center mt-2 Servis">
                            {" "}
                            OUR SERVICE{" "}
                        </h1>
                        <br />
                        <div className="text-sm-center">
                            <img src={Klinik} className="Klinik" />
                            <img src={Konsul} className="Konsul" />
                            <img src={Dokter} className="Dokter" />
                        </div>
                    </div>
                </Row>
            </div>
            <br />
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
                        <p className="Choose">
                            {`
                        Please choose your desired clinics. For further search, 
                        please click on the "Find Clinics" in the header section.
                        You can filter the search bar based on the clinics' name,
                        location, and even the type of pets accepted. On the side,
                        you can find more about the few chosen clinics.Just click 
                        "find more" to find out more about those clinics.`}
                        </p>
                    </div>
                    
                    <Carousel className="Carousel">
                    {listRs.listClinic.map((clinic) =>(
                        <Carousel.Item interval={4000}>
                            <Card>
                                <Card.Img variant="top" src={clinic.foto} />
                                <Card.Body>
                                    <Card.Title>{clinic.nama}</Card.Title>
                                    <Card.Text>
                                    {clinic.tentang}
                                    </Card.Text>
                                    <Button className="Tombol">
                                    <Link to={`/detailrs/${clinic.id}`}>Book Now</Link>
                                    </Button>
                                </Card.Body>
                            </Card>   
                        </Carousel.Item>
                    ))}
                    </Carousel>
                    
                </Row>
            </div>
        </>
    );
}
export default Home;
