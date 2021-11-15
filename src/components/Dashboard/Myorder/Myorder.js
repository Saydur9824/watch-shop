import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const Myorder = () => {
    const{orderId} = useParams();
    const[service, setService] = useState({});

    useEffect(()=>{
        fetch(`https://fierce-ridge-99046.herokuapp.com/services/${orderId}`)
            .then(res => res.json())
            .then(data =>setService(data))
    },[])

    return (
       <>
        <h1 className='mt-4 mb-2'>Your Orders</h1>
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
       </>
    );
};

export default Myorder;




