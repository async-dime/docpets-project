import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import RumahSakit from "./assets/img/RS.png";
import "./ListRS.css"

function Listrs() {
  return (
    <>
      <div className="Baratas">
        <Form className="Kota">
          <Form.Control as="select">
            <option>Jakarta</option>
            <option>Bandung</option>
            <option>Jogja</option>
            <option>Semarang</option>
            <option>Solo</option>
          </Form.Control>
        </Form>

        <Form className="Hewan">
          <Form.Control as="select">
            <option>Hewan Peliharaan</option>
            <option>Kucing</option>
            <option>Anjing</option>
            <option>Kasuari</option>
            <option>Anoa</option>
          </Form.Control>
        </Form>
        
        <Button variant="warning" className="Cari">Cari Sekarang</Button>
        </div>
      <div>
      <Card className="RS">
      <Card.Img variant="top" src={RumahSakit} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="warning"><Link to="/detailrs">Book Now</Link></Button>
      </Card.Body>
    </Card>

    </div>
    </>
    )
}
export default Listrs