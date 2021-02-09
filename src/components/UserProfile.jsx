import React, { useEffect } from "react";
import { Card, CardDeck, Button, Form } from "react-bootstrap";
import ImageUploader from "react-images-upload";
import "./UserProfile.css";
import Paw from "./assets/img/paw.svg";
import History from "./assets/img/history.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "../store/actions/user"
import { baseUrl } from "../helpers/api"
function Userprofile() {

    const dispatch = useDispatch() 
    useEffect(() => {
        dispatch(getUserProfile())
    }, []) 
    const userProfile = useSelector( state => state.user)
    console.log(userProfile, "ini data porpil")

       
    return (
        <>
            <CardDeck className="CardInfo"> 
                <Card>
                    
                    <Card.Img variant="top" src= {`${baseUrl}${userProfile.foto}`}
                    className="Picture" />
                    <Card.Body>
                       
                        <Card.Title className="Nama"> {userProfile.nama} </Card.Title>
                        <p className="Role">{userProfile.role}</p>
                        <Card.Text className="Count">
                            <div className="Hewan">
                                <img src={Paw} className="Paw" />{" "}
                                <p className="Jumlah">{userProfile.numPet} Pets</p>
                            </div>
                            <div className="History">
                                <img src={History} className="Date" />{" "}
                                <p className="Kunjungan">{userProfile.numAppointment} Times</p>
                            </div>
                        </Card.Text>

                    </Card.Body>
                </Card>
            </CardDeck>

            <Card body className="Logout">
                {" "}
                <Link to="/">Log Out </Link>{" "}
            </Card>
          
            <CardDeck className="Uploadfoto">
                <Card.Body>
                    {" "}
                    <b>Upload Foto</b>
                </Card.Body>
            </CardDeck>

            <Card className="Upload">
                <ImageUploader
                    withIcon={true}
                    buttonText="Choose images"
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                />
            </Card>

            <Card className="Basicinformation">
                <Card.Body>
                    {" "}
                    <b>Basic Information</b>
                </Card.Body>
                <Form.Group controlId="FormEmail" className="Username">
                    <p>Username</p>
                    <Form.Control
                        type="text"
                        placeholder={userProfile.nama}
                        className="Formemail"
                        
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="Gender">
                    <p>Gender</p>
                    {userProfile.gender}
                </Form.Group>
            </Card>

            <Card className="Contact">
                <Card.Body>
                    {" "}
                    <b>Contact Information</b>
                </Card.Body>
                <Form.Group controlId="FormEmail" className="Username">
                    <p>Phone Number</p>
                    <Form.Control
                        type="number"
                        placeholder={userProfile.telepon}
                        className="Formemail"
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="FormEmail" className="Username">
                    <p>Email</p>
                    <Form.Control
                        type="email"
                        placeholder={userProfile.email}
                        className="Formemail"
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="FormEmail" className="Username">
                    <p>Password</p>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        className="Formemail"
                    ></Form.Control>
                </Form.Group>
            </Card>
            
            <Button variant="warning" className="Simpan">
                Save Profile
            </Button>
        </>
    );
}
export default Userprofile;
