import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://fierce-ridge-99046.herokuapp.com/services')
            .then(res =>res.json())
            .then(data => setServices(data));
    },[])
    
    return (
        <div className = 'mt-5 mb-5'>
            <Container>
                <h5>Most Wanted Product</h5>
                <h1 className='mb-5'>Popular Watches</h1>
            <Row xs={1} md={3} className="g-4">
            {
                services.map(service => <Service
                    key={service._id}
                     service = {service} 
                    ></Service> )
            }
            </Row>
            </Container>
            
        </div>
    );
};

export default Services;