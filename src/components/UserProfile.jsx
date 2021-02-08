import React, { useState, useEffect } from "react";
import { Card, CardDeck, Button, Form } from "react-bootstrap";
import ImageUploader from "react-images-upload";
import "./UserProfile.css";
import axios from "axios";
import User from "./assets/img/user.svg";
import Paw from "./assets/img/paw.svg";
import History from "./assets/img/history.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {getUserProfile} from "../store/actions/user"
function Userprofile() {

    const dispatch = useDispatch() 
    useEffect(() => {
        dispatch(getUserProfile())
    }, []) 
    const userProfile = useSelector( state => state.user)
    console.log(userProfile, "ini data porpil")

    // const [users, setUsers] = useState('');
    // const [users, setUsers] = useState({});
    // const [load, setLoad] = useState(false);
    // const [error, setError] = useState(" ");
    // const name = localStorage.getItem("nama");
    // const id = localStorage.getItem("id");
    // const foto = localStorage.getItem("foto");
    // const email = localStorage.getItem("email");
    // const telepon = localStorage.getItem("telepon");
    // const token = localStorage.getItem("token");

    // useEffect(() => {
    //     axios
    //         .get(`https://doctorpets.tk:3002/user/getProfile`)
    //         // .get(`https://doctorpets.tk:3002/user/getProfile`, {
    //         //     headers: {
    //         //         Authorization: `Bearer ${token}`,
    //         //     },
    //         // })
    //         .then((res) => {
    //             console.log(res.data, "data porpil");
    //             setUsers(res.data.result);
    //             setLoad(true);
    //             // {
    //             //     console.log(res.data.result.nama, "usernih");
    //             // }
    //         })
    //         .catch((err) => {
    //             setError(err.message);
    //             setLoad(true);
    //         });
    // }, []);
       
    return (
        <>
            <CardDeck className="CardInfo">
                <Card>
                    {/* <Card.Img variant="top" src={foto} className="Picture" /> */}
                    <Card.Img variant="top" src={userProfile.foto} 
                    className="Picture" />
                    <Card.Body>
                        {/* {console.log(users, "tess")} */}

                        <Card.Title> {userProfile.nama} </Card.Title>
                        <p>{userProfile.role}</p>
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
                        <Button variant="warning">Edit Profile</Button>
                    </Card.Body>
                </Card>
            </CardDeck>

            <Card body className="Logout">
                {" "}
                <Link to="/">Log Out </Link>{" "}
            </Card>

            <Card className="Uploadfoto">
                <Card.Body>
                    {" "}
                    <b>Upload Foto</b>
                </Card.Body>
            </Card>

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
