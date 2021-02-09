import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import { connect } from "react-redux";

import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./ModalAddPet.css";


const ModalAddPet = (props) => {
    const plus = <FontAwesomeIcon icon={faPlusCircle} />;

    const [isOpen, setIsOpen] = useState(false);
    const showModal = () => {
        setIsOpen(true);
    };
    const hideModal = () => {
        setIsOpen(false);
    };

    const [species, setSpecies] = useState("");
    const handlePetSpecies = (e) => {
        setSpecies(e.target.value);
    };

    const [petGender, setPetGender] = useState("");
    const handlePetGender = (e) => {
        setPetGender(e.target.value);
    };

    const [name, setName] = useState("");
    const handlerName = (e) => {
        setName(e.target.value);
    };

    const toggle = () => setIsOpen(!isOpen);

    const history = useHistory();
    const params = useParams().id;

    const handleSubmit = (e) => {
        let test = () =>
            name === ""
                ? alert("please add your pet's name")
                : species === ""
                ? alert("please add your pet's species")
                : petGender === ""
                ? alert("please add your pet's species")
                : "";
        test();
        const bodyData = {
            nama: name,
            jenis: species,
            gender: petGender,
        };
        console.log(bodyData);
        Axios(`https://doctorpets.tk:3002/user/addPet`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Access-Control-Allow-Origin": "*",
            },
            data: JSON.stringify(bodyData),
        })
            .then(() => {
                history.push(`/detailrs/${localStorage.getItem("clinicId")}`);
                toggle();
                window.location.reload();
            })
            .catch((err) => {
                console.info(err.message);
                return err.message !== "" ? alert(err.message) : "";
            });
    };

    const modalAddPetStyle = {
        width: "200px",
    };

    const modalAddPetStyleH1 = {
        fontSize: "30px",
        fontWeight: "700",
        marginLeft: "20px",
        margin: "10px 0",
        color: "#445e6b",
    };

    const modalAddPetStyleH4 = {
        fontSize: "16px",
        fontWeight: "700",
        marginLeft: "20px",
        margin: "10px 0",
        color: "#445e6b",
    };

    const plusStyle = {
        fontSize: "3rem",
        position: "relative",
    };

    const buttonAddPet = {
        backgroundColor: "#fde84d",
        color: "#445e6b",
        fontWeight: "bold",
        position: "relative",
        marginTop: "0.5rem 0",
        border: "0px",
        width: "200px",
    };

    return (
        <div>
            <div style={modalAddPetStyle}>
                <Button style={buttonAddPet} onClick={showModal}>
                    <i style={plusStyle}>{plus}</i>{" "}
                    <h4 style={modalAddPetStyleH4}>Add Pet</h4>
                </Button>
                <Modal
                    show={isOpen}
                    onHide={hideModal}
                    className="modal-pet"
                    centered
                >
                    <Modal.Header
                        className="border-0"
                        className="mx-auto"
                        closeButton
                    >
                        <h1 style={modalAddPetStyleH1}>Pet Information</h1>
                    </Modal.Header>
                    <Modal.Body className="add-pet-form">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <label
                                className="border-0 my-2"
                                htmlFor="namaHewan"
                            >
                                Pet Name
                            </label>
                            <br />
                            <input
                                className="border-0 my-2"
                                type="text"
                                placeholder="Your pet's name"
                                onChange={(e) => handlerName(e, "value")}
                            />
                            <br />
                            <label
                                className="border-0 my-2"
                                htmlFor="PilihHewan"
                            >
                                Pet Species
                            </label>
                            <br />
                            <select
                                className="pets-dropdown border-0 my-2"
                                name="pets"
                                onChange={(e) => handlePetSpecies(e, "value")}
                            >
                                <option value="">Your Pet's Species</option>
                                <option value="anjing">Dog</option>
                                <option value="kucing">Cat</option>
                                <option value="kelinci">Rabbit</option>
                                <option value="hamster">Hamster</option>
                            </select>{" "}
                            <br />
                            <label className="border-0 my-2" htmlFor="gender">
                                Pet Gender
                            </label>
                            <br />
                            <select
                                className="pets-dropdown border-0 my-2"
                                id="pets"
                                name="pets"
                                onChange={(e) => handlePetGender(e, "value")}
                            >
                                <option className="border-0" value="Choose">
                                    Your Pet's Gender
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>{" "}
                            <br />
                        </form>
                    </Modal.Body>
                    <Modal.Footer className="modal-footer-pet border-0 my-2">
                        <button
                            onClick={handleSubmit}
                            className="add-pet-button btn-block"
                        >
                            Add
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

const stateProps = () => {
    return {};
};

const dispatchProps = (dispatch) => {
    return {};
};

export default connect(stateProps, dispatchProps)(ModalAddPet);
