import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import spcial from '../../images/always/apecial.jpg'
import './Spcial.css'

const Spcial = () => {
    return (
        <div className = 'spcil-part'>
           <Container>
                <Row>
                    <Col>
                    <img src= {spcial} alt="" />
                    </Col>
                    <Col className = 'spcil-text'>
                        <h3>Special offer</h3>
                        <h1>TOmega Diver 300M</h1>
                        <p>The 40mm stainless steel case of the Mondaine Evo2 Automatic is functional and effortlessly stylish in its design, with simple straight lugs and a narrow bezel that keeps as much focus as possible on the dial. The soft, continuous rounded curve of the case sides gives these simple</p>
                        <h3>$ 555.99</h3>
                       
                       <Button variant="dark">Get Offer</Button>
                       
                    </Col>
                </Row>
            
            </Container>
        </div>
    );
};

export default Spcial;



