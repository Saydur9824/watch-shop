import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Explor = () => {
    const[services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://fierce-ridge-99046.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    },[]);

   

    return (
        <div className = ' mb-5'>
            <h2 className ='mb-4'> Our All Watch</h2>
            <Row xs={1} md={3} className="g-4">
         {
              
                services.map(service => <div key = {service._id}>

                    <Col>
                    <Card>
                        <Card.Img variant="top" src= {service.img} />
                        <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <p>Price : $ {service.number}</p>
                        <Card.Text>
                           {service.descriiption}
                        </Card.Text>
                        <Link to = {`/myorder/${service._id}`}>
                        <Button variant="dark mb-2">Buy now</Button>
                    </Link>
                        </Card.Body>
                    </Card>
                    </Col>

            </div>)
           
        }
         </Row>
        </div>
    );
};

export default Explor;





