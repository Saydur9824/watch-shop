import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import pizza from '../../images/always/alwayspic.png'
import './Always.css'

const Always = () => {
    return (
        <div className = 'always-part'>
            <Container>
                <Row>
                    <Col sm={4} className ="always-text" >
                        <h4>People Behind Product</h4>
                        <h1>Our Designer</h1>
                        <p>Pellentesque ornare sem ipsum lacinia quam venenatis purus vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante Praesent commodo cursus magna, vel scelerisque nisl </p>
                        <Button variant="info">Details</Button>
                    </Col>
                    <Col sm={8}>
                        <img src= {pizza} alt="" />
                    </Col>
                   
                </Row>
            </Container>
        </div>
    );
};

export default Always;