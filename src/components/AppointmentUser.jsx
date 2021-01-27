import { Button } from 'bootstrap';
import React from 'react';
import { Container, Row, Col, CardText, CardBody } from 'react-bootstrap';
import '../components/AppointmentUser.css';


const AppointmentUser = (props) => { 

            <Container className='kt-gd'>
                <div tabIndex='1' className='cr w-100c mb-2'>
                    <CardBody>
                        <CardText>
                            <Row className='ktk-gd justify-content-around text-center'>
                                <Col className='kt01 d-flex' md='6'>
                                <Col className='kt-1' md='2'>
                                    <div><strong>{Date}</strong></div>
                                </Col>
                                <Col className='kt-2 d-flex align-items-center justify-content-center' md='4'>
                                    <div className='nama-cl'>{nama}</div>
                                </Col>
                                </Col>
                                <Col className='kt02' md='6'>
                                <Col className='kt-3 d-flex align' md='3'>
                                    <div ClassName='jam'>{Time}</div>
                                </Col>
                                <Col className='btn-04' md='3'>
                                    <Button type='button' className='btn-md mx-auto d-flex btn-outline-warning'>Approve</Button>   
                                </Col>
                                </Col>
                            </Row>
                        </CardText>
                    </CardBody>
                </div>
            </Container>


}

export default AppointmentUser