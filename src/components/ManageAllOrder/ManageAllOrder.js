import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageAllOrder = () => {
    const[services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://fierce-ridge-99046.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    },[]);

    const handleDelete = id =>{
        const url = `https://fierce-ridge-99046.herokuapp.com/services/${id}`;
        fetch(url,{
            method : 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount){
                    alert('succesfully deleted')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })
    }

    return (
        <div className = ' mt-5 mb-5'>
            <h2 className ='mb-4'>Manage all Order</h2>
            <Row xs={1} md={3} className="g-4">
         {
              
                services.map(service => <div key = {service._id}>

                
                    <Col>
                    <Card>
                        <Card.Img variant="top" src= {service.img} />
                        <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <p>Price :{service.number}</p>
                        <Card.Text>
                           {service.descriiption}
                        </Card.Text>
                        <Link to = {`/services/update/${service._id}`}><Button variant="dark mx-3">Update</Button></Link>

                        <Button onClick ={()=> handleDelete(service._id)} variant="dark">Delete</Button>
                        </Card.Body>
                    </Card>
                    </Col>

            </div>)
           
        }
         </Row>
        </div>
    );
};

export default ManageAllOrder;





