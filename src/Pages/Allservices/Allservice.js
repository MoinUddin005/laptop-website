import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';

const Allservice = ({ service }) => {
    const { _id,description, img , name , price} = service;
    return (
        <div>
        
        <Col className=" shadow-lg p-3 mb-5 bg-body rounded shadow-none h-100 rounded">
          <Card className="shadow h-100">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title> <b>{name}</b> </Card.Title>
                <p>{description}</p>
                <p>${price}</p>
                
                  <Link to={`/details/${_id}`}>
                  <button type="button" className=" w-50 btn btn-outline-primary">Order Now</button>
                  </Link>

            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default Allservice;