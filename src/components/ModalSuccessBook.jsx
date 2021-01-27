import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";

const ModalSuccessBook = (props) => {
  const check = <FontAwesomeIcon icon={faCheckCircle} />;

  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };

  const handlerClick = () => {
    showModal();

  };

  const modalSuccessBookHead = {
    backgroundColor: "#445e6b",
    overflow: "hidden"
  
};

  const modalSuccessBookStyle = {
    backgroundColor: "#445e6b",
    color: "#fde84d",
    height: "450px",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontWeight: "bold",
    borderRadius: "30px",
  };

  const checkStyle = {
    fontSize: "7rem",
    marginBottom: "0.5rem",
    position: "relative",
  };

  const modalSuccessh1 = {
    fontWeight: "bold",
    textAlign: "center",
  };

  const buttonSuccessBook = {
    backgroundColor: "#fde84d",
    color: "#445e6b",
    fontSize: "20px",
    fontWeight: "bold",
    height: "60px",
    width: "200px",
    position: "relative",
    marginTop: "0.5rem",
    border: "0px solid",
  };

  return (
    <div>
      <Button style={buttonSuccessBook} onClick={handlerClick}>
        Book Now
      </Button>
      <Modal show={isOpen} onHide={hideModal} centered>
        <Modal.Header className="rounded mb-0 border-0" style={modalSuccessBookHead} closeButton></Modal.Header>
        <Modal.Body className="rounded mb-0 border-0" style={modalSuccessBookStyle}>
          <i style={checkStyle}>{check}</i>{" "}
          <h1 style={modalSuccessh1}>Booking Success</h1>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalSuccessBook;
