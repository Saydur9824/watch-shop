import React from 'react';
import { Card } from 'react-bootstrap';
import notfound from '../../images/notFound/3804918.jpg'

const NotFound = () => {
    return (
        <div>
             <Card>
                <Card.Img variant="top" src= {notfound} />
                <Card.Body>
                <Card.Text>
                   
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default NotFound;