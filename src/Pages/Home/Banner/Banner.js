import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
const img1 = "https://i.ibb.co/K5CcF3d/5923705.jpg";
const img2 = "https://i.ibb.co/XkqXjtr/ORH91S0.jpg";
const img3 = "https://i.ibb.co/C7n5Vjw/Laptop-Mock-up-Isolated.jpg";


const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item >
                    <img
                        className=" d-block w-100 img-fluid"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-dark">Laptop World</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className=" d-block w-100 h-75 img-fluid"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100 h-75 img-fluid"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;