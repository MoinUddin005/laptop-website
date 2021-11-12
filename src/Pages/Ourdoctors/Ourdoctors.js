import React, { useEffect, useState } from 'react';
import Ourdoctor from '../Ourdoctor/Ourdoctor';
import { Container, Row } from 'react-bootstrap';

const Ourdoctors = () => {
    const [doctors, setdoctors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setdoctors(data));
    }, [])

    return (
        <div>
            <h2  className="text-primary mt-5">Our Doctors</h2>
            <Container className="my-5">

                <Row xs={1} md={3} className="g-4">

                {
                    doctors.map(doctor => <Ourdoctor
                      key={doctor.id}
                      doctor={doctor}

                    ></Ourdoctor> )
                }
                
                </Row>

            </Container>
        </div>
    );
};

export default Ourdoctors;