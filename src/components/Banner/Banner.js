import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../src/images/banner/banner1.jpg'
import banner2 from '../../../src/images/banner/banner2.jpg'
import banner3 from '../../../src/images/banner/banner3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= {banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3  className ='banner-color'>Zenits</h3>
                    <p  className ='banner-color'>NOMOS may be best known for its minimalist watches that embrace the Bauhaus school of design, but while all NOMOS watches share a unifying design language with an emphasis on simplicity and legibility, the watches are designed for a wide range of intentions.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= {banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3  className ='banner-color'>Blancephina</h3>
                    <p  className ='banner-color'>fter decades of hiatus, Tudor once again returns with a fresh dive watch designed and labeled for Marine Nationale, the French Navy. Enter the Tudor Pelagos FXD, a titanium dive watch that meets a unique set of specificatio.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= {banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3  className ='banner-color'>Marine Nationale</h3>
                    <p  className ='banner-color'>ter decades of hiatus, Tudor once again returns with a fresh dive watch designed and labeled for Marine Nationale, the French Navy. Enter the Tudor Pelagos FXD, a titanium dive watch that meets a unique set of specifications develo.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;<h2>banner</h2>