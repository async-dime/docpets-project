import React from 'react'
import { Container, Row, Button, Card, Center } from 'react-bootstrap'
import PP from '../components/assets/img/sunrise.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/ClinicProfile.css'
import ImageUploader from 'react-images-upload'
import Koper from '../components/assets/img/koper.png'


const DoctorProfile = (props) => {
    return (
    
    <Container>
        <Row>
            <div className='col-12 col-lg-4'>
                <div className='container-profile mx-auto d-flex mt-4'>
                    <br /><br />
                        <div className='boxats mx-auto'>
                            <br/>
                            <center>
                                <img src={PP} alt='photo-prf' className='rounded-circle' />
                            <br />
                            <div className='info'>
                                <p>drh Syohan Demega P</p>
                                <div className='btn-disd mx-auto d-flex'>
                                <Button type='button' className='btn-sm disabled mx-auto d-flex' role='button' aria-disabled='true'>Doctor</Button> <br />
                                </div>
                                <div className='cardinfo'>
                                <h6 className='mr-4 mx-auto'>Doctor Information</h6> 
                                    <label className='mr-4 mx-auto'>
                                        Status
                                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" defaultChecked />Online
                                    </label> 
                                    <label className='mr<i class="fas fa-signal-4    "></i> mx-auto'>
                                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />Offline
                                    </label> <br />
                                    <img src={Koper} alt='koper' className='koperku' width={45} height={45} /> <p>3 years</p> 
                                </div>
                                <div className='btn-ats mx-auto d-flex'>
                                <Button
                                    style={{
                                        backgroundColor: "#fde84d",
                                        color: "#445E6B",
                                        margin: "auto",
                                        fontWeight: "700",
                                        border: "none",
                                    }}
                                > Edit Profile 
                                </Button>
                                </div>
                            </div>
                            </center> 
                        </div> 
                </div> <br /> 
                <Card> 
                <div className='btn-lgt'>
                    <h5>Log Out</h5>
                </div>
            </Card>
            </div>
    <div className='col-xs-12 col-md-8'>   
    <div className="con-bwh container-fluid d-flex mt-4 mb-4">
        <div className="row">
            <div className="col-lg mb-6">
                <h1 className="page-header">Doctor Profile</h1>
            </div>
            <div className="col-lg-12 mx-auto" style={{border:'none'}}>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h5 className='judultulisan'>Upload Photo</h5>
                    </div>
                    <div ClassName='uploadpc'>
                    <ImageUploader
                        withIcon={true}
                        buttonText='Upload image'
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                    />
                    </div>
                    <div className="radio-ktk mr-2 d-flex mx-auto">
                        <h5 className='judultulisan'>Doctor Information</h5> 
                    </div>
                    <div className='radio-ktk mr-2 d-flex mx-auto'>
                    <p className='radio-ktk mr-2 d-flex'>Status</p>
                            <label className='mb-2 d-flex mx-auto'>
                                    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" defaultChecked />Active
                                    </label> 
                            <label className='mr-2 d-flex mx-auto'>
                                    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />Offline
                            </label>
                    </div>        
                    <div className='form-opr d-flex mx-auto'>
                        <label>Waktu Aktif</label> <br />
                    </div>
                    <div className='form-opr d-flex mx-auto'>
                            <select className="form-opr">x
                                <option>Choose Operation Times</option>
                                <option>08.00-10.00</option>
                                <option>10.00-1200</option>
                                <option>13.00-15.00</option>
                                <option>15.00-17.00</option>
                                <option>18.00-20.00</option>
                            </select>
                    </div> 
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-lg-12 mx-auto" style={{border:'none'}}>
                                    <div className="form-group" >
                                    <h5 className='judultulisan mr-2 mx-auto'>Basic Information</h5> 
                                        <label>Nama Lengkap</label>
                                        <input className="form-control" placeholder="type Nama Lengkap" />
                                    </div>
                                        <label className='mr-2 mx-auto'>
                                            <p>Gender</p>
                                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" defaultChecked />Male
                                            </label> 
                                            <label className='mr-2 mx-auto'>
                                            <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />Female
                                        </label>
                                    <div className="form-group">
                                    <div className="form-group" >
                                        <label>Experience</label>
                                        <input className="form-control" placeholder="type Experience" />
                                    </div>
                                    <h5 className='judultulisan mr-2 mx-auto'>Contact Details</h5> 
                                        <label>Nomor Telephone </label>
                                        <input className="form-control" placeholder="Type Nomor Telephone" />
                                    </div>
                                    <div className="form-group">
                                        <label>E-mail </label>
                                        <input className="form-control" placeholder="Type E-mail" />
                                    </div>
                                    <div className="form-group">
                                        <label>Special Notes Doctor</label>
                                        <textarea className="form-control" rows="3"></textarea>
                                    </div>
                                    <Button
                                    style={{
                                        backgroundColor: "#fde84d",
                                        color: "#445E6B",
                                        marginRight: "10px",
                                        fontWeight: "700",
                                        border: "none",
                                    }}
                                > Submit 
                                </Button>
                                <Button
                                    style={{
                                        backgroundColor: "#fde84d",
                                        color: "#445E6B",
                                        margin: "auto",
                                        fontWeight: "700",
                                        border: "none",
                                    }}
                                > Reset 
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
    </div>
    </Row>
</Container>
);
}

export default DoctorProfile