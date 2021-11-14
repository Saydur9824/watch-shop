import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const{ _id, name, number, descriiption, img } = props.service
    return (
        <div >
            <Col>
                <Card className = 'service-part'>
                    <Card.Img variant="top" src= {img} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h5>Price : $ {number}</h5>
                    <Card.Text>
                       { descriiption}
                    </Card.Text>
                    </Card.Body>
                    <Link to = {`/myOrder/${_id}`}>
                        <Button variant="dark mb-2">Buy now</Button>
                    </Link>
                </Card>
                </Col>
        </div>
    );
};

export default Service;