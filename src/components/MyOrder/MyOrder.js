import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const MyOrder = () => {
    const{orderId} = useParams();
    const[service, setService] = useState({});

    useEffect(()=>{
        fetch(`https://fierce-ridge-99046.herokuapp.com/services/${orderId}`)
            .then(res => res.json())
            .then(data =>setService(data))
    },[])

    return (
        <div className = 'mt-5 mb-5'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {service.img} />
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <h6>Price : {service.number}</h6>
                    <Card.Text>
                    {service.descriiption}
                    </Card.Text>
                    <Button variant="primary">Go to home</Button>
                </Card.Body>
            </Card>
           
        </div>
    );
};

export default MyOrder;




{/* <h2>Details of : {service.name}</h2> */}
{/* <h2>my order : {orderId}</h2> */}