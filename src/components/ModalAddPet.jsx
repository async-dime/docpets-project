import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ModalAddPet.scss";
import { Button, Form, InputGroup } from "react-bootstrap";
import {connect} from 'react-redux'


const ModalAddPet = (props) => {
 

  
  return (
    <div>
      <ModalBody>
        <div className="container-modal-add-pet">
        <h2 className="signup-text">Informasi Hewan Peliharaan</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
            <Form.Control
                  name="gender"
                  onChange={(e) => setGender(e.target.value)}
                  as="select"
                  ref={register({
                    required: true,
                  })}
                >
                  <option>Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Control>
            </Form.Group>
        </Form>



        </div>
      </ModalBody>
    </div>
  );
};

const mapStateProps = () => {
    return {
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        addNewPet: () => dispatch({type: "ADD_DOCTOR"})
    }
}

export default connect (mapStateProps, mapDispatchProps) (ModalAddPet);
