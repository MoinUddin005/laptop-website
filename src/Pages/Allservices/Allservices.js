import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Allservice from './Allservice';
const Allservices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allservices/')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h2  className="text-primary mt-5">Our services</h2>
            <Container className="my-5">

                <Row xs={1} md={3} className="g-4">

                {
                    services.map(service => <Allservice
                        key={service.id}
                        service={service}
                    ></Allservice>)
                }
                
                </Row>

            </Container>
        </div>
    );
};

export default Allservices;