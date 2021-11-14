import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className = 'footer-part pt-5 pb-2'>
            <Container>
            <Row>
                <Col sm>
                 <h2>REACH US AT</h2>
                    <Link className = 'footer-link'><p>LONDON: 56 Rd. Wellborn London.</p></Link>
                    <Link className = 'footer-link'><p>INDIA: 402 Venus Atlantis, 100 FT Road</p></Link>
                    <Link className = 'footer-link'><p>ongoing COVID-19 pandemic</p></Link>
                    <Link className = 'footer-link'><p>suport@suissland.xom</p></Link>
                    <Link className = 'footer-link'><p><i className="fas fa-phone-volume mx-3"></i>+1.234.567.890</p></Link>
                </Col>
                <Col sm>
                <h2>COMPANY</h2>
                    <Link className = 'footer-link'><p>About Us</p></Link>
                    <Link className = 'footer-link'><p>Team</p></Link>
                    <Link className = 'footer-link'><p>Services</p></Link>
                    <Link className = 'footer-link'><p>Process</p></Link>
                    <Link className = 'footer-link'><p>Pricing</p></Link>
                </Col>
                <Col sm>
                <h2>HELP</h2>
                    <Link className = 'footer-link'><p>Search</p></Link>
                    <Link className = 'footer-link'><p>Information</p></Link>
                    <Link className = 'footer-link'><p>Privacy Policy</p></Link>
                    <Link className = 'footer-link'><p>Shipping Details</p></Link>
                    <Link className = 'footer-link'><p>sharing industry</p></Link>
                </Col>
            </Row>
            <p className = 'mt-5'>©2021 BoldThemes All rights reserved</p>
            </Container>
        </div>
    );
};

export default Footer;





